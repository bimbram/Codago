class carFactory {
  constructor() {
    this.cars = [];
    this.carBrands = ["Tesla", "Toyota", "BMW"];
    this.tyreBrands = ["Bridgestone", "Michelin"];
  }

  produceSpecificCar(car, quantity) {
    if (quantity <= 0 || quantity === undefined) {
      console.log("You must create at least one car");
      return;
    }
    var carBrand = null;

    for (var x = 0; x < quantity; x++) {
      if (car === "Tesla") {
        carBrand = Tesla;
      } else if (car === "Toyota") {
        carBrand = Toyota;
      } else if (car === "BMW") {
        carBrand = BMW;
      } else {
        return false;
      }
      this.cars.push(new carBrand());
    }
  }

  produceRandomCar(quantity) {
    for (var y = 0; y < quantity; y++) {
      var carBrand = this.carBrands[this.randomNumber("carbrands")];
      this.produceSpecificCar(carBrand, 1);
    }
  }

  monthlyProduction() {
    var monthlyProductionQuantity = this.randomNumber("monthlyproduction");
    this.produceRandomCar(monthlyProductionQuantity);
    this.setTyreBrands("all", this.tyreBrands[this.randomNumber('tyrebrands')]);
    this.setRandomProductionYear();
    this.setGuarantee(2017)
    console.log("Total Monthly Production: " + monthlyProductionQuantity + " Cars")
  }

  setGuarantee(year) {
    this.cars.forEach(function(car) {
      car.guarantee = year - car.productionYear;
    })
  }

  setProdutionYear(year) {
    this.cars.forEach(function(car) {
      car.productionYear = year;
    });
  }

  setRandomProductionYear() {
    var self = this;
    this.cars.forEach(function(car) {
      car.productionYear = self.randomNumber("productionyear");
    });
  }

  randomNumber(randomNumberType) {
    switch (randomNumberType) {
      case "carbrands":
        var randomNum = Math.floor(
          Math.random() * (this.carBrands.length + 1)
        );
        if (randomNum !== 0) {
          randomNum = randomNum - 1;
        }
        return randomNum;
      case "tyrebrands":
        var randomNum = Math.floor(
          Math.random() * (this.tyreBrands.length + 1)
        );
        if (randomNum !== 0) {
          randomNum = randomNum - 1;
        }
        return randomNum;
      case "productionyear":
        var randomNum =
          Math.floor(Math.random() * (2017 - 2000 + 1)) + 2000;
        return randomNum;
      case "monthlyproduction":
        var randomNum = Math.floor(Math.random() * 100)
        return randomNum;
    }
  }

  setTyreBrands(carIndex, tyreBrand) {
    var choosenTyreBrand = "nonbranded";
    this.tyreBrands.forEach(function(item) {
      if (item.toLowerCase() === tyreBrand.toLowerCase()) {
        choosenTyreBrand = item;
      }
    });

    if (carIndex.toLowerCase() === "all") {
      this.cars.forEach(function(car) {
        car.tyreBrand = tyreBrand;
      });
    } else if (typeof carIndex !== "number") {
      console.log("please input specific number");
      return;
    } else if (carIndex >= this.cars.length || carIndex < this.cars.length) {
      console.log("there is no such car");
      return;
    } else if (this.cars[carIndex]) {
      this.cars[carIndex] = tyreBrand;
      return;
    }
  }
}

class Car {
  constructor() {
    this.tyreBrand = "nonbranded";
    this.doors = 4;
    this.productionYear = 2017;
  }
}

class Tesla extends Car {
  constructor() {
    super();
    this.carBrand = "Tesla";
    this.doors = 2;
  }
}

class Toyota extends Car {
  constructor() {
    super();
    this.carBrand = "Toyota";
    this.doors = 4;
  }
}

class BMW extends Car {
  constructor() {
    super();
    this.carBrand = "BMW";
    this.doors = 4;
  }
}

class Tyre {
  constructor() {
    this.partsName = "tyre";
  }
}

class Bridgestone extends Tyre {
  constructor() {
    super();
    this.tyreBrand = "Bridgestone";
  }
}

class Michelin extends Tyre {
  constructor() {
    super();
    this.tyreBrand = "Michelin";
  }
}

var factory = new carFactory();
factory.monthlyProduction();
console.log("Cars Description :");
console.log(factory.cars);
