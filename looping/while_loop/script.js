// WHILE LOOP

// SINTAKS
// while(kondisi) {
// aksi
// }
// selama kondisi bernilai true, maka akan terus melakukan aksi di dalamnya

// contoh
// while(true){
//     console.log('hello world');
// }
// akan terus mencetak hello world di console (infinite loop)
// jika kondisi false, maka aksi tidak pernah dieksekusi

// cara menghentikan loop
// dihentikan oleh user

// var ulang = true;
// while(ulang) {
//     console.log('Hello World');
//     ulang = confirm('lagi?'); // ketika user mengklik cancel maka looping berhenti
// }

// dihentikan oleh program
// SINTAKS
// nilai awal
// while(kondisi terminasi) {
// aksi
// increment / decrement
// }

// var nilaiAwal = 1;
// while(nilaiAwal <= 5) {
//     console.log('Hello World');
//     nilaiAwal++; // nilai awal ditambah 1
// }
// ketika angka 1 sudah mencapai 6 maka sudah tidak mencetak hello world di console

// var nilaiAwal = 1;
// while(nilaiAwal <= 10) {
//     console.log('Hello World' + nilaiAwal + 'x')
// }
// menggunakan operasi konkatenasi agar hasil bisa 1x, 2x,.. nx