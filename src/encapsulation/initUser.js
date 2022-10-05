function initUser(userName, userPassword) {
  const name = userName;
  const password = userPassword;
  const login = (userName, userPassword) => {
    if (name === userName && password === userPassword) {
      console.log(`Pass~~`);
    } else {
      console.log("Invalid Credentials!");
    }
  }
  return { login };
}

export default initUser;
