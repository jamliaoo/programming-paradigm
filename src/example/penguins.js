const penguinsData = [
  { name: "Jack", size: "big" },
  { name: "Mark", size: "big" },
  { name: "Alan", size: "small" },
  { name: "Iris", size: "small" },
];

class Penguin {
  constructor(data) {
    this.name = data.name;
    this.size = data.size;
  }
  work() {
    if (this.size === "big") {
      console.log(this.name + "got 10 fish");
    }
    if (this.size === "small") {
      console.log(this.name + "got 5 fish");
    }
  }
}

class BigPenguin extends Penguin {
  constructor(data) {
    super(data);
  }
  work() {
    console.log(this.name + "got 10 fish");
  }
}

class SmallPenguin extends Penguin {
  constructor(data) {
    super(data);
  }
  work() {
    console.log(this.name + "got 5 fish");
  }
}

function work() {
  const penguins = penguinsData.map((data) =>
    data.size === "big"
      ? new BigPenguin(data)
      : new SmallPenguin(data)
  );
  penguins.forEach((penguin) => penguin.work());
  penguins.forEach((penguin) => penguin.takeABreak());
}

work();
