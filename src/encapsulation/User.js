class User {
  #name
  #password

  constructor(name, password) {
    this.#name = name;
    this.#password = password;
  }

  login(name, password) {
    if (this.#name === name && this.#password === password) {
      console.log(`Pass~~`);
    } else {
      console.log("Invalid Credentials!");
    }
  }
}

export default User;
