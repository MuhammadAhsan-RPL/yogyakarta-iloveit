// Fungsi bersama yang dipakai di lima halaman:
// pengaturan tema, navigasi, render kartu katalog, jendela detail, dan stempel kunjungan.

const ambilId = (id) => document.getElementById(id);

const KUNCI_SIMPAN = {
  tema: "jp_theme",
  rencana: "jp_plan",
  stempel: "jp_stamps",
};

// Pembacaan localStorage dibungkus try-catch jaga-jaga kalau browser mode privat
function bacaSimpanan(kunci, nilaiAwal) {
  try {
    const mentah = localStorage.getItem(kunci);
    return mentah === null ? nilaiAwal : JSON.parse(mentah);
  } catch (err) {
    return nilaiAwal;
  }
}

function tulisSimpanan(kunci, nilai) {
  try {
    localStorage.setItem(kunci, JSON.stringify(nilai));
  } catch (err) {
    // Abaikan jika penyimpanan penuh atau diblokir
  }
}

function kurangiGerak() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

// Tema siang / malam
const tombolTema = ambilId("theme-toggle");

function terapkanTema(tema) {
  const modeMalam = tema === "dark";
  document.documentElement.dataset.theme = tema;
  if (tombolTema) {
    tombolTema.textContent = modeMalam ? "Mode Siang" : "Mode Malam";
    tombolTema.setAttribute("aria-pressed", modeMalam);
  }
}

terapkanTema(document.documentElement.dataset.theme || "light");

if (tombolTema) {
  tombolTema.addEventListener("click", () => {
    const temaBerikutnya =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    terapkanTema(temaBerikutnya);
    tulisSimpanan(KUNCI_SIMPAN.tema, temaBerikutnya);
  });
}

// Menu untuk tampilan ponsel
const tombolMenu = ambilId("menu-toggle");
const navUtama = ambilId("site-nav");

if (tombolMenu && navUtama) {
  tombolMenu.addEventListener("click", () => {
    const terbuka = navUtama.classList.toggle("sedang-terbuka");
    tombolMenu.setAttribute("aria-expanded", terbuka);
    tombolMenu.textContent = terbuka ? "Tutup" : "Menu";
  });
}

// Garis progres baca di bagian paling atas layar
const garisBaca = ambilId("scroll-progress");

window.addEventListener(
  "scroll",
  () => {
    if (!garisBaca) return;
    const tinggiMaks =
      document.documentElement.scrollHeight - window.innerHeight;
    const persen = tinggiMaks > 0 ? (window.scrollY / tinggiMaks) * 100 : 0;
    garisBaca.style.width = `${persen}%`;
  },
  { passive: true },
);

// Animasi elemen muncul perlahan saat masuk layar
const pengamatMuncul = new IntersectionObserver(
  (daftarEntri) => {
    daftarEntri.forEach((entri) => {
      if (!entri.isIntersecting) return;
      entri.target.classList.add("sudah-kelihatan");
      pengamatMuncul.unobserve(entri.target);
    });
  },
  { threshold: 0.1 },
);

function amatiElemenBaru() {
  document.querySelectorAll(".muncul-saat-digulir:not(.sudah-kelihatan)").forEach((elemen) => {
    pengamatMuncul.observe(elemen);
  });
}

document.addEventListener("DOMContentLoaded", amatiElemenBaru);

// Efek hitung naik untuk angka-angka statistik
function jalankanHitungan(elemen) {
  const target = Number(elemen.dataset.count);
  const durasi = 1200;
  let waktuMulai = null;

  function langkah(waktuSekarang) {
    if (!waktuMulai) waktuMulai = waktuSekarang;
    const laju = Math.min(1, (waktuSekarang - waktuMulai) / durasi);
    const kurvaHalus = 1 - Math.pow(1 - laju, 3);
    elemen.textContent = Math.round(target * kurvaHalus);
    if (laju < 1) requestAnimationFrame(langkah);
  }

  requestAnimationFrame(langkah);
}

const pengamatAngka = new IntersectionObserver(
  (daftarEntri) => {
    daftarEntri.forEach((entri) => {
      if (!entri.isIntersecting) return;
      pengamatAngka.unobserve(entri.target);
      jalankanHitungan(entri.target);
    });
  },
  { threshold: 0.5 },
);

