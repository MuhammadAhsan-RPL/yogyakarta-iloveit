// Skrip halaman Beranda
// Mengatur suasana langit Merapi-Tugu, pita berjalan, 4 pintu utama, sorotan, dan rekomendasi harian.

const DAFTAR_TEMPAT_PITA = [
  "Tugu Pal Putih",
  "Keraton Ngayogyakarta",
  "Kampung Taman Sari",
  "Jalan Malioboro",
  "Pasar Beringharjo",
  "Gang Tua Kotagede",
  "Candi Prambanan",
  "Gumuk Pasir Parangkusumo",
  "Puncak Nglanggeran",
  "Perbukitan Menoreh",
];

function tampilkanPitaBerjalan() {
  const isi = DAFTAR_TEMPAT_PITA.map((nama) => `${nama}<span>✺</span>`).join("");
  ambilId("marquee").innerHTML = `<div class="tulisan-berjalan">${isi}${isi}</div>`;
}

// Sapaan catatan lapangan berdasarkan waktu lokal pengunjung
function tampilkanCatatanWaktu() {
  const kotakWaktu = ambilId("live-note");
  if (!kotakWaktu) return;

  const jam = new Date().getHours();
  let suasana = "";

  if (jam >= 5 && jam < 11) {
    suasana = "Pagi di Jogja: kabut tipis turun dari lereng Merapi, pasar tradisional mulai ramai.";
  } else if (jam >= 11 && jam < 15) {
    suasana = "Siang di Jogja: teduh pohon beringin Alun-Alun dan semilir angin di pendopo keraton.";
  } else if (jam >= 15 && jam < 18) {
    suasana = "Sore di Jogja: langit keemasan di atas Prambanan dan deru ombak Pantai Parangtritis.";
  } else {
    suasana = "Malam di Jogja: bara arang angkringan menyala, alunan gamelan terdengar dari kejauhan.";
  }

  kotakWaktu.textContent = suasana;
}

// Pengatur suasana foto Tugu pada pembuka (Fajar, Siang, Senja, Malam)
const SUASANA_LANGIT = {
  fajar: {
    catatan: "Nuansa fajar — warna hangat untuk membayangkan pagi di sekitar Tugu.",
  },
  siang: {
    catatan: "Nuansa siang — warna foto dibuat lebih terang dan jernih.",
  },
  senja: {
    catatan: "Nuansa senja — semburat hangat seperti lampu kota mulai menyala.",
  },
  malam: {
    catatan: "Nuansa malam — kontras lampu Tugu terasa lebih menonjol.",
  },
};

function pasangSuasanaHero() {
  const panggung = ambilId("hero-scene");
  const wadahTombol = ambilId("sky-controls");
  const teksCatatan = ambilId("sky-caption");
  function ubahLangit(kunci) {
    const setelan = SUASANA_LANGIT[kunci];
    if (!setelan) return;

    panggung.dataset.suasana = kunci;
    if (teksCatatan) {
      teksCatatan.textContent = setelan.catatan;
    }

    if (wadahTombol) {
      wadahTombol.querySelectorAll("button").forEach((tombol) => {
        tombol.setAttribute("aria-pressed", tombol.dataset.sky === kunci);
      });
    }
  }

  if (wadahTombol) {
    wadahTombol.querySelectorAll("button").forEach((tombol) => {
      tombol.addEventListener("click", () => ubahLangit(tombol.dataset.sky));
    });
  }

  // Sesuaikan otomatis saat tombol Mode Malam di header ditekan
  const tombolTemaAtas = ambilId("theme-toggle");
  if (tombolTemaAtas) {
    tombolTemaAtas.addEventListener("click", () => {
      const sedangMalam = document.documentElement.dataset.theme === "dark";
      ubahLangit(sedangMalam ? "malam" : "siang");
    });
  }

  const temaAwalMalam = document.documentElement.dataset.theme === "dark";
  ubahLangit(temaAwalMalam ? "malam" : "siang");
}

