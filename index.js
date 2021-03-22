import socket from "./socket";

socket.connect();
var term = new Terminal();

socket.on("connect_error", (err) => { term.write("\n\r--- Server not responding...."); });

socket.on("response", (resp) => { term.write(resp.content); });

socket.on("disconnect", () => {
    term.write("\n\r--- Server disconnected...");
  });

term.open(document.getElementById('terminal'));
term.onKey((ev) => {
    //var enc = new TextEncoder(); // TODO: encode for utf-8?
    socket.emit("command", ev.key);
});
