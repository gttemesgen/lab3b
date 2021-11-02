class Car {
  name: any;
  constructor(name) {
    this.name = name;
    this.accelerate = this.accelerate;
  }
  honk() {
    console.log(` ${this.name} is saying: Toooooooooot!`);
  }
  accelerate(speed) {
    this.accelerate = this.accelerate + speed;
  }
}
var car1= new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
