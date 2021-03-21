# funcons-online-repl
Front-end and web-server to interact with the funcons REPL

# Installation
Start in the root directory and run
```console
npm install
npm run build
```
Then change to the server directory and install the server dependencies
```console
cd server
npm install
```

# Running
From the server directory, run the following snippet.
```console
export FUNCONS_REPL=<location_to_repl>; npm start
```
After, you can open the index.html in a browser and a terminal connected to a funcons-repl should show up.
