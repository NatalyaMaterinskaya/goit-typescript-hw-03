class Key {
  private signature = Math.floor(Math.random() * 11);

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  door: true | false;
  tenants: Person[] = [];

  constructor(private key: Key) {}

  comeIn(obj: Person) {
    if (this.door === true) {
      this.tenants.push(obj);
    }
    return this.tenants;
  }

  public abstract openDoor(obj: Key): boolean;
}

class MyHouse extends House {
  public openDoor(obj: Key): boolean {
    if (key.getSignature() === obj.getSignature()) {
      this.door = true;
      return this.door;
    }
    this.door = false;
    return this.door;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