function amatiSemuaAngka() {
  document.querySelectorAll("[data-count]").forEach((elemen) => {
    pengamatAngka.observe(elemen);
  });
}

// Pembuatan kartu katalog (dipakai di Budaya, Kuliner, dan Wisata)
function gayaSampul(item) {
  const namaPola = POLA_KATEGORI[item.kategori] || "kawung";
  return `--cover-color: ${item.warna}; --cover-pattern: var(--pattern-${namaPola})`;
}

function susunDaftarTag(daftarTag) {
  return daftarTag.map((isi) => `<span class="label-kecil">${isi}</span>`).join("");
}

function susunBarRasa(rasa) {
  return Object.entries(rasa)
    .map(
      ([nama, nilai]) => `
      <div>
        <span>${nama[0].toUpperCase() + nama.slice(1)}</span>
        <i style="--level: ${nilai * 20}%"></i>
      </div>`,
    )
    .join("");
}

function buatKartuHTML(item, posisi) {
  const jeda = (posisi % 6) * 65;
  const daftarStempel = bacaSimpanan(KUNCI_SIMPAN.stempel, []);
  const sudahDibaca = daftarStempel.includes(item.judul);
  const sumberFoto = item.foto ? item.foto.src || item.foto : "";
  const cadanganFoto = item.foto && item.foto.cadangan ? item.foto.cadangan : "";

  return `
    <button class="kartu-catatan muncul-saat-digulir" type="button"
      style="transition-delay: ${jeda}ms"
      data-type="${item.jenis}" data-index="${item.urutan}">
      <div class="sampul-catatan${sumberFoto ? " ada-foto" : ""}" style="${gayaSampul(item)}">
        ${sumberFoto ? `<img class="foto-arsip" src="${sumberFoto}" ${cadanganFoto ? `data-fallback="${cadanganFoto}"` : ""} alt="${item.judul}" loading="lazy" decoding="async" onerror="if(this.dataset.fallback){this.src=this.dataset.fallback;delete this.dataset.fallback;}else{this.remove();}" />` : ""}
        <span>Arsip: ${item.judul}</span>
        ${sudahDibaca ? '<em class="cap-sudah-dibaca" title="Sudah kamu baca">Tercatat ✓</em>' : ""}
      </div>
      <div class="isi-catatan">
        <span class="label-kecil">${item.kategori}</span>
        <h3>${item.judul}</h3>
        <p>${item.ringkasan}</p>
        <div class="daftar-label">${susunDaftarTag(item.tag)}</div>
        ${item.rasa ? `<div class="ukuran-rasa">${susunBarRasa(item.rasa)}</div>` : ""}
      </div>
    </button>`;
}

function pasangKatalog({ daftar, idFilter, idGrid, idCari, idKosong }) {
  const wadahFilter = ambilId(idFilter);
  const wadahGrid = ambilId(idGrid);
  const inputCari = ambilId(idCari);
  const pesanKosong = ambilId(idKosong);

  const semuaKategori = [
    "Semua",
    ...new Set(daftar.map((item) => item.kategori)),
  ];
  let kategoriAktif = "Semua";

  function tampilkanKartu() {
    const kataKunci = inputCari.value.trim().toLowerCase();

    const hasilSaring = daftar.filter((item) => {
      const cocokKategori =
        kategoriAktif === "Semua" || item.kategori === kategoriAktif;
      const teksGabungan = [item.judul, item.ringkasan, ...item.tag]
        .join(" ")
        .toLowerCase();
      return cocokKategori && teksGabungan.includes(kataKunci);
    });

    wadahGrid.innerHTML = hasilSaring.map(buatKartuHTML).join("");
    pesanKosong.hidden = hasilSaring.length > 0;
    amatiElemenBaru();
  }

  semuaKategori.forEach((kategori) => {
    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.textContent = kategori;
    tombol.setAttribute("aria-pressed", kategori === kategoriAktif);

    tombol.addEventListener("click", () => {
      kategoriAktif = kategori;
      wadahFilter.querySelectorAll("button").forEach((lainnya) => {
        lainnya.setAttribute("aria-pressed", lainnya === tombol);
      });
      tampilkanKartu();
    });

    wadahFilter.appendChild(tombol);
  });

  inputCari.addEventListener("input", tampilkanKartu);

  // Kalau dialog ditutup, perbarui tanda "Tercatat" di kartu
  document.addEventListener("stempel:baru", tampilkanKartu);

  tampilkanKartu();
}