// Empat pintu menuju halaman utama
const PINTU_HALAMAN = [
  {
    halaman: "sejarah",
    judul: "Sejarah",
    keterangan: "10 peristiwa kunci & Sumbu Filosofi",
    warna: "#6b4a33",
    pola: "daun",
    foto: "images/sejarah-tugu-kini-baru.webp",
  },
  {
    halaman: "budaya",
    judul: "Budaya",
    keterangan: `${daftarBudaya.length} warisan, studio batik & saron`,
    warna: "#a85732",
    pola: "kawung",
    foto: "images/budaya-batik-baru.webp",
  },
  {
    halaman: "kuliner",
    judul: "Kuliner",
    keterangan: `${daftarKuliner.length} rasa legendaris & angkringan`,
    warna: "#9c6d21",
    pola: "ceplok",
    foto: "images/kuliner-gudeg-baru.webp",
  },
  {
    halaman: "wisata",
    judul: "Wisata",
    keterangan: `${daftarWisata.length} destinasi, peta & paspor`,
    warna: "#2f5d3a",
    pola: "parang",
    foto: "images/beranda-prambanan-baru.webp",
  },
];

function tampilkanPintu() {
  ambilId("doors").innerHTML = PINTU_HALAMAN.map((pintu, indeks) => {
    const nomor = String(indeks + 1).padStart(2, "0");
    return `
      <a class="pintu-topik" href="${pintu.halaman}.html"
        style="--cover-color: ${pintu.warna}; --cover-pattern: var(--pattern-${pintu.pola})">
        <img class="foto-pintu" src="${pintu.foto}" alt="" loading="lazy" decoding="async" />
        <span class="nomor-pintu" aria-hidden="true">${nomor}</span>
        <small>Bab ${nomor}</small>
        <h3>${pintu.judul}</h3>
        <p>${pintu.keterangan}</p>
      </a>`;
  }).join("");
}

// Sorotan pilihan (carousel)
const DAFTAR_SOROTAN = [
  { item: daftarBudaya[0], foto: "images/budaya-batik-baru.webp" },
  { item: daftarWisata[0], foto: "images/beranda-prambanan-baru.webp" },
  { item: daftarKuliner[0], foto: "images/kuliner-gudeg-baru.webp" },
  { item: daftarBudaya[4], foto: "images/budaya-wayang-baru.webp" },
  { item: daftarWisata[2], foto: "images/beranda-keraton-baru.webp" },
];

function pasangSorotan() {
  const kotakSorotan = ambilId("carousel");
  const kotakTitik = ambilId("carousel-dots");
  let indeksAktif = 0;
  let pengaturWaktu = null;

  function tampilkanSlide(indeks) {
    indeksAktif = (indeks + DAFTAR_SOROTAN.length) % DAFTAR_SOROTAN.length;
    const { item, foto } = DAFTAR_SOROTAN[indeksAktif];

    kotakSorotan.style.cssText = gayaSampul(item);
    kotakSorotan.classList.add("memakai-foto");
    kotakSorotan.innerHTML = `
      <img class="foto-sorotan" src="${foto}" alt="" loading="lazy" decoding="async" />
      <div class="isi-sorotan">
        <span class="label-kecil">${item.kategori}</span>
        <h3>${item.judul}</h3>
        <p>${item.cerita}</p>
        <button class="tombol tombol-terang" type="button"
          data-type="${item.jenis}" data-index="${item.urutan}">
          Buka catatan lengkap
        </button>
      </div>`;

    kotakTitik.querySelectorAll("button").forEach((titik, urutan) => {
      titik.setAttribute("aria-current", urutan === indeksAktif);
    });
  }

  function mulaiPutarOtomatis() {
    clearInterval(pengaturWaktu);
    if (kurangiGerak()) return;
    pengaturWaktu = setInterval(() => tampilkanSlide(indeksAktif + 1), 6800);
  }

  function pindahKe(indeks) {
    tampilkanSlide(indeks);
    mulaiPutarOtomatis();
  }

  DAFTAR_SOROTAN.forEach((item, indeks) => {
    const titik = document.createElement("button");
    titik.type = "button";
    titik.setAttribute("aria-label", `Sorotan ${indeks + 1}: ${item.judul}`);
    titik.addEventListener("click", () => pindahKe(indeks));
    kotakTitik.appendChild(titik);
  });

  ambilId("carousel-prev").addEventListener("click", () => pindahKe(indeksAktif - 1));
  ambilId("carousel-next").addEventListener("click", () => pindahKe(indeksAktif + 1));

  tampilkanSlide(0);
  mulaiPutarOtomatis();
}

