const minhaUrl = "https://api.github.com/users/ManoelPradoMark22"

fetch(minhaUrl)
.then(response => response.json())
.then(data => fetch(data.repos_url))
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log("Houve algum problema! ERRO: " + err));
