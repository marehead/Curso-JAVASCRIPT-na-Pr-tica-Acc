fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response) => {
  console.log(response)
  return response;
}).catch((err) => {
  console.log("Houve algum problema! ERRO: " + err);
});