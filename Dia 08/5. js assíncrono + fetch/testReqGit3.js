async function start() {
  const minhaUrl = "https://api.github.com/users/ManoelPradoMark22";

  try {
    const response = await fetch(minhaUrl);
    const user = await response.json(); //transformacao da resposta em objeto javascript
    const reposResponse = await fetch(user.repos_url);
    const repos = await reposResponse.json();
    console.log(repos);
  }catch(err){
    console.log(err);
  }
}

start();
