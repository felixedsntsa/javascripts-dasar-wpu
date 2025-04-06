// SWITCH CONDITION

// SINTAKS
// switch(ekspresi) {
//     case "nilai 1":
//         aksi 1
//     [break;]
//     case "nilai 2":
//         aksi 2
//     [break;]
//     case "nilai n":
//         aksi n
//     [break;]
//     default:
//         aksi default
//     [break;]
// }

// contoh else if
// var angka = prompt('masukkan angka');

// if(angka %2 == 0) {
//     alert(angka + ' adalah bilangan genap.');
// } else if(angka %2 == 1) {
//     alert(angka + ' adalah bilangan ganjil.');
// } else {
//     alert('bukan merupakan angka');
// }

// contoh switch
var namaMakanan = prompt('masukkan nama makanan / minuman: \n (cth: nasi, daging, susu, soft drink, hamburger)');

switch(namaMakanan) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan / minuman sehat');
        break;
    case 'soft drink':
    case 'hamburger':
        alert('makanan / minuman tidak sehat');
        break;
    default:
        alert('makanan / minuman salah');
        break;
} 
// setiap cse tidak perlu break, hanya case terakhir yang memiliki output sama saja yang menggunakan break (hasilnya akan tetap sama, misal memilih nasi nanti masuk ke alert di case susu)