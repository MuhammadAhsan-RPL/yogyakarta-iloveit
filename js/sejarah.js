// Skrip halaman Sejarah
// Mengatur linimasa dari masa Mataram Kuno hingga UNESCO, perbandingan Tugu, Sumbu Filosofi, dan kuis.

const TAHUN_BERDIRI_KASULTANAN = 1755;

const DAFTAR_BABAK = ["Semua", "Kuno", "Kasultanan", "Revolusi", "Modern"];

const CATATAN_SEJARAH = [
  {
    babak: "Kuno",
    tahun: "Abad ke-8 – 10",
    judul: "Peradaban Mataram Kuno",
    ringkasan: "Pembangunan candi-candi batu andesit besar di lembah subur sekitar Gunung Merapi.",
    rincian: [
      "Wangsa Syailendra dan Sanjaya membangun Candi Kalasan, Sari, Sambisari, Ratu Boko, hingga Prambanan",
      "Abu vulkanik Merapi menyuburkan tanah pertanian sekaligus mengubur sebagian candi selama berabad-abad",
    ],
  },
  {
    babak: "Kasultanan",
    tahun: "13 Februari 1755",
    judul: "Perjanjian Giyanti & Berdirinya Kasultanan",
    ringkasan: "Pangeran Mangkubumi mendirikan Nagari Ngayogyakarta Hadiningrat.",
    rincian: [
      "Bergelar Sri Sultan Hamengkubuwono I dan memilih Hutan Beringan sebagai lokasi ibu kota baru",
      "Merancang sendiri tata ruang kota berporos utara–selatan dari Gunung Merapi hingga Laut Selatan",
    ],
  },
  {
    babak: "Kasultanan",
    tahun: "7 Oktober 1756",
    judul: "Boyong Kedhaton ke Keraton Baru",
    ringkasan: "Perpindahan resmi keluarga kerajaan dari Pesanggrahan Ambarketawang menuju Keraton Yogyakarta.",
    rincian: [
      "Tanggal 7 Oktober kini diperingati setiap tahun sebagai Hari Jadi Kota Yogyakarta",
      "Ditandai dengan sengkalan 'Dwi Naga Rasa Tunggal' pada gerbang Kemagangan dan Gadung Mlati",
    ],
  },
  {
    babak: "Kasultanan",
    tahun: "10 Juni 1867",
    judul: "Gempa Besar Meruntuhkan Tugu Golong Gilig",
    ringkasan: "Guncangan gempa hebat merobohkan puncak tugu silinder yang dibangun masa HB I.",
    rincian: [
      "Bentuk asli Tugu adalah tiang silinder (gilig) dengan puncak bulatan (golong) setinggi sekitar 25 meter",
      "Runtuhnya tugu ini sempat membuat poros utara keraton kehilangan penanda fisik selama dua dekade",
    ],
  },
  {
    babak: "Kasultanan",
    tahun: "3 Oktober 1889",
    judul: "Tugu Pal Putih Berdiri Kembali",
    ringkasan: "Tugu dibangun ulang dengan bentuk persegi meruncing seperti yang kita kenal hari ini.",
    rincian: [
      "Dirancang oleh arsitek Belanda Opzichter van Waterstaat Y.P.F. Van Brussel pada masa Sri Sultan HB VII",
      "Tingginya berubah menjadi 15 meter dengan ornamen pucuk berlapis warna emas",
    ],
  },
  {
    babak: "Revolusi",
    tahun: "5 September 1945",
    judul: "Amanat Integrasi ke Republik Indonesia",
    ringkasan: "Sri Sultan HB IX dan Sri Paduka Paku Alam VIII menyatakan Yogyakarta bagian dari RI.",
    rincian: [
      "Keluar hanya berselang tiga pekan setelah Proklamasi Kemerdekaan di Jakarta",
      "Menjadi tonggak awal pengakuan keistimewaan daerah Yogyakarta dalam bingkai negara kesatuan",
    ],
  },
  {
    babak: "Revolusi",
    tahun: "4 Januari 1946",
    judul: "Yogyakarta Menjadi Ibu Kota Republik",
    ringkasan: "Presiden Soekarno dan Hatta hijrah menggunakan kereta api malam menuju Yogyakarta.",
    rincian: [
      "Gedung Agung di seberang Benteng Vredeburg menjadi istana kepresidenan selama masa darurat",
      "Kasultanan membantu pembiayaan operasional pemerintahan dan gaji pegawai republik dari kas keraton",
    ],
  },
  {
    babak: "Revolusi",
    tahun: "1 Maret 1949",
    judul: "Serangan Umum Enam Jam di Jogja",
    ringkasan: "Tentara dan rakyat merebut kembali pusat kota saat sirene pagi berbunyi.",
    rincian: [
      "Gagasan serangan dirancang Sri Sultan HB IX bersama Jenderal Soedirman dan dipimpin Letkol Soeharto",
      "Kabar keberhasilan disiarkan secara estafet melalui pemancar radio di Playen hingga sampai ke sidang PBB",
    ],
  },
  {
    babak: "Modern",
    tahun: "31 Agustus 2012",
    judul: "Pengesahan Undang-Undang Keistimewaan",
    ringkasan: "UU Nomor 13 Tahun 2012 mengukuhkan tata pemerintahan, kebudayaan, dan tata ruang DIY.",
    rincian: [
      "Mengatur lima urusan keistimewaan: pengisian jabatan gubernur, kelembagaan, kebudayaan, pertanahan, dan tata ruang",
      "Memperkuat pelestarian warisan budaya benda maupun takbenda hingga ke tingkat kalurahan",
    ],
  },
  {
    babak: "Modern",
    tahun: "18 September 2023",
    judul: "Sumbu Filosofi Ditetapkan sebagai Warisan Dunia UNESCO",
    ringkasan: "Sidang ke-45 Komite Warisan Dunia di Riyadh mengakui poros imajiner Yogyakarta.",
    rincian: [
      "Membentang lurus sepanjang 6 kilometer dari Tugu Pal Putih, Malioboro, Keraton, hingga Panggung Krapyak",
      "Mewakili filosofi Jawa tentang keselarasan hubungan manusia dengan Tuhan, sesama, dan alam (Hamemayu Hayuning Bawana)",
    ],
  },
];

