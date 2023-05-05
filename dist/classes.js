"use strict";
// CLASS KEYWORD ---------------------------
class PlayerOne {
  taunt() {
    console.log("Booyah!");
  }
}
const player1 = new PlayerOne();
// player1.taunt();

// CONSTRUCTOR ------------------------
class PlayerTwo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`hello ${name} and you are ${age}`);
  }
  taunt() {
    console.log("Booyah!");
  }
}

const player2 = new PlayerTwo("marcus", 29);

// CLASS FIELDS ------------------------
class PlayerThree {
  length = 183;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`hello ${name} and you are ${age}`);
  }
}

const player3 = new PlayerThree("Johan", 30);

const length = player3.length;
console.log(length);

// PRIVATE FIELDS ------------------------
class PlayerFour {
  #length = 183;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`hello ${name} and you are ${age}`);
  }

  showLength() {
    console.log(this.#length);
  }
}
const player4 = new PlayerFour("niko", 35);
player4.showLength();

// GETTERS -------------------------------
class PlayerFive {
  #length = 183;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`hello ${name} and you are ${age}`);
  }

  getLength() {
    return this.#length;
  }
}

const player5 = new PlayerFive("lisa", 45);
const getValue = player5.getLength();
console.log(getValue);

// SETTERS
class PlayerSix {
  #weight = 60;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`hello ${name} and you are ${age}`);
  }

  get weight() {
    return this.#weight;
  }

  set weight(weight) {
    this.#weight = weight;
  }
}

const player6 = new PlayerSix("jack", 60);
player6.weight = 80;
console.log(player6.weight);

