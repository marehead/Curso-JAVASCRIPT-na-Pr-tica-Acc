async function start() {
  const minhaUrl = "https://api.github.com/users/ManoelPradoMark22";

  const user = await fetch(minhaUrl).then(r => r.json());
  console.log(user.repos_url);
  const userRepos = await fetch(user.repos_url).then(r => r.json());
  console.log(userRepos);
}

start().catch(err => console.log(err));
