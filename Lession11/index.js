"use strict"
class Diem {
    constructor(ten, diem) {
        this.name = ten;
        this.point = diem;
        console.log("Doi tuong da duoc khoi tao");
    }
    baodiem() {
        console.log("Diem cua " + this.name + " la: " + this.point + " diem");
    }
}

var myPoint = new Diem("ThuongDQ", 9);
myPoint.baodiem();

var tun = new Diem("Tun", "5");
tun.baodiem();