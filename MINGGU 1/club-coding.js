const prompt = require('prompt-sync')();
const nama = prompt("masukkan nama anda: ");
const umur = parseInt(prompt("masukkan umur anda: "), 10);

let sisaUmur = 21 - umur;

if (umur < 21) {
    console.log(`Maaf ${nama}, umur kamu kurang ${sisaUmur} tahun lagi`);
}
