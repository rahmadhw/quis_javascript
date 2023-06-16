// Soal Nomor 1

//   1. Jika nilai score lebih atau sama dengan 90
//       - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
//   2. Jika nilai score ada di antara 80 hingga 89
//       - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
//   3. Jika nilai score ada di antara 70 hingga 79
//       - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
//   4. Jika nilai score ada di antara 60 hingga 69:
//       - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
//   5. Jika nilai score di bawah 60:
//       - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'



// const logika = ()=> {
//     let tebak = parseInt(prompt('Score Anda tuliskan'));
//     let result = "";
//     if (tebak >= 90) {
//         result = "Selamat, Anda mendapatkan nilai A"
//     }else if (tebak >= 80 && tebak <= 89) {
//         result = "Anda mendapatkan nilai B"
//     }else if (tebak >= 70 && tebak <= 79) {
//         result = "Anda mendapatkan nilai C";
//     }else if (tebak >= 60 && tebak <= 69) {
//         result = "Anda mendapatkan nilai D"
//     }else {
//         result = "Anda mendapatkan nilai E"
//     }

//     return result
// }


// console.log(logika())

// ====================================================================================

// Soal Nomor 2

// Push angka angka ganjil dari variable angka kedalam variable ganjil.
// Variable ganjil harus berisi [1,75,89,101]
// Jangan ubah variable angka


// let angka = [1, 46, 75, 12, 89, 54, 101];
// let ganjil = []
// angka.map((e) => {
//     if (e % 2 == 1) {
//         ganjil.push(e);
//     }
// })

// console.log(ganjil)

// =====================================================================================

// Soal Nomor 3


// Buat sebuah fungsi penjumlahkan sederhana yang menampilkan output sebagai berikut menggunakan array looping pada javascript


// const angka = [1,2,3,4,10,11];

// // buat function jumlahkan()

// function jumlahkan(angka) {
//     var total = 0;
//     for (let i = 0; i < angka.length; i++) {
//        total += angka[i]
//     }

//     return total
    
// }

// const hasil = " 1 + 2 + 3 + 4 + 10 + 11 = "+ jumlahkan(angka)+"" ;
// console.log(hasil) ;

// =========================================================================================

// Soal No 4

// Anda bertanggung jawab atas kue untuk ulang tahun anak. Anda telah memutuskan bahwa kue tersebut akan memiliki satu lilin untuk setiap tahun dari total umurnya. Mereka hanya bisa meniup lilin yang paling tinggi. Hitung berapa lilin yang paling tinggi.

// const lilin = [3,2,1,3,1,1]; //ketinggian lilin

// buat function hitunglilinPalingTinggi();

// function hitunglilinPalingTinggi(lilin){
//     let maxNum = Math.max(...lilin);
// 	let kata1 = "ada";
// 	let kata2 = "buah lilin paling tinggi"
// 	let filtered = lilin.filter(function(value, index, arr) {
// 	    return value === maxNum;
// 	});
// 	return kata1.concat(" (", filtered.length) + ") " + kata2 ;
// }


// let hasil = hitunglilinPalingTinggi(lilin);
// console.log(hasil); // hasil output harus seperti ini 'ada (2) buah lilin paling tinggi'

// ===============================================================================================

// Soal Nomor 5

// Buat fungsi untuk mengkonversi jam (5:30) menjadi kata kata (penyebutan dalam bhs indonesia)

// 5:00 = Jam lima tepat x
// 5:01 = Jam lima lebih satu menit 
// 5:15 = Jam lima lebih seperempat x
// 5:29 = Jam {jam} lebih {jam} menit
// 5:30 = Jam setengah enam x

// 5:31 = Jam enam kurang dua puluh sembilan menit
// 5:45 = Jam enam kurang seperempat x
// 5:59 = Jam enam kurang satu menit


// const penulisanJam = (jam) => {
//    let detik1 = jam.substring(0,1);
//    let detik2 = jam.substring(2,8);
//    if (detik1 === '5' && detik2 === '00') {
//      return 'jam lima tepat x ' + "{" + detik2 + '}' + ' menit'
//    }else if (detik1 === '5' && detik2 === '01') {
//     return "jam lima lebih satu menit";
//    }else if (detik1 === '5' && detik2 === '15') {
//     return "jam lima lebih seperempat x " + "{" + detik2 + "}" + " menit";
//    }else if (detik1 === '5' && detik2 === '29') {
//     return "jam " + detik1 + " lebih " + detik2 + " menit";
//    }else if (detik1 === '5' && detik2 === '30') {
//     return "jam setengah enam x " + detik2 + " menit"
//    }else if (detik1 === '5' && detik2 === '31') {
//     return "Jam enam kurang dua puluh sembilan menit"
//    }else if (detik1 === '5' && detik2 === '45') {
//     return "Jam enam kurang seperempat x " + "{" + detik2 + "}" + " menit"
//    }else if (detik1 === '5' && detik2 === '59') {
//     return "Jam enam kurang satu menit";
//    }else {
//     return "maaf"
//    }

// }

// const text1 = penulisanJam('5:00');
// const text2 = penulisanJam('5:01');
// const text3 = penulisanJam('5:15');
// const text4 = penulisanJam('5:29');
// const text5 = penulisanJam('5:30');
// const text6 = penulisanJam('5:31');
// const text7 = penulisanJam('5:45');
// const text8 = penulisanJam('5:59');
// console.log(text1);
// console.log(text2);
// console.log(text3);
// console.log(text4);
// console.log(text5);
// console.log(text6);
// console.log(text7);
// console.log(text8);




