// Jendela dialog detail
const dialogDetail = ambilId("detail-dialog");

function catatStempelBaca(judul) {
  const tersimpan = bacaSimpanan(KUNCI_SIMPAN.stempel, []);
  if (!tersimpan.includes(judul)) {
    tersimpan.push(judul);
    tulisSimpanan(KUNCI_SIMPAN.stempel, tersimpan);
    document.dispatchEvent(new CustomEvent("stempel:baru", { detail: tersimpan }));
  }
}

function bukaDetail(item) {
  if (!dialogDetail) return;

  const sampul = ambilId("detail-cover");
  sampul.style.cssText = gayaSampul(item);
  const fotoLama = sampul.querySelector(".foto-detail");
  if (fotoLama) fotoLama.remove();
  const sumberFoto = item.foto ? item.foto.src || item.foto : "";
  sampul.classList.toggle("ada-foto", Boolean(sumberFoto));

  if (sumberFoto) {
    const foto = document.createElement("img");
    foto.className = "foto-detail";
    foto.src = sumberFoto;
    foto.alt = (item.foto && item.foto.alt) || item.judul;
    foto.loading = "lazy";
    foto.decoding = "async";
    foto.onerror = () => {
      if (item.foto && item.foto.cadangan && foto.src !== item.foto.cadangan) {
        foto.src = item.foto.cadangan;
      } else {
        foto.remove();
      }
    };
    sampul.prepend(foto);
  }

  ambilId("detail-category").textContent = item.kategori;
  ambilId("detail-title").textContent = item.judul;
  ambilId("detail-description").textContent = item.cerita;
  ambilId("detail-facts").innerHTML = item.fakta
    .map((butir) => `<li>${butir}</li>`)
    .join("");
  ambilId("detail-tags").innerHTML = susunDaftarTag(item.tag);
  ambilId("detail-taste").innerHTML = item.rasa ? susunBarRasa(item.rasa) : "";
  ambilId("detail-place-label").textContent = item.labelTempat;
  ambilId("detail-place").textContent = item.tempat;
  ambilId("detail-plan-button").hidden = item.jenis !== "wisata";

  catatStempelBaca(item.judul);
  document.dispatchEvent(new CustomEvent("detail:open", { detail: item }));

  dialogDetail.showModal();
}

document.addEventListener("click", (event) => {
  const pemicu = event.target.closest("[data-type][data-index]");
  if (!pemicu) return;

  const kelompok = koleksiKonten[pemicu.dataset.type];
  const item = kelompok && kelompok[pemicu.dataset.index];
  if (item) bukaDetail(item);
});

if (dialogDetail) {
  ambilId("detail-close").addEventListener("click", () => dialogDetail.close());
  dialogDetail.addEventListener("click", (event) => {
    if (event.target === dialogDetail) dialogDetail.close();
  });
}

// Lencana jumlah rencana wisata di menu atas
function perbaruiLencanaRencana(jumlah) {
  const lencana = ambilId("plan-badge");
  if (!lencana) return;
  lencana.textContent = jumlah;
  lencana.hidden = jumlah === 0;
}

perbaruiLencanaRencana(bacaSimpanan(KUNCI_SIMPAN.rencana, []).length);

// Bagian kaki halaman (footer)
document.querySelectorAll("[data-soon]").forEach((tautan) => {
  tautan.addEventListener("click", (event) => event.preventDefault());
});

const tombolAtas = ambilId("back-to-top");
if (tombolAtas) {
  tombolAtas.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const formKabar = ambilId("newsletter-form");
if (formKabar) {
  formKabar.addEventListener("submit", (event) => {
    event.preventDefault();
    const surel = ambilId("newsletter-email").value.trim();
    const valid = /^\S+@\S+\.\S+$/.test(surel);

    ambilId("newsletter-message").textContent = valid
      ? "Catatan suratmu sudah kami simpan. Matur nuwun!"
      : "Masukkan format email yang benar, misalnya nama@email.com.";

    if (valid) formKabar.reset();
  });
}
