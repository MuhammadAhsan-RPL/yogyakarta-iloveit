// Skrip halaman Budaya
// Katalog budaya, studio racik batik (bisa unduh SVG), saron gamelan + gending otomatis, dan punakawan.

const WARNA_DASAR_KAIN = [
  { kode: "#6b4a33", nama: "Cokelat Soga" },
  { kode: "#243b4a", nama: "Biru Nila (Wedel)" },
  { kode: "#1f2420", nama: "Hitam Keleng" },
  { kode: "#f1e2cc", nama: "Putih Babaran" },
];

const WARNA_GARIS_MOTIF = [
  { kode: "#e3a845", nama: "Kuning Emas" },
  { kode: "#f4f0e6", nama: "Putih Gading" },
  { kode: "#b5643c", nama: "Merah Mengkudu" },
  { kode: "#87a56e", nama: "Hijau Daun" },
];

const DAFTAR_MOTIF_BATIK = {
  Kawung: {
    ukuranUbin: 60,
    rotasi: "",
    filosofi:
      "Kawung: terinspirasi belahan buah kolang-kaling atau bunga teratai mekar. Melambangkan hati yang bersih dan berguna bagi sesama.",
    gambar: (warna) => `
      <g fill="${warna}">
        <ellipse cx="30" cy="15" rx="11" ry="14"/>
        <ellipse cx="30" cy="45" rx="11" ry="14"/>
        <ellipse cx="15" cy="30" rx="14" ry="11" opacity=".75"/>
        <ellipse cx="45" cy="30" rx="14" ry="11" opacity=".75"/>
        <circle cx="30" cy="30" r="3.2"/>
      </g>`,
  },
  Parang: {
    ukuranUbin: 44,
    rotasi: "rotate(-42)",
    filosofi:
      "Parang: jalinan ombak samudra yang tak pernah putus. Mengajarkan keteguhan hati untuk terus memperbaiki diri.",
    gambar: (warna) => `
      <path d="M0 22Q11 2 22 22T44 22" stroke="${warna}" stroke-width="6" fill="none"/>
      <circle cx="22" cy="22" r="2.5" fill="${warna}"/>`,
  },
  "Sido Mukti": {
    ukuranUbin: 54,
    rotasi: "",
    filosofi:
      "Sido Mukti: bidang belah ketupat dengan ornamen sayap dan kuncup di tengah. Dipakai pengantin sebagai doa hidup mulia dan tenteram.",
    gambar: (warna) => `
      <path d="M27 3L51 27L27 51L3 27Z" fill="none" stroke="${warna}" stroke-width="3"/>
      <circle cx="27" cy="27" r="6" fill="none" stroke="${warna}" stroke-width="2"/>
      <circle cx="27" cy="27" r="2.5" fill="${warna}"/>`,
  },
  Truntum: {
    ukuranUbin: 48,
    rotasi: "",
    filosofi:
      "Truntum: kembang bintang kecil yang bertaburan di langit gelap. Diciptakan Kanjeng Ratu Beruk sebagai lambang kasih sayang yang bersemi kembali.",
    gambar: (warna) => `
      <g fill="${warna}">
        <circle cx="24" cy="24" r="3.5"/>
        <ellipse cx="24" cy="12" rx="2.5" ry="6"/>
        <ellipse cx="24" cy="36" rx="2.5" ry="6"/>
        <ellipse cx="12" cy="24" rx="6" ry="2.5"/>
        <ellipse cx="36" cy="24" rx="6" ry="2.5"/>
        <circle cx="15" cy="15" r="2"/>
        <circle cx="33" cy="15" r="2"/>
        <circle cx="15" cy="33" r="2"/>
        <circle cx="33" cy="33" r="2"/>
      </g>`,
  },
};

