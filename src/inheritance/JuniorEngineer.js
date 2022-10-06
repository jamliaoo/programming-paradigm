import User from '../encapsulation/User';

class JuniorEngineer extends User {
  constructor(name, password) {
    super(name, password);
  }

  fixBug() {
    console.log("Hmm...let's google");
  }
}

export default JuniorEngineer;
