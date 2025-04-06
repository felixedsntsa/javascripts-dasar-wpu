var main = true;
while(main) {
    var comp = Math.floor(Math.random()*10) + 1;
    var kesempatan = 3;
    alert('Tebak angka 1-10\nkamu punya 3 kesempatan')

    while(kesempatan > 0) {
        var p = parseInt(prompt('Masukkan angka tebakan:'))
        if(p == comp) {
            alert('Tebakanmu benar yaitu ' + comp)
            break;
        } else if(p > comp) {
            alert('Angka terlalu tinggi')
        } else if(p < comp) {
            alert('Angka terlalu rendah')
        } else {
            alert('Yang anda masukkan bukan angka')
        }
        kesempatan--;

        if(kesempatan > 0) {
            alert('Kesempatan anda sisa ' + kesempatan)
        }
    }

    if(kesempatan === 0) {
        alert('Kesempatan anda habis\nAngka yang benar adalah ' + comp)
    }

    main = confirm('coba lagi?')
}

alert('Terima kasih sudah bermain')