// Data utama Jogja Pusaka
// Dipisah ke satu file supaya gampang kalau mau nambah topik budaya, kuliner, atau wisata baru.

const POLA_KATEGORI = {
  "Kerajinan": "kawung",
  "Seni pertunjukan": "parang",
  "Upacara adat": "daun",
  "Makanan utama": "ceplok",
  "Jajanan": "kawung",
  "Minuman": "parang",
  "Candi": "ceplok",
  "Kota dan budaya": "kawung",
  "Alam": "daun",
};

const daftarBudaya = [
  {
    judul: "Batik Tulis & Cap",
    kategori: "Kerajinan",
    foto: {
      src: "images/budaya-batik-baru.webp",
      alt: "Pengrajin menorehkan malam panas dengan canting pada kain batik tulis di Yogyakarta.",
    },
    ringkasan: "Kain bermotif malam panas dengan pakem warna soga, biru nila, dan putih gading.",
    tag: ["UNESCO 2009", "Malam panas", "Canting"],
    fakta: [
      "Warna klasik Jogja diambil dari alam: cokelat kulit kayu soga, biru daun tom, dan dasar putih bersih",
      "Motif Parang Rusak dulunya merupakan motif larangan yang hanya boleh dikenakan keluarga keraton",
      "Motif Sido Mukti dan Truntum dipakai dalam upacara pernikahan sebagai doa kemakmuran",
    ],
    cerita:
      "Membatik di Jogja bukan sekadar menggambar di atas kain. Pengrajin menahan napas saat menorehkan malam cair lewat ujung canting tembaga, menutup bagian kain agar tidak kemasukan warna saat dicelup.",
    labelTempat: "Sentra pengrajin:",
    tempat: "Kampung Batik Giriloyo (Imogiri), Pasar Beringharjo, dan Wijirejo",
    warna: "#7c4226",
  },
  {
    judul: "Kriya Perak Kotagede",
    kategori: "Kerajinan",
    foto: {
      src: "images/budaya-perak-baru.webp",
      alt: "Kerajinan perak filigri halus khas Kotagede Yogyakarta.",
    },
    ringkasan: "Perhiasan dan miniatur perak dengan jalinan benang logam super tipis.",
    tag: ["Kotagede", "Teknik filigri", "Sejak abad 16"],
    fakta: [
      "Tumbuh sejak Kotagede menjadi ibu kota pertama Kerajaan Mataram Islam",
      "Teknik filigri memilin benang perak tipis hingga menyerupai renda sebelum dipatri",
      "Banyak bengkel di dalam gang sempit yang memperbolehkan tamu melihat proses tempa langsung",
    ],
    cerita:
      "Di balik tembok-tembok tua Kotagede, bunyi ketukan palu kecil masih terdengar dari teras rumah warga. Batangan perak dilebur, ditarik menjadi kawat sehalus rambut, lalu dirangkai dengan pinset.",
    labelTempat: "Sentra pengrajin:",
    tempat: "Sepanjang Jalan Kemasan dan gang-gang kampung tua Kotagede",
    warna: "#526363",
  },
  {
    judul: "Gerabah Kasongan",
    kategori: "Kerajinan",
    foto: {
      src: "images/budaya-gerabah-baru.webp",
      alt: "Perajin membentuk patung tanah liat di bengkel kerajinan Kasongan, Bantul.",
    },
    ringkasan: "Tembikar tanah liat dari selatan Jogja yang dibentuk dengan tangan dan tungku jerami.",
    tag: ["Bantul", "Tanah liat", "Desa wisata"],
    fakta: [
      "Berawal dari perajin peralatan dapur harian seperti kendi, anglo, dan cobek",
      "Sejak tahun 1970-an berkembang menjadi patung terakota, guci, dan elemen interior",
      "Pembakaran tradisional masih memakai tumpukan jerami dan kayu kering di halaman warga",
    ],
    cerita:
      "Aroma tanah basah dan asap jerami langsung terasa begitu melewati gapura Kasongan. Hampir setiap teras rumah adalah bengkel terbuka tempat bongkahan tanah liat diputar di atas roda kayu.",
    labelTempat: "Sentra pengrajin:",
    tempat: "Desa Kasongan, Bangunjiwo, Kabupaten Bantul",
    warna: "#9e5831",
  },
  {
    judul: "Karawitan Gamelan",
    kategori: "Seni pertunjukan",
    foto: {
      src: "images/budaya-gamelan-baru.webp",
      alt: "Para pemain gamelan memainkan perangkat gender di Yogyakarta.",
    },
    ringkasan: "Ansambel musik perunggu bertangga nada slendro dan pelog yang dimainkan bersama.",
    tag: ["UNESCO 2021", "Perunggu", "Slendro & Pelog"],
    fakta: [
      "Tidak ada konduktor di depan; aba-aba tempo diatur lewat tabuhan kendang",
      "Gaya karawitan Yogyakarta dikenal gagah, tegas, namun tetap tenang dan terukur",
      "Satu perangkat gamelan lengkap ditempa dari campuran tembaga dan timah murni",
    ],
    cerita:
      "Dalam gamelan, tidak ada instrumen yang boleh menonjol sendirian. Saron memegang balungan lagu, bonang menghias di sela ketukan, sementara gong besar menutup kalimat musik seperti tarikan napas panjang.",
    labelTempat: "Tempat menyimak:",
    tempat: "Bangsal Sri Manganti Keraton Yogyakarta dan Pura Pakualaman",
    warna: "#99701b",
  },
  {
    judul: "Wayang Kulit Purwa",
    kategori: "Seni pertunjukan",
    foto: {
      src: "images/budaya-wayang-baru.webp",
      alt: "Pertunjukan wayang kulit oleh dalang di hadapan penonton.",
    },
    ringkasan: "Pertunjukan bayangan boneka kulit kerbau yang ditatah halus dan dimainkan semalam suntuk.",
    tag: ["UNESCO 2003", "Dalang", "Lakon Klasik"],
    fakta: [
      "Setiap lekuk mata, hidung, dan kemiringan wajah wayang menunjukkan watak tokohnya",
      "Kayon atau Gunungan ditancapkan di tengah kelir sebagai tanda pergantian babak",
      "Babak Goro-goro selalu ditunggu karena kemunculan empat abdi Punakawan yang jenaka",
    ],
    cerita:
      "Dari balik layar kain putih dan sorot lampu blencong, satu orang dalang menghidupkan puluhan karakter, mengatur irama gamelan lewat ketukan cempala kayu di kotak wayang, sekaligus menyelipkan kritik sosial.",
    labelTempat: "Tempat menyimak:",
    tempat: "Museum Sonobudoyo (pentas rutin malam hari) dan Sasono Hinggil",
    warna: "#2f4356",
  },
  {
    judul: "Tari Klasik Keraton",
    kategori: "Seni pertunjukan",
    foto: {
      src: "images/budaya-tari-baru.webp",
      alt: "Pementasan tari klasik gaya Yogyakarta di pendopo keraton.",
    },
    ringkasan: "Seni gerak Bedhaya, Srimpi, dan Beksan yang melatih kesabaran serta kendali tubuh.",
    tag: ["Beksan", "Sampur", "Filosofi Joged Mataram"],
    fakta: [
      "Berpegang pada empat prinsip Joged Mataram: Sawiji, Greget, Sengguh, dan Ora Mingkuh",
      "Beksan Golek Menak diciptakan Sri Sultan HB IX setelah terinspirasi gerakan wayang golek",
      "Setiap kibasan kain sampur dan lirikan mata memiliki hitungan ketukan yang presisi",
    ],
    cerita:
      "Menari gaya Yogyakarta bukan soal gerakan cepat, melainkan menahan keseimbangan di atas satu kaki sambil menjaga napas tetap rata. Gerakannya lambat seperti air mengalir, tapi membutuhkan otot yang sangat kuat.",
    labelTempat: "Tempat menyimak:",
    tempat: "Keraton Yogyakarta (pentas rutin pagi) dan Dalem Pujokusuman",
    warna: "#733d57",
  },
  {
    judul: "Sekaten & Grebeg",
    kategori: "Upacara adat",
    foto: {
      src: "images/budaya-sekaten-baru.webp",
      alt: "Arak-arakan Gunungan hasil bumi saat upacara Grebeg di Yogyakarta.",
    },
    ringkasan: "Peringatan Maulid Nabi dengan tabuhan gamelan pusaka dan arak-arakan gunungan hasil bumi.",
    tag: ["Maulid", "Gamelan Sekati", "Masjid Gedhe"],
    fakta: [
      "Dua gamelan pusaka, Kyai Gunturmadu dan Kyai Nagawilaga, dibawa keluar keraton menuju halaman masjid",
      "Puncaknya adalah keluarnya Gunungan berisi rengginang, sayur, dan buah yang dikawal prajurit keraton",
      "Warga memperebutkan isi gunungan (ngalap berkah) sebagai simbol rasa syukur atas hasil panen",
    ],
    cerita:
      "Selama sepekan menjelang Maulid, suara gamelan besar yang jarang ditabuh menggema dari pagongan Masjid Gedhe Kauman, ditemani aroma nasi gurih dan penjual mainan tradisional dari tanah liat.",
    labelTempat: "Lokasi tradisi:",
    tempat: "Alun-Alun Utara hingga halaman Masjid Gedhe Kauman",
    warna: "#2f6b4f",
  },
  {
    judul: "Tapa Bisu Mubeng Beteng",
    kategori: "Upacara adat",
    foto: {
      src: "images/budaya-mubeng-beteng-baru.webp",
      alt: "Warga mengikuti prosesi Tapa Bisu Mubeng Beteng pada malam 1 Sura di Yogyakarta.",
    },
    ringkasan: "Tradisi berjalan kaki mengelilingi benteng keraton dalam keheningan penuh pada malam 1 Sura.",
    tag: ["Malam 1 Sura", "Laku prihatin", "5 kilometer"],
    fakta: [
      "Diberangkatkan tepat tengah malam ditandai bunyi lonceng Kamandungan tanpa aba-aba suara",
      "Peserta berjalan tanpa alas kaki dan pantang berbicara sepanjang rute mengelilingi benteng",
      "Menjadi momen refleksi diri (mawas diri) menutup tahun lama dalam penanggalan Jawa",
    ],
    cerita:
      "Bayangkan ribuan orang berjalan beriringan di tengah malam, namun yang terdengar hanya gesekan langkah kaki dan embusan angin. Tidak ada obrolan, semua orang menunduk merenungi perjalanan hidup setahun ke belakang.",
    labelTempat: "Lokasi tradisi:",
    tempat: "Bangsal Ponconiti (Keben) memutari pojok beteng Keraton Yogyakarta",
    warna: "#424e59",
  },
];

