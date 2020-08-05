// Interface segregation principle

class Animal {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log(`${this.name} can walk`)
  }

  swim() {
    console.log(`${this.name} can swim`)
  }

  fly() {
    console.log(`${this.name} can fly`)
  }
}

class Pig extends Animal {
  fly() {
    return null
  }
}

class Eagle extends Animal {
  swim() {
    return null
  }
}

class Whale extends Animal {
  fly() {
    return null
  }

  walk() {
    return null
  }
}

const pig = new Pig('Peppa')

pig.walk()
pig.swim()
pig.fly()

const eagle = new Eagle('Aigle')

eagle.walk()
eagle.swim()
eagle.fly()

const whale = new Whale('Baleine')

whale.walk()
whale.swim()
whale.fly()
