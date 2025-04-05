// CONTROL FLOW

// NORMAL FLOW
// apabila program kita memiliki lebih dari 1 statement, maka statement tersebut akan dieksekusi dari atas ke bawah atau dari kiri ke kanan
alert('Halo');
alert('Nama');
alert('Saya');
alert('Felix'); // akan dieksekusi dari atas terus ke bawah

var angka = prompt('Masukkan angka :');
alert('Angka yang anda masukkan adalah : ' + angka);

// saat membuat program flow tidak harus sealu dari atas ke bawah
// contoh pada pengulangan dan pengkondisian

// PENGULANGAN ATAU LOOP/ITERATION
// sebuah konsep untuk mengerjakan atau mengeksekusi suatu statement secara berulang

// SINTAKS LOOP JS
// for, while, do while
// contoh sederhana
alert('Mulai');
for(var i = 0; i< 5; i++) {
    alert('Hello World');
}
alert('Selesai')

// PENGKONDISIAN
// dimana sebuah program dapat memilih statement yang berbeda tergantung kondisi yang diberikan 

// SINTAKS PENGKONDISIAN
// if, if.. else, if.. else if.. else, switch
// contoh sederhana
var angka = promtp('masukkan angka :');
if(angka % 2 === 0){
    alert(angka + ' adalah bilangan genap');
} else{
    alert(angka + ' adalah bilangan ganjll');
}