// rasa: skala 0 sampai 5 untuk manis, gurih, dan pedas
const daftarKuliner = [
  {
    judul: "Gudeg Yu Djum & Wijilan",
    kategori: "Makanan utama",
    foto: {
      src: "images/kuliner-gudeg-baru.webp",
      alt: "Sepiring nasi gudeg kering lengkap dengan telur pindang, ayam suwir, dan sambal krecek.",
    },
    ringkasan: "Nangka muda yang dimasak berjam-jam dengan santan dan gula aren di atas kayu bakar.",
    tag: ["Wijilan", "Nangka muda", "Krecek pedas"],
    rasa: { manis: 5, gurih: 3, pedas: 1 },
    fakta: [
      "Warna cokelat kemerahannya bukan dari kecap, melainkan daun jati yang ikut direbus bersama nangka",
      "Gudeg kering dimasak lebih lama hingga santannya mengental dan tahan dibawa perjalanan jauh",
      "Rasa manis gudeg selalu diseimbangkan oleh sambal goreng krecek kulit sapi yang gurih pedas",
    ],
    cerita:
      "Sejak subuh, aroma kayu bakar dan santan mendidih sudah memenuhi gang sempit Wijilan. Sepiring nasi hangat disiram kuah areh kental, suwiran ayam kampung, telur pindang, dan krecek.",
    labelTempat: "Sentra kuliner:",
    tempat: "Kampung Wijilan (timur Alun-Alun Utara) dan kawasan Barek",
    warna: "#8f511d",
  },
  {
    judul: "Sate Klatak Jejeran",
    kategori: "Makanan utama",
    foto: {
      src: "images/kuliner-sate-klatak-baru.webp",
      alt: "Sate klatak kambing muda dengan tusuk jeruji besi khas Pleret Bantul.",
    },
    ringkasan: "Sate kambing muda berbumbu garam dan merica yang ditusuk memakai jeruji sepeda.",
    tag: ["Pleret Bantul", "Jeruji besi", "Kuah gulai"],
    rasa: { manis: 0, gurih: 5, pedas: 1 },
    fakta: [
      "Nama 'klatak' berasal dari bunyi letupan garam kasar saat daging dibakar di atas arang",
      "Tusuk jeruji besi menghantarkan panas ke bagian tengah potongan daging sehingga matang merata",
      "Disajikan bukan dengan bumbu kacang, melainkan kuah gulai kuning yang kaya rempah",
    ],
    cerita:
      "Kesederhanaan bumbu justru menjadi kunci sate klatak. Karena hanya dibalur garam dan bawang putih, kesegaran daging kambing muda langsung terasa begitu digigit, apalagi saat dicocol ke kuah gulai panas.",
    labelTempat: "Sentra kuliner:",
    tempat: "Sepanjang Jalan Imogiri Timur, Jejeran, Kabupaten Bantul",
    warna: "#733925",
  },
  {
    judul: "Sego Kucing Angkringan",
    kategori: "Makanan utama",
    foto: {
      src: "images/kuliner-angkringan-baru.webp",
      alt: "Camilan dan sate tersaji di lapak jajanan tradisional Indonesia.",
    },
    ringkasan: "Nasi kepal bungkus daun pisang dan kertas dengan lauk sambal teri atau oseng tempe.",
    tag: ["Angkringan", "Bungkus daun", "Kuliner malam"],
    rasa: { manis: 1, gurih: 4, pedas: 4 },
    fakta: [
      "Porsinya sengaja dibuat kecil sekepal tangan agar pembeli bisa mencicipi berbagai jenis nasi dan sate",
      "Gerobak angkringan berakar dari pedagang pikulan asal Klaten yang merantau ke Yogyakarta",
      "Selalu ditemani deretan sate usus, sate telur puyuh, kepala ayam bacem, dan gorengan hangat",
    ],
    cerita:
      "Di bangku kayu angkringan yang diterangi lampu temaram, semua orang duduk sejajar tanpa sekat. Dua bungkus nasi kucing yang dibakar sebentar di atas arang membuat aroma daun pisangnya makin wangi.",
    labelTempat: "Sentra kuliner:",
    tempat: "Kawasan Stasiun Tugu, Kranggan, dan sudut-sudut kampung Yogyakarta",
    warna: "#376152",
  },
  {
    judul: "Bakpia Pathok Hangat",
    kategori: "Jajanan",
    foto: {
      src: "images/kuliner-bakpia-baru.webp",
      alt: "Kue bakpia panggang isi kacang hijau khas Kampung Pathuk Yogyakarta.",
    },
    ringkasan: "Kue panggang berlapis kulit tipis dengan isian kacang hijau kupas yang lembut.",
    tag: ["Kampung Pathuk", "Kacang hijau", "Sejak 1948"],
    rasa: { manis: 4, gurih: 2, pedas: 0 },
    fakta: [
      "Hasil akulturasi kue Tionghoa (Tou Luk Pia) yang disesuaikan dengan lidah warga Yogyakarta",
      "Penomoran merek bakpia (seperti 25, 75, 145) dulunya diambil dari nomor rumah produksi di Pathuk",
      "Paling nikmat disantap saat baru diangkat dari loyang panggang ketika kulitnya masih renyah",
    ],
    cerita:
      "Menyusuri gang Kampung Pathuk di pagi hari berarti mengikuti jejak wangi panggangan kue. Di dapur-dapur rumahan, adonan kacang hijau dipulung cepat dengan tangan lalu dibalik satu per satu di atas tungku.",
    labelTempat: "Sentra kuliner:",
    tempat: "Kampung Pathuk (sekitar Jalan KS Tubun, barat Malioboro)",
    warna: "#a36f1c",
  },
  {
    judul: "Kipo Kotagede",
    kategori: "Jajanan",
    foto: {
      src: "images/kuliner-kipo-klepon.webp",
      alt: "Klepon hijau dengan kelapa parut, dipakai sebagai foto pendamping karena foto kipo belum tersedia.",
    },
    ringkasan: "Kue mungil berwarna hijau daun suji berisi unti kelapa dan gula jawa cair.",
    tag: ["Kotagede", "Tepung ketan", "Daun suji"],
    rasa: { manis: 4, gurih: 2, pedas: 0 },
    fakta: [
      "Konon namanya berasal dari pertanyaan singkat dalam bahasa Jawa: 'Iki opo?' (Ini apa?)",
      "Ukurannya hanya sebesar ibu jari dengan kulit tepung ketan yang dipanggang di atas cobek tanah liat",
      "Dialasi daun pisang saat dipanggang sehingga bagian luarnya punya bercak kecokelatan yang harum",
    ],
    cerita:
      "Kipo adalah jajanan yang tidak bisa terburu-buru dibuat. Satu per satu adonan hijau diisi enten-enten kelapa manis, dilipat seperti pastel mini, lalu dipanggang kering tanpa minyak.",
    labelTempat: "Sentra kuliner:",
    tempat: "Pasar Legi Kotagede dan Jalan Mondorakan",
    warna: "#456e39",
  },
  {
    judul: "Yangko Ketan",
    kategori: "Jajanan",
    foto: {
      src: "images/kuliner-yangko-baru.webp",
      alt: "Potongan kue yangko ketan warna-warni berbalut tepung sangrai.",
    },
    ringkasan: "Kue kotak kenyal dari tepung ketan dengan baluran tepung sangrai dan isi kacang tanah.",
    tag: ["Kotagede", "Kenyal", "Kacang tumbuk"],
    rasa: { manis: 4, gurih: 1, pedas: 0 },
    fakta: [
      "Sering dijuluki 'mochi khas Jogja' namun memiliki tekstur yang lebih padat dan potongan persegi",
      "Versi klasiknya berisi tumbukan kacang tanah dan gula pasir sebelum dipotong-potong rapi",
      "Dulunya merupakan bekal perjalanan dan hidangan bagi para bangsawan Mataram",
    ],
    cerita:
      "Taburan tepung putih tipis di permukaan yangko menjaga agar potongan ketan tidak saling menempel di dalam kotak kertas. Sekali gigit, tekstur kenyalnya langsung bertemu gurihnya kacang tumbuk.",
    labelTempat: "Sentra kuliner:",
    tempat: "Kawasan Kotagede dan toko oleh-oleh sepanjang Jalan Mataram",
    warna: "#a84b38",
  },
  {
    judul: "Wedang Uwuh Imogiri",
    kategori: "Minuman",
    foto: {
      src: "images/kuliner-wedang-uwuh-baru.webp",
      alt: "Segelas wedang uwuh merah menyala dengan rempah kayu secang, jahe, dan cengkih.",
    },
    ringkasan: "Seduhan rempah hangat berwarna merah menyala dari serutan kayu secang dan jahe bakar.",
    tag: ["Imogiri", "Kayu secang", "Rempah utuh"],
    rasa: { manis: 3, gurih: 0, pedas: 3 },
    fakta: [
      "'Uwuh' dalam bahasa Jawa berarti 'sampah' karena tampilannya penuh dedaunan dan ranting rempah",
      "Warna merah cerahnya murni keluar dari getah serutan kayu secang saat disiram air mendidih",
      "Diperkaya jahe emprit yang digeprek, daun cengkih, daun kayu manis, pala, dan gula batu",
    ],
    cerita:
      "Jangan tertipu tampilannya yang penuh dedaunan kering di dalam gelas. Begitu air panas dituang, warna bening perlahan berubah menjadi merah delima dengan uap hangat jahe yang melegakan tenggorokan.",
    labelTempat: "Sentra kuliner:",
    tempat: "Kawasan Makam Raja-Raja Imogiri, Bantul",
    warna: "#82283c",
  },
  {
    judul: "Kopi Joss Tugu",
    kategori: "Minuman",
    foto: {
      src: "images/kuliner-kopi-joss-baru.webp",
      alt: "Penjual meracik minuman tradisional di warung pinggir jalan Indonesia.",
    },
    ringkasan: "Kopi hitam tubruk yang disajikan dengan celupan bongkahan arang kayu membara.",
    tag: ["Stasiun Tugu", "Arang membara", "Sejak 1960-an"],
    rasa: { manis: 3, gurih: 0, pedas: 0 },
    fakta: [
      "Arang yang dipakai bukan arang sembarangan, melainkan kayu sambi atau asem yang membara sempurna",
      "Bunyi 'joss!' saat bara arang bertemu seduhan kopi panas menjadi asal-usul namanya",
      "Arang aktif membantu mengikat sebagian kafein dan keasaman kopi sekaligus memberi aroma karamel",
    ],
    cerita:
      "Duduk bersila di atas tikar trotoar utara Stasiun Tugu sambil menunggu kereta lewat, segelas kopi yang masih mendidih berbuih karena bara arang ini adalah pengalaman malam khas Jogja.",
    labelTempat: "Sentra kuliner:",
    tempat: "Deretan angkringan Jalan Mangkubumi dan utara Stasiun Tugu",
    warna: "#422c21",
  },
];

