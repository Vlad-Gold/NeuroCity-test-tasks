(async () => {
    let response = await fetch("https://reqres.in/api/users");

if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа, в нашем случа JSON 
  let json = await response.json();
  console.log(json);

  // прочитать тело ответа как текст
//   let text = await response.text(); 
//   console.log(text);
  
} else {
  alert("Ошибка HTTP: " + response.status);
}
  })()

// обычно использую данную библиотеку для работы с JSON и дальнейшей работы с данными
// axios.get('https://reqres.in/api/users')
//     .then(data => console.log(data))