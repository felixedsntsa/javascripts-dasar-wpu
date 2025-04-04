// Operator di javascripts ada 7 dan dibedakan berdasarkan jumlah operand nya
// operator aritmatika, penugasan, perbandingan, logika, dan string masuk ke binary
// sedangkan operator string, kondisional, dan typeof masuk ke ternary
// operator binary membutuhkan 2 operand misal operator1 operand operator2
// operator unary membutuhkan 1 operand misal operator operand
// operator ternary membutuhkan 3 operand 

// OPERATOR ARITMATIKA
// operator aritmatika ada +, -, *, /, % (modulus atau sisa bagi)
// menerapkan KuKaBaTaKu (kurung, kali, bagi, tambah, kurang)

// OPERATOR PENUGASAN ATAU ASSIGNMENT
var x
x = 10 // menugaskan angka 10 untuk berada di var x
// jika dienter hasilnya 10
x = 200 // angka 10 akan digantikan oleh 200 karena 200 merupakan nilai terakhir yang ditugaskan
// jika dienter hasilnya 200
// operator penugasan ada =, +=, -=. *=, /=, %=
x = 10
x += 5 // menambahkan angka 5 pada angka 10
// x += y sama dengan x = x + y
// x -= y sama dengan x = x - y
// x *= y sama dengan x = x*y
// x /= y sama dengan x = x/y
// x %= y sama dengan x = x%y

// OPERATOR PERBANDINGAN ATAU COMPARISON
// == (sama dengan)
// != (tidak sama dengan)
// === (strict sama dengan)
// !== (strict tidak sama dengan)
// > (lebih besar dari)
// < (lebih kecil dari)
// >= (lebih besar sama dengan)
// <= (lebih kecil sama dengan)
// menghasilkan boolean (true or false)
10 == 10 // true
10 == 15 // false
10 != 10 // false
10 != 15 // true
10 == "10" // true (js menganggap sama meskipun tipe data beda)
10 === "10" // flase (operator identitas)

// OPERATOR LOGIKA ATAU LOGICAL
// && (and) (dua duanya harus true)
// || (or) (asal salah satunya benar pasti true)
// ! (not) (membalikkan hasil boolean)
x = 5
(x % 2 == 0) // false (karena 5/2 masih ada sisa)
x = 12
(x % 2 == 0) // true (12 habis dibagi 2)
(x % 2 == 0) && (x < 10) // false (karena 12 lebih besar dari 10)
x = 8
(x % 2 == 0) && (x < 10) // true (8 habis dibagi 2 dan lebih kecil dari 10)
// !
x = 10
(x < 20) // true
!( x < 20) // false

// OPERATOR STRING
// jika operand nya angka maka menjadi operator aritmatika
// jika operand nya string maka menjadi operator penggabung string
a = "apple"
b = "pen"
a + b // hasilnya applepen (gunakan +""+ jika ingin menambahkan spasi)
10 + "10" // "1010"
"10" + 10 // "1010"
10 + 10 + "10" // "2010"
"10" + 10 + 10 // "101010"

// OPERATOR TYPEOF 
// mengetahui tipe data apa dari operand yang kita lakukan
// typeof(operand)
typeof(10) // number
typeof("10") // string
typeof(true) // boolean

// OPERATOR KONDISIONAL ATAU TERNARY
// melakukan pengecekan pada sebuah kondisi dan akan menentukan nilainya true atau false
// (kondisi) ? benar : salah
(x % 2 == 0) ? "genap" : "ganjil" // mengembalikan tulisan genap atau ganjil
x = 6
(x % 2 == 0) ? "genap" : "ganjil" // genap
x = 9
(x % 2 == 0) ? "genap" : "ganjil" // ganjil
