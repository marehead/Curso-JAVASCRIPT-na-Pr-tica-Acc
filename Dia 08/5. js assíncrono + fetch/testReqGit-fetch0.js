/*
var usersGithub = "https://api.github.com/users/ManoelPradoMark22";//Sua URL
var xhttp = new XMLHttpRequest();
xhttp.open("GET", usersGithub, false);
xhttp.send();//A execução do script para aqui até a requisição retornar do servidor

response = xhttp.response

console.log(response);
console.log(response.avatar_url);
*/

const minhaUrl = "https://api.github.com/users/ManoelPradoMark22"

fetch(minhaUrl)
.then((response) => {
  console.log(response)
  return response.json();
}).then((data) => {
  console.log('Dados:')
  console.log(data);
  console.log("AVATAR: " + data.avatar_url);
  console.log("*********************");
  console.log('Object.keys(data): ', Object.keys(data));
  Object.keys(data).forEach((item) => {
    console.log(item + " = " + data[item]);
  });
  console.log("*********************");
  ({avatar_url: avatar, followers: seguidores, location:local} = data);
  console.log("Url avatar: " + avatar);
  console.log("Nº seguidores: " + seguidores);
  console.log("Localização: " + local);
}).catch((err) => {
  console.log("Houve algum problema! ERRO: " + err);
});