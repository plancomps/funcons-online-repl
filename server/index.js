const { spawn } = require("child_process");

const httpServer = require("http").createServer();
/*  cors: {
    origin: "http://localhost:8080",
  },
*/
// TODO: Fix cors, need to know client URL for that.
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "null"
    }
});
var pty = require('node-pty');
const { exit } = require("process");

const funcons_repl = process.env.FUNCONS_REPL;
if (funcons_repl === null || typeof funcons_repl === 'undefined' ) {
  console.log("Set the FUNCONS_REPL environment variable to the binary location of the funcons REPL.");
  process.exit(1);
}

io.use((_socket, next) => {
  next();
});


io.on("connection", (socket) => {
  setTimeout(() => socket.disconnect(true), 900000); // For now a 15 minute timeout?

  // TODO: fix handling of size of pty.
  var ptyProcess = pty.spawn(funcons_repl, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
  });


  ptyProcess.on('data', function(data) {
    socket.emit("response", {
        content: data
    });
  });

  ptyProcess.onExit((_e, _signal) => socket.disconnect(true));

  socket.on("command", (command) => {
      ptyProcess.write(command);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    ptyProcess.kill();
  });
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);
