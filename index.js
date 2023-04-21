let ElectricLamp = function () {
    this.status;
    this.turnOff = function () {
        this.status = false;
    }
    this.turnOn = function () {
        this.status = true;
    }
}
function SwitchButton() {
    this.status;
    this.switchOn = function () {
        this.status = true;
        this.electricLamp.turnOn();
        document.write("<br/>cong tac = " + this.status);
        document.write("<br/>bong den = " + this.electricLamp.status);
    }
    this.switchOff = function () {
        this.status = false;
        this.electricLamp.turnOff();
        document.write("<br/>cong tac = " + this.status);
        document.write("<br/>bong den = " + this.electricLamp.status);

    }
    this.connectToLamp = function (electricLamp) {
        this.electricLamp = electricLamp;
    }
}

let electricLamp = new ElectricLamp();
let switchButton = new SwitchButton();
switchButton.connectToLamp(electricLamp);
switchButton.switchOff();
switchButton.switchOn();
