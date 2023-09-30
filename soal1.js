const rumus = require('./rumus.js')

// PERSEGI
console.log("Hasil dari luas persegi yang memiliki sisi 10 cm adalah", rumus.luasPersegi(10) + " cm²");
console.log("Hasil dari keliling persegi yang memiliki sisi 10 cm adalah", rumus.kelilingPersegi(10) + " cm");

// PERSEGI PANJANG
console.log("Hasil dari luas persegi panjang yang memiliki panjang 10 cm dan lebar 5 cm adalah", rumus.luasPersegiPanjang(10, 5) + " cm²");
console.log("Hasil dari keliling persegi panjang yang memiliki panjang 10 cm dan lebar 5 cm adalah", rumus.kelilingPersegiPanjang(10, 5) + " cm");