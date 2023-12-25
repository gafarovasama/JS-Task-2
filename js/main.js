let gedilenKm = prompt("N litr yanacaqla gedilen kmni qeyd edin:");
let gedenYanacaq = prompt("N kmda istifade olunan yanacagi qeyd edin:");
let gedilecekMesafe = prompt("Gedilecek mesafeni qeyd edin:");


const car = {
    km: gedilenKm,
    yanacaq: gedenYanacaq,
    mesafe: gedilecekMesafe,
    lazimOlanYanacaq: function () {
        console.log( this.mesafe + " km yol ucun istifade edilecek yanacaq: " + this.mesafe / (this.km / this.yanacaq) + " litr");
    },

};

car.lazimOlanYanacaq();