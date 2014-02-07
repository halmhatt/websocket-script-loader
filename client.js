var ws = new WebSocket("ws://localhost:8080");

function createScriptTag(data) {

	var scriptTag = document.createElement("script");
	scriptTag.setAttribute("data-script-url", data.url);
	scriptTag.setAttribute("type", data.contentType);

	var txt = document.createTextNode(data.data);
	scriptTag.appendChild(txt);

	return scriptTag;
}

function addDynamicScript(data) {
	document.head.appendChild(createScriptTag(data));
}

ws.onopen = function() {
	console.log("Connection opened");

	// Send that we want to load a script
	ws.send("js/jquery-1.11.0.min.js");
	ws.send("js/alert.js");
};

ws.onmessage = function(message) {

	var data = JSON.parse(message.data);

	// Check if javascript
	if(data.contentType === "text/javascript") {
		addDynamicScript(data);
	}

	console.log("Received message: ", data);
};