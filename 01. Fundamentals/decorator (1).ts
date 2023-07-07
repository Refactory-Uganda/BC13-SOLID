abstract class Computer{
    price: number;
     getPrice(): number{
        return this.price
    };
    setPrice(price):void {
        this.price=price
}
}

class Desktop extends Computer{

    getPrice() {
        return 3000;
    }
    setPrice(price){
        this.price = price;
    }
}

class Laptop extends Computer{
    getPrice() {
        return 2000;
    }
    setPrice(price){
        this.price = price;
    }
}
class Accessory extends Computer{

    computer: Computer;
    constructor(computer: Computer){
        super();
        this.computer = computer
    }
   
}

class ScreenGuard extends Accessory{
    getPrice() {
        return this.computer.getPrice()+ 100
    }
   
}
class MousePad extends Accessory{
    getPrice() {
        return this.computer.getPrice()+ 200
    }
}
class HeadSets extends Accessory{
    getPrice() {
        return this.computer.getPrice()+ 300
    }
}
class KeyboardCover extends Accessory{
    getPrice() {
        return this.computer.getPrice()+ 300
    }
}

let laptop = new Laptop(); 
console.log("Laptop Price:",laptop.getPrice()); 

let laptopscreenguard: Computer = new ScreenGuard(laptop);
console.log("New Laptop Price:",laptopscreenguard.getPrice()); 

