function Car(name, model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
  this.getCarInfo = function () {
    document.write(this.name + this.model + this.year);
  };
}

function Person(name, age, car) {
  this.name = name;
  this.age = age;
  this.car = car;
  this.displayInfo = function () {
    document.write(this.name + "არის" + this.age + "წლის");
  };
  this.driveCar = function (car) {
    document.write("ყავს" + car.name + car.model + car.year);
  };
}

var tom = new Person("Tom", 26);
tom.displayInfo();

var tesla = new Car("Tesla", "Model S", "released in 2015");
tom.driveCar(tesla);
