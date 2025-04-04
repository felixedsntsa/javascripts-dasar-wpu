// BOOLEAN
// sebuah tipe data yang digunakan untnuk merepresentasikan logika true atau false
// digunakan pada statement pengkondisian, untuk menentukan aksi yang berbeda dan mengatur alur kendali program
var x = 10;
x < 20 // true
"Felix" == "felix" // false (case sensitive harus sama besar kecilnya huruf)

// Boolean(nilai)
Boolean(10 < 20) // true
Boolean(10) // true
Boolean("felix") // true
Boolean(0) // false
Boolean(-1) // true (karena nilai2 yang ada pada js menyimpan nilai true atau false (truthy, falsy))

// truthy = true, non-zero number, "string", object, arrays, functions (menghasilkan nilai true)
// falsy = false, 0, "", undefined, null, NaN (menghasilkan nilai false)

// undefined (sebuah tipe yang dihasilkan ketika mendeklarasikan sebuah variabel tanpa ada isinya)
// null (nilai kosong)