const daftarWisata = [
  {
    judul: "Candi Prambanan",
    kategori: "Candi",
    foto: {
      src: "images/beranda-sorotan-prambanan.webp",
      alt: "Kompleks Candi Prambanan menjulang di bawah langit cerah Yogyakarta.",
    },
    ringkasan: "Kompleks candi Hindu abad ke-9 dengan menara batu runcing yang menjulang 47 meter.",
    tag: ["Sleman", "Abad ke-9", "UNESCO 1991"],
    fakta: [
      "Tiga candi utama didedikasikan untuk Trimurti: Siwa di tengah, Wisnu di utara, dan Brahma di selatan",
      "Dinding langkan Candi Siwa memahat kisah lengkap epik Ramayana yang bersambung ke Candi Brahma",
      "Waktu terbaik berkunjung adalah pukul 16.00 sore saat batu andesit memantulkan cahaya keemasan",
    ],
    cerita:
      "Berdiri di pelataran Prambanan saat sore hari membuat siluet batu-batu candi tampak seperti lukisan raksasa. Setiap blok batu dikunci dengan sistem takikan tanpa semen sedikit pun.",
    labelTempat: "Lokasi:",
    tempat: "Bokoharjo, Prambanan, Kabupaten Sleman (perbatasan DIY–Jawa Tengah)",
    warna: "#63523f",
  },
  {
    judul: "Tebing Breksi & Ratu Boko",
    kategori: "Candi",
    foto: {
      src: "images/wisata-tebing-breksi.webp",
      alt: "Pahatan batu kapur di Tebing Breksi Sleman Yogyakarta.",
    },
    ringkasan: "Perbukitan batu kapur purba dan sisa gerbang istana kuno yang menghadap lanskap kota Jogja.",
    tag: ["Sleman", "Perbukitan selatan", "Panorama senja"],
    fakta: [
      "Situs Ratu Boko merupakan kompleks permukiman dan pendopo kerajaan dari abad ke-8 di atas bukit",
      "Tebing Breksi dulunya adalah lokasi tambang batu kapur warga yang disulap menjadi ruang seni pahat",
      "Dari pelataran baratnya, Candi Prambanan dan Gunung Merapi terlihat sejajar dalam satu garis pandang",
    ],
    cerita:
      "Ketika matahari mulai turun di ufuk barat, cahaya jingga menembus tepat di sela-sela gapura batu Ratu Boko. Dari ketinggian bukit ini, hamparan sawah Sleman terlihat membentang luas.",
    labelTempat: "Lokasi:",
    tempat: "Sambirejo, Kecamatan Prambanan, Kabupaten Sleman",
    warna: "#526352",
  },
  {
    judul: "Keraton Yogyakarta",
    kategori: "Kota dan budaya",
    foto: {
      src: "images/beranda-sorotan-keraton.webp",
      alt: "Bangsal dan pelataran berpasir di dalam kompleks Keraton Ngayogyakarta Hadiningrat.",
    },
    ringkasan: "Kompleks istana Kasultanan yang masih hidup dengan abdi dalem, pendopo kayu, dan gamelan.",
    tag: ["Kota Yogyakarta", "Sejak 1756", "Sumbu Filosofi"],
    fakta: [
      "Dirancang langsung oleh Sri Sultan Hamengkubuwono I dengan tata ruang penuh makna perjalanan manusia",
      "Pepohonan di setiap pelataran (seperti pohon sawo kecik dan tanjung) ditanam sebagai simbol kebaikan",
      "Setiap pagi terdapat pertunjukan berbeda: karawitan, wayang golek, macapat, hingga tarian klasik",
    ],
    cerita:
      "Memasuki pelataran berpasir hitam di dalam Keraton rasanya seperti melambat dari hiruk-pikuk kota. Para abdi dalem berpakaian pranakan biru tua berjalan tenang menjaga warisan yang hidup lebih dari dua setengah abad.",
    labelTempat: "Lokasi:",
    tempat: "Kelurahan Panembahan, Kecamatan Kraton, Kota Yogyakarta",
    warna: "#7c4226",
  },
  {
    judul: "Taman Sari",
    kategori: "Kota dan budaya",
    foto: {
      src: "images/wisata-taman-sari.webp",
      alt: "Kolam pemandian Umbul Binangun di kompleks Taman Sari Yogyakarta.",
    },
    ringkasan: "Bekas kebun istana dan pemandian kerajaan abad ke-18 dengan lorong bawah tanah.",
    tag: ["Kota Yogyakarta", "Arsitektur air", "Kampung wisata"],
    fakta: [
      "Dibangun pada masa Sultan HB I dengan memadukan langgam Jawa, Portugis, dan Eropa",
      "Sumur Gumuling dulunya adalah masjid melingkar dua lantai yang dikelilingi air kolam sebagai pendingin alami",
      "Di sekeliling situs berdiri Kampung Cyber dan perajin batik lukis yang ramah disapa sambil jalan kaki",
    ],
    cerita:
      "Air hijau jernih di kolam Umbul Binangun memantulkan dinding-dinding tebal berwarna krem hangat. Menyusuri anak tangga dan lorong-lorong bata Taman Sari membawa kita ke masa ketika bangunan ini dikelilingi danau buatan.",
    labelTempat: "Lokasi:",
    tempat: "Kampung Taman, Kecamatan Kraton, Kota Yogyakarta",
    warna: "#376e68",
  },
  {
    judul: "Kawasan Malioboro & Beringharjo",
    kategori: "Kota dan budaya",
    foto: {
      src: "images/wisata-malioboro.webp",
      alt: "Suasana pedestrian Jalan Malioboro di pusat Kota Yogyakarta.",
    },
    ringkasan: "Jantung perjumpaan warga, bangunan kolonial, pasar tradisional, dan bangku-bangku pejalan kaki.",
    tag: ["Kota Yogyakarta", "Sumbu Filosofi", "Pasar sejak 1758"],
    fakta: [
      "Menjadi bagian dari jalan seremonial yang menghubungkan Tugu Pal Putih dengan Keraton Yogyakarta",
      "Pasar Beringharjo telah menjadi tempat transaksi ekonomi warga sejak keraton pertama kali berdiri",
      "Di sekitarnya berdiri Benteng Vredeburg, Gedung Agung, dan Titik Nol Kilometer",
    ],
    cerita:
      "Malioboro punya dua wajah yang sama-sama memikat: pagi hari saat aroma rempah dan batik memenuhi lorong Pasar Beringharjo, serta malam hari ketika lampu-lampu besi antik menyinari trotoar teraso.",
    labelTempat: "Lokasi:",
    tempat: "Membentang dari Stasiun Tugu hingga perempatan Titik Nol Kilometer",
    warna: "#2f4356",
  },
  {
    judul: "Kampung Tua Kotagede",
    kategori: "Kota dan budaya",
    foto: {
      src: "images/wisata-kotagede.webp",
      alt: "Lorong rumah tradisional dan gerbang batu di kawasan cagar budaya Kotagede.",
    },
    ringkasan: "Labirin gang sempit berbatu dengan rumah kalang, joglo kuno, dan makam pendiri Mataram.",
    tag: ["Kota & Bantul", "Mataram Islam", "Rumah Kalang"],
    fakta: [
      "Kompleks Masjid Gedhe Mataram memiliki gapura paduraksa bercorak Hindu-Jawa yang masih terawat",
      "Rumah Kalang memadukan pendopo kayu tradisional Jawa dengan kaca patri warna-warni bergaya Art Nouveau",
      "Gang-gang sempit di kampung Between Two Gates hanya muat dilalui pejalan kaki atau sepeda",
    ],
    cerita:
      "Cara terbaik menikmati Kotagede adalah menyimpan peta dan membiarkan kaki melangkah masuk ke sela-sela dua gerbang batu (rukunan). Di balik tembok tinggi, suasana tenang abad ke-16 masih terasa utuh.",
    labelTempat: "Lokasi:",
    tempat: "Perbatasan tenggara Kota Yogyakarta dan Kabupaten Bantul",
    warna: "#82672e",
  },
  {
    judul: "Pantai Parangtritis & Gumuk Pasir",
    kategori: "Alam",
    foto: {
      src: "images/wisata-parangtritis.webp",
      alt: "Bentang pasir hitam dan ombak pantai selatan di Parangtritis Bantul.",
    },
    ringkasan: "Bentang pantai selatan berpasir vulkanik hitam dan gundukan pasir yang dibentuk angin laut.",
    tag: ["Bantul", "Ujung selatan sumbu", "Gumuk pasir barchan"],
    fakta: [
      "Pasir hitamnya berasal dari material erupsi Gunung Merapi yang terbawa aliran Sungai Opak dan Progo ke laut",
      "Gumuk Pasir Parangkusumo adalah fenomena langka gundukan pasir tipe barchan di wilayah tropis basah",
      "Pantai Parangkusumo di sebelahnya menjadi lokasi upacara adat Labuhan Keraton Yogyakarta",
    ],
    cerita:
      "Angin laut selatan bertiup kencang membawa butiran pasir halus yang berkilau saat terkena matahari sore. Di kejauhan, tebing karst Pegunungan Sewu tampak memagari garis pantai dari sisi timur.",
    labelTempat: "Lokasi:",
    tempat: "Kretek, Kabupaten Bantul (27 km di selatan pusat Kota Yogyakarta)",
    warna: "#285e6d",
  },
  {
    judul: "Gunung Api Purba Nglanggeran",
    kategori: "Alam",
    foto: {
      src: "images/wisata-nglanggeran.webp",
      alt: "Gugusan tebing batu raksasa Gunung Api Purba Nglanggeran di Gunungkidul.",
    },
    ringkasan: "Gugusan bongkahan batu andesit raksasa berusia puluhan juta tahun yang dikelola warga desa.",
    tag: ["Gunungkidul", "Geopark UNESCO", "Desa wisata Terbaik UNWTO"],
    fakta: [
      "Merupakan gunung api bawah laut yang aktif sekitar 60 juta tahun silam sebelum terangkat ke permukaan",
      "Jalur pendakiannya melewati celah sempit di antara dua tebing batu vertikal yang hanya muat satu badan",
      "Desa Wisata Nglanggeran meraih penghargaan Best Tourism Village dari badan pariwisata dunia (UNWTO)",
    ],
    cerita:
      "Mendaki Nglanggeran sebelum matahari terbit membutuhkan waktu sekitar satu jam melewati tangga kayu dan celah batu. Sesampainya di Puncak Gedhe, lautan kabut tipis menyelimuti lembah dan embung di bawahnya.",
    labelTempat: "Lokasi:",
    tempat: "Desa Nglanggeran, Kecamatan Patuk, Kabupaten Gunungkidul",
    warna: "#375e3c",
  },
  {
    judul: "Kebun Teh Nglinggo & Bukit Menoreh",
    kategori: "Alam",
    foto: {
      src: "images/wisata-nglinggo.webp",
      alt: "Hamparan hijau Kebun Teh Nglinggo di perbukitan Menoreh Kulon Progo.",
    },
    ringkasan: "Perkebunan teh rakyat di punggung Pegunungan Menoreh yang berselimut kabut pagi.",
    tag: ["Kulon Progo", "Pegunungan Menoreh", "900 mdpl"],
    fakta: [
      "Satu-satunya perkebunan teh di wilayah Daerah Istimewa Yogyakarta yang dirawat langsung oleh petani lokal",
      "Pegunungan Menoreh dulunya menjadi basis pertahanan gerilya Pangeran Diponegoro pada Perang Jawa",
      "Pengunjung bisa mencicipi teh sangrai tradisional yang diseduh langsung di gubuk kayu warga",
    ],
    cerita:
      "Udara dingin langsung menyergap begitu jalan menanjak memasuki perbukitan Samigaluh. Barisan perdu teh hijau mengikuti lekuk bukit, dengan siluet puncak Merapi, Merbabu, Sumbing, dan Sindoro di kejauhan.",
    labelTempat: "Lokasi:",
    tempat: "Desa Pagerharjo, Kecamatan Samigaluh, Kabupaten Kulon Progo",
    warna: "#346948",
  },
];