// Titik-titik pada Sumbu Filosofi dari utara ke selatan
const TITIK_SUMBU = [
  {
    nama: "Gunung Merapi",
    makna: "Poros Alam Utara (Unsur Api)",
    foto: "images/wisata-nglinggo.webp",
    uraian:
      "Puncak tertinggi di utara Yogyakarta. Dalam kosmologi Jawa, gunung melambangkan tempat yang luhur sekaligus pengingat bahwa manusia hidup berdampingan dengan siklus alam.",
    posisi: 5,
  },
  {
    nama: "Tugu Pal Putih",
    makna: "Manunggaling Kawula Gusti",
    foto: "images/sejarah-tugu-pal-putih.webp",
    uraian:
      "Titik awal perjalanan spiritual menuju selatan. Bentuk aslinya (Golong-Gilig) melambangkan bersatunya tekad rakyat dan pemimpin dalam menghadap Sang Pencipta.",
    posisi: 28,
  },
  {
    nama: "Jalan Mangkubumi & Malioboro",
    makna: "Perjalanan Hidup & Ujian Duniawi",
    foto: "images/wisata-malioboro.webp",
    uraian:
      "Deretan pohon asem dan gayam di sepanjang jalan melambangkan rasa tenteram (ayem). Dari utara menuju Keraton, jalan ini menggambarkan tahapan manusia menuntut ilmu dan bekerja.",
    posisi: 50,
  },
  {
    nama: "Keraton Yogyakarta",
    makna: "Sangkan Paraning Dumadi (Pusat)",
    foto: "images/beranda-sorotan-keraton.webp",
    uraian:
      "Titik temu antara perjalanan dari Panggung Krapyak (kelahiran) dan Tugu (tujuan akhir). Di sinilah pusat kebudayaan, pemerintahan, dan perenungan batin bernaung.",
    posisi: 72,
  },
  {
    nama: "Panggung Krapyak & Laut Selatan",
    makna: "Awal Kehidupan (Unsur Air)",
    foto: "images/wisata-parangtritis.webp",
    uraian:
      "Dari Panggung Krapyak menuju Keraton melambangkan proses kelahiran manusia dari kandungan ibu, tumbuh dewasa melewati pepohonan asem dan tanjung di kampung Mijen.",
    posisi: 94,
  },
];

