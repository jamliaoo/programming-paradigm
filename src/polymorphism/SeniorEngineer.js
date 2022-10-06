import User from '../encapsulation/User';

class SeniorEngineer extends User {
  constructor(name, password) {
    super(name, password);
  }

  fixBug(isDrinking) {
    if (isDrinking) {
      console.log("OK, fixed!");
    } else {
      console.log("Hmm...let's google");
    }
  }
}

export default SeniorEngineer;
