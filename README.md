# Websocket script loader
Load scripts dynamicly with websocket instead of individual http-requests. 

*This code is not stable, just a demo to verify that it works*

**This is not optimal**, *it does not work with the browsers cache so this is someting that needs to be implemented by the site owner*

## Usage
The base stuff is really simple:

1. Ask the server for a script file
2. Server finds that script file and sends the contents
3. Client receives the script file contents and adds it to the DOM

### Server
The server is done using node with the `ws` plugin. 

```shell
$ node server.js
```


### Client
On the client site you need to include `client.js`, check the very simple `test.html`

```html
<script src="client.js"></script>
```

This will just do the demo, downloading `jquery-1.11.0.min.js` and `alert.js` from the server and add them to the DOM in script elements. 

`jquery-1.11.0.min.js` is *jQuery* downloaded and stored on the server.
`alert.js` is just an example, it alerts:

> Well hello, websocket dynamic script loading worked!

Look at your html and you will find the following:

```html
<script data-script-url="js/jquery-1.11.0.min.js" type="text/javascript">jquery content...</script>
<script data-script-url="js/alert.js" type="text/javascript">alert("Well hello, websocket dynamic script loading worked!");</script>
```