const SOAL_KUIS = [
  {
    tanya: "Apa nama bentuk asli Tugu Yogyakarta saat pertama kali dibangun pada tahun 1755?",
    pilihan: ["Tugu Pal Putih", "Tugu Golong Gilig", "Tugu Panggung Krapyak", "Tugu Manunggal"],
    jawabanBenar: 1,
    bahasan: "Bentuk awalnya silinder (gilig) dengan bulatan di puncak (golong) sebelum runtuh akibat gempa besar tahun 1867.",
  },
  {
    tanya: "Peristiwa pindah masuknya keluarga kerajaan ke kompleks Keraton Yogyakarta pada 7 Oktober 1756 dikenal dengan istilah...",
    pilihan: ["Perjanjian Giyanti", "Mubeng Beteng", "Boyong Kedhaton", "Grebeg Maulud"],
    jawabanBenar: 2,
    bahasan: "Boyong Kedhaton dari Ambarketawang ke Keraton baru diperingati sebagai Hari Jadi Kota Yogyakarta.",
  },
  {
    tanya: "Rute dari Panggung Krapyak di selatan menuju Keraton Yogyakarta melambangkan filosofi...",
    pilihan: [
      "Perjalanan manusia sejak lahir hingga dewasa (Sangkan)",
      "Kembalinya manusia menghadap Tuhan (Paran)",
      "Perjuangan mempertahankan kemerdekaan",
      "Batas wilayah perdagangan masa kolonial",
    ],
    jawabanBenar: 0,
    bahasan: "Panggung Krapyak ke Keraton melambangkan asal-usul kelahiran (Sangkan), sedangkan Tugu ke Keraton melambangkan tujuan akhir (Paran).",
  },
  {
    tanya: "Pada tahun berapa Sumbu Filosofi Yogyakarta resmi ditetapkan sebagai Warisan Dunia oleh UNESCO?",
    pilihan: ["2003", "2009", "2012", "2023"],
    jawabanBenar: 3,
    bahasan: "Sumbu Filosofi ditetapkan dalam sidang UNESCO pada 18 September 2023.",
  },
];

// Linimasa interaktif
function pasangLinimasa() {
  const wadahLinimasa = ambilId("timeline");
  const garisProgres = ambilId("timeline-progress");
  const wadahFilter = ambilId("era-filter");

  function perbaruiGarisBaca() {
    const kotak = wadahLinimasa.getBoundingClientRect();
    const batasPandang = window.innerHeight * 0.62;
    const tinggi = Math.max(0, Math.min(kotak.height - 12, batasPandang - kotak.top));
    garisProgres.style.height = `${tinggi}px`;
  }

  CATATAN_SEJARAH.forEach((peristiwa, indeks) => {
    const butir = document.createElement("div");
    butir.className = "catatan-waktu muncul-saat-digulir";
    butir.dataset.era = peristiwa.babak;

    // Buka otomatis peristiwa pertama supaya pengunjung tahu kartu ini bisa diklik
    if (indeks === 0) butir.classList.add("sedang-terbuka");

    butir.innerHTML = `
      <button class="tombol-kejadian" type="button" aria-expanded="${indeks === 0}">
        <span class="label-kecil">${peristiwa.babak}</span>
        <span class="tahun-kejadian">${peristiwa.tahun}</span>
        <h3>${peristiwa.judul}</h3>
        <div class="ringkas-kejadian">${peristiwa.ringkasan}</div>
        <ul>${peristiwa.rincian.map((isi) => `<li>${isi}</li>`).join("")}</ul>
      </button>`;

    const tombol = butir.querySelector("button");
    tombol.addEventListener("click", () => {
      const terbuka = butir.classList.toggle("sedang-terbuka");
      tombol.setAttribute("aria-expanded", terbuka);
    });

    wadahLinimasa.appendChild(butir);
  });

  DAFTAR_BABAK.forEach((babak) => {
    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.textContent = babak;
    tombol.setAttribute("aria-pressed", babak === "Semua");

    tombol.addEventListener("click", () => {
      wadahFilter.querySelectorAll("button").forEach((lainnya) => {
        lainnya.setAttribute("aria-pressed", lainnya === tombol);
      });
      wadahLinimasa.querySelectorAll(".catatan-waktu").forEach((butir) => {
        butir.hidden = babak !== "Semua" && butir.dataset.era !== babak;
      });
      perbaruiGarisBaca();
    });

    wadahFilter.appendChild(tombol);
  });

  window.addEventListener("scroll", perbaruiGarisBaca, { passive: true });
  perbaruiGarisBaca();
}

// Geseran perbandingan dua bentuk Tugu
function pasangPerbandinganTugu() {
  const penggeser = ambilId("compare-slider");
  if (!penggeser) return;

  const fotoTuguSekarang = document.querySelector(".foto-tugu-sekarang");
  const fotoTuguDulu = ambilId("compare-before");
  const garisPembatas = ambilId("compare-divider");

  function perbaruiPerbandingan() {
    const nilai = Number(penggeser.value);
    fotoTuguSekarang.style.transform = `translateX(${nilai * 0.4}%)`;
    fotoTuguDulu.style.clipPath = `inset(0 ${100 - nilai}% 0 0)`;
    garisPembatas.style.left = `${nilai}%`;
  }

  penggeser.addEventListener("input", perbaruiPerbandingan);
  perbaruiPerbandingan();
}

