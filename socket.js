import { io } from "socket.io-client";

const URL = (""+window.location.hostname)+":3000";
const socket = io(URL, { autoConnect: false });

// TODO: remove
socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
