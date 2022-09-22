// Część 1

class Duck {
    constructor(type) {
        this.type = type;
    }

    quack = () => console.log("kwa kwa");
    swim = () => console.log("płynę...");
    print = () => console.log(`Wygląda jak ${this.type} kaczka`);
    fly = () => console.log(`Kaczka ${this.type} leci`)
}

const regularDuck = new Duck("zwykła");

regularDuck.quack();
regularDuck.swim();
regularDuck.print();
regularDuck.fly()

// Część 2

class WildDuck extends Duck {
    constructor(type) {
        super(type);
        this.type = "dzika";
    }
}

const wildDuck = new WildDuck();
wildDuck.quack();
wildDuck.swim();
wildDuck.print();
wildDuck.fly();
