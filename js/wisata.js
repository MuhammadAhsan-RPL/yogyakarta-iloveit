// Skrip halaman Wisata
// Katalog destinasi, peta 5 kabupaten/kota DIY, dan penyusun rencana perjalanan.

const WILAYAH_DIY = {
  "kulon-progo": {
    nama: "Kabupaten Kulon Progo",
    lanskap: "Bentang barat: perbukitan hijau Menoreh hingga muara Sungai Progo.",
    daftarTempat: ["Kebun Teh Nglinggo & Bukit Menoreh"],
  },
  sleman: {
    nama: "Kabupaten Sleman",
    lanskap: "Bentang utara: lereng Gunung Merapi dan lembah candi-candi Mataram Kuno.",
    daftarTempat: ["Candi Prambanan", "Tebing Breksi & Ratu Boko"],
  },
  kota: {
    nama: "Kota Yogyakarta",
    lanskap: "Bentang tengah: poros Sumbu Filosofi, kampung pusaka, dan pasar tradisional.",
    daftarTempat: [
      "Keraton Yogyakarta",
      "Taman Sari",
      "Kawasan Malioboro & Beringharjo",
      "Kampung Tua Kotagede",
    ],
  },
  bantul: {
    nama: "Kabupaten Bantul",
    lanskap: "Bentang selatan: sentra pengrajin kriya, makam raja Imogiri, hingga pesisir samudra.",
    daftarTempat: ["Pantai Parangtritis & Gumuk Pasir", "Kampung Tua Kotagede"],
  },
  gunungkidul: {
    nama: "Kabupaten Gunungkidul",
    lanskap: "Bentang timur: perbukitan karst Gunung Sewu, sungai bawah tanah, dan gunung api purba.",
    daftarTempat: ["Gunung Api Purba Nglanggeran"],
  },
};

function cariDataWisata(judul) {
  return daftarWisata.find((item) => item.judul === judul);
}

function pasangPetaDIY() {
  const bentukWilayah = document.querySelectorAll("#map [data-region]");
  const kotakInfo = ambilId("map-info");

  function pilihWilayah(kunciWilayah) {
    const wilayah = WILAYAH_DIY[kunciWilayah];
    if (!wilayah) return;

    bentukWilayah.forEach((bentuk) => {
      bentuk.classList.toggle("sedang-dipilih", bentuk.dataset.region === kunciWilayah);
    });

    const tombolDestinasi = wilayah.daftarTempat
      .map(cariDataWisata)
      .filter(Boolean)
      .map(
        (tempat) => `
        <button class="tombol-tautan" type="button"
          data-type="wisata" data-index="${tempat.urutan}">
          <span>${tempat.judul}</span>
          <small>${tempat.kategori}</small>
        </button>`,
      )
      .join("");

    kotakInfo.innerHTML = `
      <span class="label-kecil">Wilayah DIY</span>
      <h3>${wilayah.nama}</h3>
      <p class="catatan-kecil">${wilayah.lanskap}</p>
      <div class="tautan-wilayah">${tombolDestinasi}</div>`;
  }

  bentukWilayah.forEach((bentuk) => {
    bentuk.addEventListener("click", () => pilihWilayah(bentuk.dataset.region));

    bentuk.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        pilihWilayah(bentuk.dataset.region);
      }
    });
  });

  pilihWilayah("kota");
}

// Penyusun rencana perjalanan (tersimpan di localStorage)
function pasangRencanaPerjalanan() {
  const wadahDaftar = ambilId("plan-list");
  const tombolTambahDialog = ambilId("detail-plan-button");
  const teksJumlahStempel = ambilId("stamp-counter");
  let tempatSedangDibuka = null;

  let daftarRencana = bacaSimpanan(KUNCI_SIMPAN.rencana, []).filter((judul) =>
    cariDataWisata(judul),
  );

  function simpanRencana() {
    tulisSimpanan(KUNCI_SIMPAN.rencana, daftarRencana);
  }

  function perbaruiTombolDialog() {
    if (!tempatSedangDibuka || !tombolTambahDialog) return;
    const sudahMasuk = daftarRencana.includes(tempatSedangDibuka.judul);
    tombolTambahDialog.textContent = sudahMasuk
      ? "Hapus dari rencana kunjungan"
      : "+ Masukkan ke rencana kunjungan";
  }

  function perbaruiCatatanStempel() {
    if (!teksJumlahStempel) return;
    const semuaStempel = bacaSimpanan(KUNCI_SIMPAN.stempel, []);
    const totalTopik =
      daftarBudaya.length + daftarKuliner.length + daftarWisata.length;
    teksJumlahStempel.textContent = `${semuaStempel.length} dari ${totalTopik} arsip telah kamu buka`;
  }

  function tampilkanRencana() {
    wadahDaftar.innerHTML = daftarRencana
      .map(
        (judul, indeks) => `
        <li>
          <span>${judul}</span>
          <button type="button" data-remove="${indeks}" aria-label="Hapus ${judul}">hapus</button>
        </li>`,
      )
      .join("");

    ambilId("plan-count").textContent = `${daftarRencana.length} lokasi`;
    ambilId("plan-empty").hidden = daftarRencana.length > 0;
    ambilId("plan-copy").hidden = daftarRencana.length === 0;

    perbaruiLencanaRencana(daftarRencana.length);
    perbaruiTombolDialog();
    perbaruiCatatanStempel();
  }

  document.addEventListener("detail:open", (event) => {
    tempatSedangDibuka = event.detail.jenis === "wisata" ? event.detail : null;
    perbaruiTombolDialog();
    perbaruiCatatanStempel();
  });

  tombolTambahDialog.addEventListener("click", () => {
    if (!tempatSedangDibuka) return;

    if (daftarRencana.includes(tempatSedangDibuka.judul)) {
      daftarRencana = daftarRencana.filter(
        (judul) => judul !== tempatSedangDibuka.judul,
      );
    } else {
      daftarRencana.push(tempatSedangDibuka.judul);
    }

    simpanRencana();
    tampilkanRencana();
  });

  wadahDaftar.addEventListener("click", (event) => {
    const tombolHapus = event.target.closest("[data-remove]");
    if (!tombolHapus) return;

    daftarRencana.splice(Number(tombolHapus.dataset.remove), 1);
    simpanRencana();
    tampilkanRencana();
  });

  ambilId("plan-copy").addEventListener("click", async () => {
    const ringkasan = `Rencana Jelajah Yogyakarta: ${daftarRencana.join(" → ")}`;
    const pesan = ambilId("plan-message");

    try {
      await navigator.clipboard.writeText(ringkasan);
      pesan.textContent = "Rute berhasil disalin ke papan klip!";
    } catch (err) {
      pesan.textContent = ringkasan;
    }
  });

  tampilkanRencana();
}

// Jalankan halaman wisata
pasangKatalog({
  daftar: daftarWisata,
  idFilter: "wisata-filter",
  idGrid: "wisata-grid",
  idCari: "wisata-search",
  idKosong: "wisata-empty",
});

pasangPetaDIY();
pasangRencanaPerjalanan();
