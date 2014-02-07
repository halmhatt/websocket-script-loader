var WebSocketServer = require("ws").Server,
	fs = require("fs"),
	wss = new WebSocketServer({port: 8080});

console.log("Websocket server started at ws://localhost:8080");

wss.on('connection', function(ws) {
	// When message is received
	ws.on('message', function(message) {
		var file = message;

		if(fs.existsSync(file)) {
			var data = fs.readFileSync(file);

			// Is the file a javascript file?
			var contentType = /\.js$/.test(file) ? "text/javascript" : "text";

			ws.send(JSON.stringify({
				url: file,
				contentType: contentType,
				data: data.toString()
			}));

			console.log("Sending file: " + file);
		}

		console.log("Received: %s", message);
	});
});
