let penjaga1 = "Judy Hoops";
let penjaga2 = "Nick Wilde";
let lariJudyPerhari = 3;
let lariNickPerhari = 2;
let totalLariJudy = 0;
let totalLariNick = 0;

console.log("=== LATIHAN PENJAGA ZOOTOPIA===\n");
console.log("Jarak lari per hari:");
console.log(penjaga1 + ":", lariJudyPerhari, "km");
console.log(penjaga2 + ":", lariNickPerhari, "km\n");
for(i = 1; i <= 5; i++){
    console.log("Hari", i + ":");
    console.log("-", penjaga1, "lari", lariJudyPerhari, "km");
    console.log("-", penjaga2, "lari", lariNickPerhari, "km\n");
    totalLariJudy += lariJudyPerhari;
    totalLariNick += lariNickPerhari;
}
console.log("=== TOTAL JARAK SELAMA 5 HARI ===");
console.log(penjaga1 + ":", totalLariJudy, "km");
console.log(penjaga2 + ":", totalLariNick, "km");