// Menu angkringan untuk simulasi nampan interaktif di halaman kuliner
const menuAngkringan = [
  { id: "kucing-teri", nama: "Sego Kucing Sambal Teri", harga: 3500, kategori: "Nasi", cerita: "Nasi hangat sekepal dengan sambal teri pedas manis bungkus daun pisang." },
  { id: "kucing-oseng", nama: "Sego Kucing Oseng Tempe", harga: 3500, kategori: "Nasi", cerita: "Nasi dengan irisan tempe bacem dan cabai hijau." },
  { id: "sate-usus", nama: "Sate Usus Bumbu Bacem", harga: 3000, kategori: "Lauk", cerita: "Dimasak air kelapa dan gula jawa, makin sedap kalau dibakar ulang di arang." },
  { id: "sate-puyuh", nama: "Sate Telur Puyuh", harga: 4000, kategori: "Lauk", cerita: "Tiga butir telur puyuh pindang kecokelatan yang gurih lembut." },
  { id: "mendoan", nama: "Tempe Mendoan Hangat", harga: 2500, kategori: "Gorengan", cerita: "Tempe tipis berbalut tepung daun bawang, digoreng setengah matang." },
  { id: "bacem-tahu", nama: "Tahu Bacem", harga: 2500, kategori: "Lauk", cerita: "Tahu putih yang direbus lama dengan ketumbar, lengkuas, dan gula merah." },
  { id: "kopi-joss", nama: "Gelas Kopi Joss", harga: 6000, kategori: "Minuman", cerita: "Kopi tubruk hitam dengan celupan bara arang kayu." },
  { id: "wedang-jahe", nama: "Wedang Jahe Geprek", harga: 5000, kategori: "Minuman", cerita: "Jahe emprit bakar yang digeprek dan diseduh gula batu." },
];

// Kelompokkan koleksi dan beri penanda jenis + urutan supaya gampang dipanggil saat kartu diklik
const koleksiKonten = {
  budaya: daftarBudaya,
  kuliner: daftarKuliner,
  wisata: daftarWisata,
};

Object.entries(koleksiKonten).forEach(([jenis, daftar]) => {
  daftar.forEach((item, urutan) => {
    item.jenis = jenis;
    item.urutan = urutan;
  });
});
