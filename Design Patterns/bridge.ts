//create the implementer calss
interface Brand{
    input():void;
    process(): void;
    store(): void;
    output(): void;
}

//concreate implementer
//Concrete implementer : Dell
class Dell implements Brand{
    input(): void {
        console.log("Dell computer is inputing data");
    }
    process(): void {
        console.log("Dell computer is processing data");
    }
    store(): void {
        console.log("Dell computer is storing data");
    }
    output(): void {
        console.log("Dell computer is outputing data");
    }
}

//concrete implemetor HP
class HP implements Brand{
     input(): void {
        console.log("HP computer is inputing data");
    }
    process(): void {
        console.log("Hp computer is processing data");
    }
    store(): void {
        console.log("HP computer is storing data");
    }
    output(): void {
        console.log("HP computer is outputing data");
    }

}

//Create abstraction class
abstract class Computer{
    protected brand: Brand;
    constructor(brand:Brand) {
        this.brand=brand
    }
    abstract getInfo(): void;
    abstract performTask(): void

}

//cretae Refine abstraction
//Refine Abstraction : Desktop
class Desktop extends Computer{
    constructor(brand:Brand) {
        super(brand)
    }
    getInfo(): void {
        console.log("Getting Desktop's information");
    }
    performTask(): void {
        this.brand.input();
        this.brand.process();
        this.brand.output();
        this.brand.store();
    }

}

//Refine Abstractor: Laptop
class Laptop extends Computer{
    constructor(brand: Brand) {
        super(brand)
    }

    getInfo(): void {
        console.log("Getting Laptop's Information")
    }
    performTask(): void {
        this.brand.input();
        this.brand.process();
        this.brand.store()
        this.brand.output()
    }
}

//Refine Abstractor : Walltop
class Walltop extends Computer{
    constructor(brand: Brand) {
        super(brand)
    }
    getInfo(): void {
        console.log("Getting Walltop's Information")
    }
    performTask(): void {
        this.brand.input();
        this.brand.process();
        this.brand.store();
        this.brand.output()
    }
}

//Usage

let dellComputer: Brand = new Dell();
let hpComputer: Brand = new HP();

let laptop: Computer = new Laptop(dellComputer);
let walltop: Computer = new Walltop(hpComputer);
let desktop: Computer = new Desktop(dellComputer);

laptop.getInfo();
laptop.performTask();
console.log();

walltop.getInfo();
walltop.performTask();
console.log();

desktop.getInfo();
desktop.performTask();
