// ANNOTATIONS CLASSES
class Player {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const player = new Player("marcus", 29);
console.log(player.name);
console.log(player.age);

// CLASS FIELDS
class PlayerTwo {
  readonly name: string;
  readonly age: number;
  score: number = 3;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const player2 = new PlayerTwo("johan", 40);
console.log(`score:${player2.score}`);

// PUBLIC AND PRIVATE MODIFIER
class PlayerThree {
  public readonly name: string;
  public readonly age: number;
  private score: number = 3;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// GETTERS AND SETTERS

class PlayerFour {
  private _firstname: string;
  private _lastname: string;
  constructor(firstname: string, lastname: string) {
    this._firstname = firstname;
    this._lastname = lastname;
  }

  get firstname(): string {
    return this._firstname;
  }

  get lastname(): string {
    return this._lastname;
  }

  set firstname(firstname: string) {
    this._firstname = firstname;
  }

  set lastname(lastname: string) {
    this._lastname = lastname;
  }
}
