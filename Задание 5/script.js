// какой то объект, далее преобразуем в json перед отправкой
const data = {
    name: "John Snow",
    age: 30, 
    role: "King of Winterfall"
}

const ws = new WebSocket ("ws://localhost:8082");

ws.addEventListener("open", () => {
    console.log("Мы соединились")

    ws.send(JSON.stringify(data))
    // ws.send(`А вот и данные`)
})