// Rekomendasi perjalanan satu hari penuh
const RENCANA_SEHARI = {
  Pagi: [
    ["07.00 — Gudeg Wijilan", "Sarapan nasi gudeg hangat dengan areh kental sebelum jalanan ramai.", "images/kuliner-gudeg-baru.webp"],
    ["08.30 — Keraton Yogyakarta", "Menyimak latihan gamelan di bangsal dan melihat koleksi pusaka.", "images/beranda-keraton-baru.webp"],
    ["10.30 — Pasar Beringharjo", "Berburu kain batik tulis soga dan mencicipi pecel senggol di pintu barat.", "images/budaya-batik-baru.webp"],
  ],
  Siang: [
    ["12.30 — Kampung Taman Sari", "Menyusuri lorong bawah tanah bekas pemandian dan masjid melingkar.", "images/beranda-taman-sari-baru.webp"],
    ["14.00 — Gang Tua Kotagede", "Melihat pengrajin menempa benang perak dan mencicipi kue kipo hangat.", "images/beranda-kotagede-baru.webp"],
    ["15.30 — Kampung Pathuk", "Membeli bakpia kacang hijau yang baru diangkat dari loyang panggangan.", "images/kuliner-bakpia-baru.webp"],
  ],
  Sore: [
    ["16.15 — Candi Prambanan", "Menikmati cahaya sore keemasan di pelataran Candi Siwa.", "images/beranda-prambanan-baru.webp"],
    ["17.15 — Gumuk Pasir & Parangtritis", "Menunggu matahari terbenam di ujung selatan Sumbu Filosofi.", "images/sejarah-parangtritis-baru.webp"],
    ["18.15 — Tebing Breksi & Ratu Boko", "Melihat bentang lampu kota Jogja yang mulai menyala dari perbukitan.", "images/beranda-tebing-breksi-baru.webp"],
  ],
  Malam: [
    ["19.30 — Jalan Kaki di Malioboro", "Menikmati suasana bangku pedestrian dan bangunan cagar budaya.", "images/sejarah-malioboro-baru.webp"],
    ["20.30 — Museum Sonobudoyo", "Menonton pentas ringkas wayang kulit atau topeng panji.", "images/budaya-wayang-baru.webp"],
    ["22.00 — Angkringan Utara Stasiun Tugu", "Menutup hari dengan nasi kucing bakar dan segelas kopi joss arang.", "images/kuliner-kopi-joss-baru.webp"],
  ],
};

function pasangRencanaSehari() {
  const daftarTab = ambilId("day-tabs");
  const panelIsi = ambilId("day-plan");

  function pilihWaktu(waktu) {
    daftarTab.querySelectorAll("button").forEach((tab) => {
      tab.setAttribute("aria-selected", tab.textContent === waktu);
    });

    panelIsi.innerHTML = RENCANA_SEHARI[waktu]
      .map(
        ([tempat, catatan, foto], indeks) => `
        <div class="tempat-singgah">
          <img class="foto-singgah" src="${foto}" alt="${tempat}" loading="lazy" decoding="async" />
          <span class="label-kecil">Perhentian ${indeks + 1}</span>
          <h4>${tempat}</h4>
          <p>${catatan}</p>
        </div>`,
      )
      .join("");
  }

  Object.keys(RENCANA_SEHARI).forEach((waktu) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.textContent = waktu;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", "day-plan");
    tab.addEventListener("click", () => pilihWaktu(waktu));
    daftarTab.appendChild(tab);
  });

  pilihWaktu("Pagi");
}

// Efek gerak halus pada foto saat penunjuk digeser
function pasangEfekParallax() {
  const panggung = ambilId("hero-scene");
  const foto = panggung.querySelector(".foto-suasana-jogja");

  panggung.addEventListener("mousemove", (event) => {
    if (kurangiGerak() || !foto) return;
    const kotak = panggung.getBoundingClientRect();
    const geserX = (event.clientX - kotak.left) / kotak.width - 0.5;
    const geserY = (event.clientY - kotak.top) / kotak.height - 0.5;

    foto.style.transform = `scale(1.05) translate(${geserX * -8}px, ${geserY * -5}px)`;
  });

  panggung.addEventListener("mouseleave", () => {
    if (foto) foto.style.transform = "";
  });
}

// Jalankan semua fungsi beranda
ambilId("topic-count").dataset.count =
  daftarBudaya.length + daftarKuliner.length + daftarWisata.length;

tampilkanCatatanWaktu();
tampilkanPitaBerjalan();
pasangSuasanaHero();
tampilkanPintu();
amatiSemuaAngka();
pasangSorotan();
pasangRencanaSehari();
pasangEfekParallax();
