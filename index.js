import socket from "./socket";
import { FitAddon } from 'xterm-addon-fit';

socket.connect();
var term = new Terminal({
    theme: {
        background: '#300A24',
        foreground: '#ffffff'
    }
});

const fitAddon = new FitAddon();

socket.on("connect_error", (err) => { term.write("\n\r--- Server not responding...."); });

socket.on("response", (resp) => { term.write(resp.content); });

socket.on("disconnect", () => {
    term.write("\n\r--- Server disconnected...");
  });

term.open(document.getElementById('terminal'));
//TODO: UTF-8 Needs to be handled. Something like ä returns ?? now.
// Not yet sure if this in issue server side or client side.
term.onData((ev) => {
	socket.emit("command", ev);
});

var dead = false;
var prev = null;
term.attachCustomKeyEventHandler((ev) => {
    if (ev.keyCode === 0) {
        dead = true;
        return false;
    }
    if (dead && ev.keyCode === prev.keyCode) {
        return true;
    }
    let prop = !dead;
    prev = ev;
    dead = false;
    return prop;
});

terminal.loadAddon(fitAddon);
fitAddon.fit();
