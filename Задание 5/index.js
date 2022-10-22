// смело запускаем node index.js

const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8082});

// ждем клиента чтобы подключился
wss.on('connection', ws => {
    console.log("New client connected!");

//посылаем сообщение 
ws.on("message", data => {
    console.log(`Клиент что то отправил, а точнее json: ${data}`)
    // затем уже можно распарсить json и работать с данными
})


// при отключении клиента
ws.on("close", () => {
    console.log("Client is disconnected")
})

});