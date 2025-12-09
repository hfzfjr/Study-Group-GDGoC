const prompt = require('prompt-sync')();
const nama = prompt("masukkan nama anda: ");
const umur = parseInt(prompt("masukkan umur anda: "), 10);

let sisaUmur = 21 - umur;

if (umur < 21) {
    console.log(`Maaf ${nama}, umur kamu kurang ${sisaUmur} tahun lagi`);
} else if (umur >= 21) {
    const uang = parseInt(prompt("masukkan jumlah uang anda: "), 10);
    if (uang < 500000) {
        console.log(`Maaf ${nama}, uang kamu cuma ${uang} ribu, datang lagi lain kali`);
    } else {
        console.log(`Selamat datang ${nama}`);
    }
}
