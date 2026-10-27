// Skrip halaman Kuliner
// Katalog kuliner, pencocok selera rasa, simulasi nampan angkringan, dan pengacak hidangan.

const JENIS_RASA = ["manis", "gurih", "pedas"];
const JARAK_MAKSIMUM = Math.sqrt(75);

function hitungSelisihRasa(hidangan, selera) {
  const jumlahKuadrat = JENIS_RASA.reduce((total, nama) => {
    return total + (hidangan.rasa[nama] - selera[nama]) ** 2;
  }, 0);
  return Math.sqrt(jumlahKuadrat);
}

function pasangPencocokRasa() {
  let hidanganTerdekat = null;

  function cariYangCocok() {
    const selera = {};

    JENIS_RASA.forEach((nama) => {
      selera[nama] = Number(ambilId(`taste-${nama}`).value);
      ambilId(`taste-${nama}-value`).textContent = selera[nama];
    });

    let jarakTerkecil = Infinity;

    daftarKuliner.forEach((hidangan) => {
      const jarak = hitungSelisihRasa(hidangan, selera);
      if (jarak < jarakTerkecil) {
        jarakTerkecil = jarak;
        hidanganTerdekat = hidangan;
      }
    });

    const persenCocok = Math.round(100 - (jarakTerkecil / JARAK_MAKSIMUM) * 100);

    ambilId("taste-result-name").textContent = hidanganTerdekat.judul;
    ambilId("taste-result-summary").textContent = hidanganTerdekat.ringkasan;
    ambilId("taste-result-score").textContent = `Kecocokan lidah ${persenCocok}%`;
  }

  JENIS_RASA.forEach((nama) => {
    ambilId(`taste-${nama}`).addEventListener("input", cariYangCocok);
  });

  ambilId("taste-result-detail").addEventListener("click", () => {
    if (hidanganTerdekat) bukaDetail(hidanganTerdekat);
  });

  cariYangCocok();
}

// Simulasi Nampan Angkringan Malam
function pasangNampanAngkringan() {
  const wadahMenu = ambilId("angkringan-menu");
  const daftarNampan = ambilId("angkringan-tray");
  const teksTotal = ambilId("angkringan-total");
  const teksCerita = ambilId("angkringan-note");
  const tombolKosongkan = ambilId("angkringan-clear");

  if (!wadahMenu) return;

  // Simpan jumlah tiap item yang diambil ke atas nampan
  const isiNampan = {};

  function perbaruiNampan() {
    const itemTerpilih = menuAngkringan.filter((item) => isiNampan[item.id] > 0);
    let totalHarga = 0;
    let totalButir = 0;

    if (itemTerpilih.length === 0) {
      daftarNampan.innerHTML = `<li class="nampan-masih-kosong">Nampan bambumu masih kosong. Ketuk lauk atau minuman di sebelah kiri.</li>`;
      teksTotal.textContent = "Rp0";
      tombolKosongkan.hidden = true;
      return;
    }

    daftarNampan.innerHTML = itemTerpilih
      .map((item) => {
        const jumlah = isiNampan[item.id];
        const subtotal = item.harga * jumlah;
        totalHarga += subtotal;
        totalButir += jumlah;

        return `
          <li>
            <span><strong>${jumlah}x</strong> ${item.nama}</span>
            <b>${formatRupiah(subtotal)}</b>
          </li>`;
      })
      .join("");

    teksTotal.textContent = `${formatRupiah(totalHarga)} (${totalButir} potong)`;
    tombolKosongkan.hidden = false;
  }

  menuAngkringan.forEach((item) => {
    isiNampan[item.id] = 0;

    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.className = "pilihan-jajanan";
    tombol.innerHTML = `
      <div>
        <span class="label-kecil">${item.kategori}</span>
        <strong>${item.nama}</strong>
      </div>
      <b>${formatRupiah(item.harga)}</b>`;

    tombol.addEventListener("click", () => {
      isiNampan[item.id]++;
      teksCerita.textContent = item.cerita;
      perbaruiNampan();
    });

    wadahMenu.appendChild(tombol);
  });

  tombolKosongkan.addEventListener("click", () => {
    Object.keys(isiNampan).forEach((kunci) => {
      isiNampan[kunci] = 0;
    });
    teksCerita.textContent = "Nampan dikosongkan. Silakan racik ulang porsi malammu.";
    perbaruiNampan();
  });

  perbaruiNampan();
}

// Pengacak hidangan harian
function pilihHidanganAcak() {
  return daftarKuliner[Math.floor(Math.random() * daftarKuliner.length)];
}

function pasangPengacakKuliner() {
  const kotakNama = ambilId("random-name");
  const kotakInfo = ambilId("random-info");
  const tombolAcak = ambilId("random-roll");
  const tombolDetail = ambilId("random-detail");
  let hidanganTerpilih = null;

  tombolAcak.addEventListener("click", () => {
    let putaran = 0;

    tombolAcak.disabled = true;
    tombolDetail.hidden = true;
    kotakNama.classList.add("sedang-diundi");

    const pengatur = setInterval(() => {
      kotakNama.textContent = pilihHidanganAcak().judul;
      putaran++;

      if (putaran < 14) return;

      clearInterval(pengatur);
      hidanganTerpilih = pilihHidanganAcak();

      kotakNama.classList.remove("sedang-diundi");
      kotakNama.textContent = hidanganTerpilih.judul;
      kotakInfo.textContent = `${hidanganTerpilih.ringkasan} Sentra: ${hidanganTerpilih.tempat}.`;

      tombolAcak.disabled = false;
      tombolAcak.textContent = "Putar pilihan lain";
      tombolDetail.hidden = false;
    }, 85);
  });

  tombolDetail.addEventListener("click", () => {
    if (hidanganTerpilih) bukaDetail(hidanganTerpilih);
  });
}

// Jalankan halaman kuliner
pasangKatalog({
  daftar: daftarKuliner,
  idFilter: "kuliner-filter",
  idGrid: "kuliner-grid",
  idCari: "kuliner-search",
  idKosong: "kuliner-empty",
});

pasangPencocokRasa();
pasangNampanAngkringan();
pasangPengacakKuliner();
