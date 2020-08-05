// Interface segregation principle
//
// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//
//   walk() {
//     console.log(`${this.name} умеет ходить`)
//   }
//
//   swim() {
//     console.log(`${this.name} умеет плавать`)
//   }
//
//   fly() {
//     console.log(`${this.name} умеет летать`)
//   }
// }
//
// class Dog extends Animal {
//   fly() {
//     return null
//   }
// }
//
// class Eagle extends Animal {
//   swim() {
//     return null
//   }
// }
//
// class Whale extends Animal {
//   fly() {
//     return null
//   }
//
//   walk() {
//     return null
//   }
// }
//


class Animal {
  constructor(name) {
    this.name = name
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} can swim`)
  }
}

const flier = {
  fly() {
    console.log(`${this.name} can fly`)
  }
}

const walker = {
  walk() {
    console.log(`${this.name} can walk`)
  }
}

class Pig extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Pig.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Pig('Peppa')
dog.walk()
dog.swim()

const eagle = new Eagle('Aigle')
eagle.fly()
eagle.walk()

const whale = new Whale('Baleine')
whale.swim()
