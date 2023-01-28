async function start() {
  const minhaUrl = "https://api.github.com/users/ManoelPradoMark22";
  //https://developer.mozilla.org/en-US/docs/Web/API/Response/json#return_value
  const response = await fetch(minhaUrl);
  console.log(response);
  const user = await response.json();
  console.log(user);
  const reposResponse = await fetch(user.repos_url);
  console.log(reposResponse);
  const repos = await reposResponse.json();
  console.log(repos);
}

start().catch(err => console.log(err));
