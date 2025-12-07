console.log("---Tiket Masuk Zoo---");

let pengunjung = [{nama: "Judy", umur: 4},{nama: "Joko", umur: 35},{nama: "Sela", umur: 65},{nama: "Zell", umur: 10}];

let hargaTicket = 50000;

for (let i = 0; i < pengunjung.length; i++) {
    let namaPengunjung = pengunjung[i].nama;
    let umurPengunjung = pengunjung[i].umur;
    let pesan = "";

    if (umurPengunjung < 5) {
        pesan = "Free! untuk balita";
    } else if (umurPengunjung <= 12) {
        pesan = "Diskon 50% harga tiket: " + (hargaTicket / 2);
    } else if (umurPengunjung >= 60) {
        pesan = "Diskon 30% harga tiket: " + (hargaTicket * 0.7);
    } else {
        pesan = "Harga normal: " + hargaTicket;
    }

    console.log("Nama pengunjung: " + namaPengunjung);
    console.log("Umur           : " + umurPengunjung + " tahun");
    console.log("Keterangan     : " + pesan);
}