// Penjelajah Sumbu Filosofi
function pasangSumbuFilosofi() {
  const jalurSumbu = ambilId("axis");
  const kotakInfo = ambilId("axis-info");
  const tinggiJalur = 320;

  function pilihTitik(titik, tombolDipilih) {
    jalurSumbu
      .querySelectorAll("button")
      .forEach((lainnya) => lainnya.classList.remove("sedang-dipilih"));
    tombolDipilih.classList.add("sedang-dipilih");

    kotakInfo.innerHTML = `
      <img class="foto-poros" src="${titik.foto}" alt="${titik.nama}" loading="lazy" decoding="async" />
      <div>
        <span class="label-kecil">${titik.makna}</span>
        <h3>${titik.nama}</h3>
        <p>${titik.uraian}</p>
      </div>`;
  }

  TITIK_SUMBU.forEach((titik, indeks) => {
    const jarakAtas = (titik.posisi / 100) * tinggiJalur;

    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.style.top = `${jarakAtas}px`;
    tombol.setAttribute("aria-label", titik.nama);
    tombol.addEventListener("click", () => pilihTitik(titik, tombol));

    const label = document.createElement("span");
    label.style.top = `${jarakAtas + 1}px`;
    label.textContent = titik.nama;

    jalurSumbu.append(tombol, label);

    if (indeks === 1) pilihTitik(titik, tombol);
  });
}

// Kuis Sejarah
function pasangKuisSejarah() {
  const teksSoal = ambilId("quiz-question");
  const wadahPilihan = ambilId("quiz-options");
  const pesanHasil = ambilId("quiz-message");
  const tombolLanjut = ambilId("quiz-next");
  const batangProgres = ambilId("quiz-progress");

  let nomorSoal = 0;
  let skorBenar = 0;

  function tampilkanSkorAkhir() {
    teksSoal.textContent = `Catatan selesai: kamu menjawab benar ${skorBenar} dari ${SOAL_KUIS.length} soal.`;
    wadahPilihan.innerHTML = "";
    pesanHasil.textContent =
      skorBenar >= 3
        ? "Luar biasa! Kamu benar-benar menyimak perjalanan panjang Yogyakarta."
        : "Terima kasih sudah mencoba. Buka kembali butir linimasa di atas untuk membaca detailnya.";
    batangProgres.style.width = "100%";

    tombolLanjut.textContent = "Coba ulangi kuis";
    tombolLanjut.hidden = false;
    tombolLanjut.onclick = () => {
      nomorSoal = 0;
      skorBenar = 0;
      tampilkanSoal();
    };
  }

  function periksaJawaban(indeksPilihan, tombolPilihan) {
    const soal = SOAL_KUIS[nomorSoal];
    const tepat = indeksPilihan === soal.jawabanBenar;

    wadahPilihan.querySelectorAll("button").forEach((tombol, indeks) => {
      tombol.disabled = true;
      if (indeks === soal.jawabanBenar) tombol.classList.add("jawaban-benar");
    });

    if (tepat) {
      skorBenar++;
    } else {
      tombolPilihan.classList.add("jawaban-meleset");
    }

    pesanHasil.textContent = `${tepat ? "Tepat sekali." : "Kurang tepat."} ${soal.bahasan}`;

    const soalTerakhir = nomorSoal === SOAL_KUIS.length - 1;
    tombolLanjut.textContent = soalTerakhir ? "Lihat hasil akhir" : "Soal berikutnya";
    tombolLanjut.hidden = false;
    tombolLanjut.onclick = () => {
      nomorSoal++;
      tampilkanSoal();
    };
  }

  function tampilkanSoal() {
    if (nomorSoal >= SOAL_KUIS.length) {
      tampilkanSkorAkhir();
      return;
    }

    const soal = SOAL_KUIS[nomorSoal];
    teksSoal.textContent = `${nomorSoal + 1}. ${soal.tanya}`;
    pesanHasil.textContent = "";
    tombolLanjut.hidden = true;
    batangProgres.style.width = `${(nomorSoal / SOAL_KUIS.length) * 100}%`;

    wadahPilihan.innerHTML = "";
    soal.pilihan.forEach((teks, indeks) => {
      const tombol = document.createElement("button");
      tombol.type = "button";
      tombol.className = "pilihan-jawaban";
      tombol.textContent = teks;
      tombol.addEventListener("click", () => periksaJawaban(indeks, tombol));
      wadahPilihan.appendChild(tombol);
    });
  }

  tampilkanSoal();
}

// Jalankan halaman sejarah
ambilId("years-since").dataset.count =
  new Date().getFullYear() - TAHUN_BERDIRI_KASULTANAN;

amatiSemuaAngka();
pasangLinimasa();
pasangPerbandinganTugu();
pasangSumbuFilosofi();
pasangKuisSejarah();
