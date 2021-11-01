// Interface segregation principle

class Animal {
  constructor(name) {
    this.name = name
  }
}

const walker = {
  walk() {
    console.log(`${this.name} can to walk`)
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} can to swim`)
  }
}

const flyer = {
  fly() {
    console.log(`${this.name} can to fly`)
  }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Eagle.prototype, walker, flyer)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('dog')

dog.walk()
dog.swim()
dog.fly()