function pasangStudioBatik() {
  const setelan = {
    motif: "Kawung",
    indeksKain: 0,
    indeksMotif: 0,
    skala: 100,
  };

  function susunKodeSVG() {
    const dataMotif = DAFTAR_MOTIF_BATIK[setelan.motif];
    const ubin = dataMotif.ukuranUbin;
    const transformasi = `${dataMotif.rotasi} scale(${setelan.skala / 100})`;
    const warnaKain = WARNA_DASAR_KAIN[setelan.indeksKain].kode;
    const warnaGaris = WARNA_GARIS_MOTIF[setelan.indeksMotif].kode;

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="batik-pattern" width="${ubin}" height="${ubin}"
          patternUnits="userSpaceOnUse" patternTransform="${transformasi}">
          ${dataMotif.gambar(warnaGaris)}
        </pattern>
      </defs>
      <rect width="400" height="300" fill="${warnaKain}"/>
      <rect width="400" height="300" fill="url(#batik-pattern)"/>
    </svg>`;
  }

  function gambarKain() {
    ambilId("batik-canvas").innerHTML = susunKodeSVG();
    ambilId("batik-note").textContent = DAFTAR_MOTIF_BATIK[setelan.motif].filosofi;
  }

  function buatPilihanWarna(idWadah, daftarWarna, kunciSetelan) {
    const wadah = ambilId(idWadah);

    daftarWarna.forEach((itemWarna, indeks) => {
      const tombol = document.createElement("button");
      tombol.type = "button";
      tombol.style.background = itemWarna.kode;
      tombol.title = itemWarna.nama;
      tombol.setAttribute("aria-label", itemWarna.nama);
      tombol.setAttribute("aria-pressed", indeks === 0);

      tombol.addEventListener("click", () => {
        wadah.querySelectorAll("button").forEach((lainnya) => {
          lainnya.setAttribute("aria-pressed", lainnya === tombol);
        });
        setelan[kunciSetelan] = indeks;
        gambarKain();
      });

      wadah.appendChild(tombol);
    });
  }

  const wadahTabMotif = ambilId("motif-tabs");

  Object.keys(DAFTAR_MOTIF_BATIK).forEach((namaMotif) => {
    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.textContent = namaMotif;
    tombol.setAttribute("aria-selected", namaMotif === setelan.motif);

    tombol.addEventListener("click", () => {
      wadahTabMotif.querySelectorAll("button").forEach((lainnya) => {
        lainnya.setAttribute("aria-selected", lainnya === tombol);
      });
      setelan.motif = namaMotif;
      gambarKain();
    });

    wadahTabMotif.appendChild(tombol);
  });

  buatPilihanWarna("fabric-colors", WARNA_DASAR_KAIN, "indeksKain");
  buatPilihanWarna("motif-colors", WARNA_GARIS_MOTIF, "indeksMotif");

  ambilId("motif-size").addEventListener("input", (event) => {
    setelan.skala = Number(event.target.value);
    gambarKain();
  });

  // Tombol unduh hasil racikan kain sebagai file SVG
  const tombolUnduh = ambilId("batik-download");
  if (tombolUnduh) {
    tombolUnduh.addEventListener("click", () => {
      const berkas = new Blob([susunKodeSVG()], { type: "image/svg+xml" });
      const tautan = document.createElement("a");
      const namaBerkas = `batik-${setelan.motif.toLowerCase().replace(/\s+/g, "-")}.svg`;
      tautan.href = URL.createObjectURL(berkas);
      tautan.download = namaBerkas;
      tautan.click();
      URL.revokeObjectURL(tautan.href);
    });
  }

  gambarKain();
}

// Saron Slendro dengan Web Audio API + Pemutar Gending Otomatis
const BILAH_SARON = [
  { angka: "1", nama: "Ji", frekuensi: 293.7 },
  { angka: "2", nama: "Ro", frekuensi: 337.2 },
  { angka: "3", nama: "Lu", frekuensi: 387.1 },
  { angka: "5", nama: "Ma", frekuensi: 444.5 },
  { angka: "6", nama: "Nem", frekuensi: 510.3 },
  { angka: "1’", nama: "Ji Tinggi", frekuensi: 585.9 },
];

const HARMONIK_PERUNGGU = [
  { rasio: 1, volume: 0.48 },
  { rasio: 2.76, volume: 0.17 },
  { rasio: 5.4, volume: 0.06 },
];

// Notasi balungan Lancaran Ricik-Ricik Banyumasan / Jawa (indeks bilah 0-5)
const LAGU_RICIK = [2, 3, 2, 1, 3, 4, 3, 2, 4, 3, 1, 0, 1, 2, 1, 0];

let konteksAudio = null;

function bunyikanPerunggu(frekuensi) {
  if (!konteksAudio) {
    konteksAudio = new (window.AudioContext || window.webkitAudioContext)();
  }

  const sekarang = konteksAudio.currentTime;

  HARMONIK_PERUNGGU.forEach(({ rasio, volume }) => {
    const osilator = konteksAudio.createOscillator();
    const penguat = konteksAudio.createGain();

    osilator.frequency.value = frekuensi * rasio;
    penguat.gain.setValueAtTime(volume, sekarang);
    penguat.gain.exponentialRampToValueAtTime(0.001, sekarang + 1.65);

    osilator.connect(penguat);
    penguat.connect(konteksAudio.destination);
    osilator.start(sekarang);
    osilator.stop(sekarang + 1.75);
  });
}

function pasangSaron() {
  const wadahSaron = ambilId("saron");
  const tombolGending = ambilId("saron-song");
  let pengaturLagu = null;

  function tabuhBilah(bilah, tombol) {
    try {
      bunyikanPerunggu(bilah.frekuensi);
    } catch (err) {
      // Tetap jalankan efek gerak walau audio tidak tersedia
    }
    tombol.classList.add("habis-dipukul");
    setTimeout(() => tombol.classList.remove("habis-dipukul"), 150);
  }

  const daftarTombol = BILAH_SARON.map((bilah) => {
    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.innerHTML = `<strong>${bilah.angka}</strong><small>${bilah.nama}</small>`;
    tombol.setAttribute("aria-label", `Nada ${bilah.angka} (${bilah.nama})`);
    tombol.addEventListener("click", () => tabuhBilah(bilah, tombol));
    wadahSaron.appendChild(tombol);
    return tombol;
  });

  // Mainkan dengan tombol angka 1-6 di keyboard
  window.addEventListener("keydown", (event) => {
    if (event.target.closest("input, textarea, button")) return;
    const angkaKetik = Number(event.key);
    if (angkaKetik >= 1 && angkaKetik <= BILAH_SARON.length) {
      tabuhBilah(BILAH_SARON[angkaKetik - 1], daftarTombol[angkaKetik - 1]);
    }
  });

  // Pemutar gending otomatis
  if (tombolGending) {
    tombolGending.addEventListener("click", () => {
      if (pengaturLagu) {
        clearInterval(pengaturLagu);
        pengaturLagu = null;
        tombolGending.textContent = "Mainkan pola Gending Ricik-Ricik";
        return;
      }

      let langkah = 0;
      tombolGending.textContent = "Hentikan tabuhan";

      function ketukanBerikutnya() {
        const indeksBilah = LAGU_RICIK[langkah];
        tabuhBilah(BILAH_SARON[indeksBilah], daftarTombol[indeksBilah]);
        langkah++;

        if (langkah >= LAGU_RICIK.length) {
          clearInterval(pengaturLagu);
          pengaturLagu = null;
          tombolGending.textContent = "Mainkan pola Gending Ricik-Ricik";
        }
      }

      ketukanBerikutnya();
      pengaturLagu = setInterval(ketukanBerikutnya, 420);
    });
  }
}

// Empat Tokoh Punakawan
const TOKOH_PUNAKAWAN = [
  {
    nama: "Semar (Kyai Lurah)",
    peran: "Pamong tertua & paling bijaksana",
    uraian:
      "Penjelmaan Sang Hyang Ismaya yang memilih turun menjadi rakyat jelata. Ia jarang menggurui, namun kata-katanya menenangkan kesatria yang sedang bimbang.",
    foto: "images/punakawan-semar.webp",
    altFoto: "Wayang kulit Semar dari koleksi Tropenmuseum.",
    fotografer: "Tropenmuseum",
    lisensi: "CC BY-SA 3.0",
    sumber:
      "https://commons.wikimedia.org/wiki/File:COLLECTIE_TROPENMUSEUM_Wajang_kulit_pop_voorstellende_Semar_TMnr_8-251.jpg",
  },
  {
    nama: "Nala Gareng",
    peran: "Anak sulung yang jujur & hati-hati",
    uraian:
      "Matanya juling (tidak mau melihat hal buruk), tangannya ceko (tidak suka mengambil hak orang), dan kakinya pincang (selalu waspada dalam melangkah).",
    foto: "images/punakawan-gareng.webp",
    altFoto: "Wayang golek Nala Gareng dari koleksi Tropenmuseum.",
    fotografer: "Tropenmuseum",
    lisensi: "CC BY-SA 3.0",
    sumber:
      "https://commons.wikimedia.org/wiki/File:COLLECTIE_TROPENMUSEUM_Houten_wajangpop_voorstellende_Nala_Gareng_TMnr_8-76.jpg",
  },
  {
    nama: "Petruk (Kantong Bolong)",
    peran: "Anak tengah yang jenaka & dermawan",
    uraian:
      "Bertubuh jangkung dengan hidung mancung. Dijuluki Kantong Bolong karena gemar berbagi rezeki tanpa perhitungan dan menyampaikan kritik lewat humor segar.",
    foto: "images/punakawan-petruk.webp",
    altFoto: "Wayang kulit Petruk dari koleksi Museum of Anthropology, University of British Columbia.",
    fotografer: "Hiart",
    lisensi: "CC0",
    sumber:
      "https://commons.wikimedia.org/wiki/File:Wayang_Kulit_puppet_from_Indonesia,_Petruk,_second_son_of_Semar,_HMA.jpg",
  },
  {
    nama: "Bagong",
    peran: "Anak bungsu yang lugas & apa adanya",
    uraian:
      "Diciptakan dari bayangan Semar sendiri. Bertubuh bulat dan bermata lebar; sifatnya polos, spontan, dan berani menyuarakan kejujuran rakyat kecil.",
    foto: "images/punakawan-bagong.webp",
    altFoto: "Wayang kulit Bagong dengan wajah putih dan mata besar.",
    fotografer: "Arffzzz",
    lisensi: "CC BY 4.0",
    sumber: "https://commons.wikimedia.org/wiki/File:Wayang_Bagong.jpg",
  },
];

function pasangPunakawan() {
  const wadah = ambilId("punakawan");

  TOKOH_PUNAKAWAN.forEach((tokoh) => {
    const kartu = document.createElement("button");
    kartu.type = "button";
    kartu.className = "kartu-punakawan";
    kartu.setAttribute("aria-label", `Kartu ${tokoh.nama}. Ketuk untuk membalik`);
    kartu.innerHTML = `
      <div class="isi-kartu-balik">
        <div class="sisi-depan">
          <img src="${tokoh.foto}" alt="${tokoh.altFoto}" loading="lazy" decoding="async" />
          <h3>${tokoh.nama}</h3>
          <small class="kredit-punakawan">Foto: ${tokoh.fotografer} · ${tokoh.lisensi}</small>
        </div>
        <div class="sisi-belakang">
          <span class="label-kecil">${tokoh.peran}</span>
          <h3>${tokoh.nama}</h3>
          <p>${tokoh.uraian}</p>
        </div>
      </div>`;

    kartu.addEventListener("click", () => kartu.classList.toggle("sudah-dibalik"));
    wadah.appendChild(kartu);
  });
}

// Jalankan halaman budaya
pasangKatalog({
  daftar: daftarBudaya,
  idFilter: "budaya-filter",
  idGrid: "budaya-grid",
  idCari: "budaya-search",
  idKosong: "budaya-empty",
});

pasangStudioBatik();
pasangSaron();
pasangPunakawan();
