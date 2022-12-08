class Animal {
  makeNoise() {
    console.log("I am making noise");
  }
}

class Dog extends Animal {
  makeNoise() {
    throw new Error("What's up");
  }
}
