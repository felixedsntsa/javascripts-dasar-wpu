// STRING
// tipe data string dalam js digunakan untuk merepresentasikan data tekstual (plain text)
// bisa pakai "" atau '' tidak boleh awalan " akhiran '
"Hari ini adalah hari Jum'at" // gunakan "" jika ada '
'kami sedang mengadakan kegiatan "Gerakan Pungut Sampah"' // gunakan '' jika ada ""
"Felix" // Felix
'Santosa' // Santosa
'"Gerakan Pungut Sampah" dilakukan pada hari Jum'at' 
// dianggap selesai pada akhiran Jum untuk at nya tidak dianggap

// ESCAPE CHARACTER
// \0 (karakter NULL)
// \' (')
// \" (")
// \\ (\)
// \n (new line/baris baru)
// \t (tab)
// \b (backspace)
// \uXXXX (unicode) 
'"Gerakan Pungut Sampah" dilakukan pada hari Jum\'at' // dapat tereksekusi normal
"\"Gerakan Pungut Sampah\" dilakukan pada hari Jum'at" // dapat tereksekusi normal
'ini adalah hari jum\'at'
'ini adalah hari \n jum\'at' // jumat nya turun satu baris
'ini adalah hari \t jum\'at' // akan ter tab

// UNICODE
// \u00A9 (copyright)
// \u00AE (r)
// \u00B1 (+ ada garis bawahnya)
// \u00B5 (huruf u dengan awalan ketarik ke bawah)
// \u2122 (trademark)

// CONCATENATION
// penggabung dua buah string

// membandingkan dua buah string sama atau tidak (case sensitive) (==)
// .lenght
"Felix".lenght // 5
var nama = "Felix Edna Santosa"
nama.lenght // 18 (juga menghitung spasi)
