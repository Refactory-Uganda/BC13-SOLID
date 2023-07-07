var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//concreate implementer
//Concrete implementer : Dell
var Dell = /** @class */ (function () {
    function Dell() {
    }
    Dell.prototype.input = function () {
        ("Dell computer is inputing data");
    };
    Dell.prototype.process = function () {
        console.log("Dell computer is processing data");
    };
    Dell.prototype.store = function () {
        console.log("Dell computer is storing data");
    };
    Dell.prototype.output = function () {
        console.log("Dell computer is outputing data");
    };
    return Dell;
}());
//concrete implemetor HP
var HP = /** @class */ (function () {
    function HP() {
    }
    HP.prototype.input = function () {
        ("HP computer is inputing data");
    };
    HP.prototype.process = function () {
        console.log("Hp computer is processing data");
    };
    HP.prototype.store = function () {
        console.log("HP computer is storing data");
    };
    HP.prototype.output = function () {
        console.log("HP computer is outputing data");
    };
    return HP;
}());
//Create abstraction class
var Computer = /** @class */ (function () {
    function Computer(brand) {
        this.brand = brand;
    }
    return Computer;
}());
//cretae Refine abstraction
//Refine Abstraction : Desktop
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop(brand) {
        return _super.call(this, brand) || this;
    }
    Desktop.prototype.getInfo = function () {
        console.log("Getting Desktop's information");
    };
    Desktop.prototype.performTask = function () {
        this.brand.input();
        this.brand.process();
        this.brand.output();
        this.brand.store();
    };
    return Desktop;
}(Computer));
//Refine Abstractor: Laptop
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop(brand) {
        return _super.call(this, brand) || this;
    }
    Laptop.prototype.getInfo = function () {
        console.log("Getting Laptop's Information");
    };
    Laptop.prototype.performTask = function () {
        this.brand.input();
        this.brand.process();
        this.brand.store();
        this.brand.output();
    };
    return Laptop;
}(Computer));
//Refine Abstractor : Walltop
var Walltop = /** @class */ (function (_super) {
    __extends(Walltop, _super);
    function Walltop(brand) {
        return _super.call(this, brand) || this;
    }
    Walltop.prototype.getInfo = function () {
        console.log("Getting Walltop's Information");
    };
    Walltop.prototype.performTask = function () {
        this.brand.input();
        this.brand.process();
        this.brand.store();
        this.brand.output();
    };
    return Walltop;
}(Computer));
//Usage
var dellComputer = new Dell();
var hpComputer = new HP();
var laptop = new Laptop(dellComputer);
var walltop = new Walltop(hpComputer);
var desktop = new Desktop(dellComputer);
laptop.getInfo();
laptop.performTask();
console.log();
walltop.getInfo();
walltop.performTask();
console.log();
desktop.getInfo();
desktop.performTask();
