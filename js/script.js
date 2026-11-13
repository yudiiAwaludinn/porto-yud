// script.js
// Satu file untuk semua halaman. Setiap bagian dicek dulu elemennya ada atau tidak,
// karena tiap halaman hanya punya sebagian elemen.

// ===== DATA =====
// Kalau mau ganti isi website, cukup ubah data di bagian ini.

const kataTagline = ["web developer", "desainer UI/UX"];

const namaKategori = {
  ecommerce: "E-commerce",
  business: "Bisnis",
  health: "Kesehatan",
  realestate: "Properti",
};

const daftarProyek = [
  {
    id: 1,
    kategori: "ecommerce",
    judul: "Proyek satu",
    ringkasan: "Toko online",
    gambar: "https://i.pinimg.com/1200x/84/d5/b4/84d5b423cc4e995c6bc629db7264f4c9.jpg",
    tautan: "",
    detail: "Konsep halaman toko online dengan alur belanja yang singkat: katalog produk, halaman detail, keranjang, dan checkout yang nyaman dipakai di ponsel.",
    teknologi: ["Figma", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    kategori: "business",
    judul: "Proyek dua",
    ringkasan: "Kesan mewah",
    gambar: "https://i.pinimg.com/736x/e6/8c/42/e68c42c5a2de16c8388891247d98e103.jpg",
    tautan: "",
    detail: "Desain website bisnis dengan kesan mewah: tipografi tegas, ruang kosong luas, dan palet warna terbatas agar merek terlihat premium.",
    teknologi: ["Figma", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: 3,
    kategori: "health",
    judul: "Proyek tiga",
    ringkasan: "Kesehatan dan kebugaran",
    gambar: "https://i.pinimg.com/1200x/5e/9b/81/5e9b817a18ec107d722dab0109ae24be.jpg",
    tautan: "https://dribbble.com/shots/16302395-Glofox-Business-Type-Pages?",
    detail: "Halaman untuk bisnis kebugaran: tiap jenis studio punya halaman sendiri berisi penjelasan layanan dan ajakan bertindak yang jelas.",
    teknologi: ["Figma", "Desain UI", "Prototyping"],
  },
  {
    id: 4,
    kategori: "realestate",
    judul: "Proyek empat",
    ringkasan: "Website listing properti",
    gambar: "https://i.pinimg.com/736x/a5/2c/a8/a52ca89a511c12db1f7085af5603e2ca.jpg",
    tautan: "https://me.muz.li/pixcutstudiollc/homevia-responsive-real-estate-website-template-by-pixcut-studio-llc-2?",
    detail: "Website listing properti yang responsif: pencarian, daftar properti, dan halaman detail dengan informasi penting di bagian atas.",
    teknologi: ["Figma", "Wireframing", "Desain UI"],
  },
  {
    id: 5,
    kategori: "ecommerce",
    judul: "Proyek lima",
    ringkasan: "Seni berpakaian tanpa usaha",
    gambar: "https://i.pinimg.com/736x/c3/ab/6a/c3ab6aa3684b1d8b5302249d49f29300.jpg",
    tautan: "",
    detail: "Toko pakaian online dengan tampilan bersih yang menonjolkan foto produk, filter sederhana, dan alur pembelian singkat.",
    teknologi: ["Figma", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    kategori: "business",
    judul: "Proyek enam",
    ringkasan: "Website agensi",
    gambar: "https://i.pinimg.com/736x/ef/6a/6f/ef6a6fe7e522f28e6b2fb5874d849483.jpg",
    tautan: "",
    detail: "Website agensi yang memperkenalkan layanan, menampilkan karya, dan mengarahkan pengunjung ke formulir kontak.",
    teknologi: ["Figma", "HTML", "CSS", "Bootstrap"],
  },
];

const kelompokSkill = [
  {
    judul: "Front-end", subjudul: "Membangun antarmuka", ikon: "fa-solid fa-laptop-code",
    isi: [
      { nama: "HTML", persen: 90, ikon: "fa-brands fa-html5" },
      { nama: "CSS", persen: 85, ikon: "fa-brands fa-css3-alt" },
      { nama: "JavaScript", persen: 70, ikon: "fa-brands fa-js" },
      { nama: "Bootstrap", persen: 85, ikon: "fa-brands fa-bootstrap" },
    ],
  },
  {
    judul: "Desain", subjudul: "Perencanaan dan prototipe", ikon: "fa-solid fa-pen-ruler",
    isi: [
      { nama: "Figma", persen: 80, ikon: "fa-brands fa-figma" },
      { nama: "Wireframing", persen: 85, ikon: "fa-solid fa-object-group" },
      { nama: "Prototyping", persen: 75, ikon: "fa-solid fa-hand-pointer" },
      { nama: "Desain UI", persen: 80, ikon: "fa-solid fa-swatchbook" },
    ],
  },
  {
    judul: "Pemrograman", subjudul: "Bahasa dan alat", ikon: "fa-solid fa-terminal",
    isi: [
      { nama: "C", persen: 80, ikon: "fa-solid fa-microchip" },
      { nama: "C++", persen: 70, ikon: "fa-solid fa-code" },
      { nama: "Git", persen: 70, ikon: "fa-brands fa-git-alt" },
      { nama: "Command line", persen: 65, ikon: "fa-solid fa-terminal" },
    ],
  },
];

const pengalaman = [
  { periode: "2022 - 2023", judul: "Front-End Developer", tempat: "PT Hooki.id Software House" },
  { periode: "Juli - September 2023", judul: "Sekre Karta", tempat: "KarTa Soreang" },
];

const pendidikan = [
  { periode: "2024 - sekarang", judul: "Teknik Informatika", tempat: "STT Pratama Adi" },
  { periode: "2021 - 2024", judul: "Rekayasa Perangkat Lunak", tempat: "SMK Yadika Soreang" },
];

// ===== BANTUAN =====

const html = document.documentElement;
// true kalau pengguna mengaktifkan "kurangi animasi" di perangkatnya
const kurangiAnimasi = matchMedia("(prefers-reduced-motion: reduce)").matches;

// ===== MODE GELAP / TERANG =====

const tombolTema = document.getElementById("themeToggle");

function ubahTema(tema, simpan) {
  const gelap = tema === "dark";
  html.setAttribute("data-theme", tema);
  html.setAttribute("data-bs-theme", tema);
  tombolTema.setAttribute("aria-pressed", gelap);
  tombolTema.setAttribute("aria-label", gelap ? "Ganti ke mode terang" : "Ganti ke mode gelap");
  tombolTema.querySelector("i").className = gelap ? "fa-solid fa-sun" : "fa-solid fa-moon";
  if (simpan) {
    try {
      localStorage.setItem("theme", tema);
    } catch (e) {
      // penyimpanan diblokir browser, tema tetap berubah tapi tidak diingat
    }
  }
}

// tema awal sudah dipasang oleh skrip kecil di <head>, di sini tinggal menyamakan ikon tombol
ubahTema(html.getAttribute("data-theme"), false);

tombolTema.addEventListener("click", function () {
  const temaBaru = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  ubahTema(temaBaru, true);
});

// ===== SAPAAN SESUAI JAM =====

const teksSapaan = document.getElementById("greeting");
if (teksSapaan) {
  const jam = new Date().getHours();
  if (jam < 11) {
    teksSapaan.textContent = "Selamat pagi";
  } else if (jam < 15) {
    teksSapaan.textContent = "Selamat siang";
  } else if (jam < 18) {
    teksSapaan.textContent = "Selamat sore";
  } else {
    teksSapaan.textContent = "Selamat malam";
  }
}

// ===== EFEK MENGETIK =====

const teksKetik = document.getElementById("typed");
if (teksKetik) {
  teksKetik.textContent = kataTagline[0];

  // kalau "kurangi animasi" aktif, teks dibiarkan diam
  if (!kurangiAnimasi) {
    let kata = 0;
    let huruf = 0;
    let menghapus = false;

    function ketik() {
      const kataSekarang = kataTagline[kata];
      huruf = menghapus ? huruf - 1 : huruf + 1;
      teksKetik.textContent = kataSekarang.slice(0, huruf);

      let jeda = menghapus ? 40 : 90;
      if (!menghapus && huruf === kataSekarang.length) {
        menghapus = true;
        jeda = 1600; // diam sebentar setelah kata selesai diketik
      } else if (menghapus && huruf === 0) {
        menghapus = false;
        kata = (kata + 1) % kataTagline.length;
        jeda = 400;
      }
      setTimeout(ketik, jeda);
    }
    ketik();
  }
}

// ===== SKILL, PENGALAMAN, PENDIDIKAN (dibuat dari array) =====

const wadahSkill = document.getElementById("skillList");
if (wadahSkill) {
  let isi = "";
  kelompokSkill.forEach(function (kelompok) {
    let barisSkill = "";
    kelompok.isi.forEach(function (s) {
      barisSkill += `
        <div class="skill">
          <span class="skill-icon"><i class="${s.ikon}"></i></span>
          <div class="skill-top">
            <span class="skill-name">${s.nama}</span>
            <span class="skill-pct">${s.persen}%</span>
          </div>
          <div class="bar" role="progressbar" aria-label="${s.nama}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${s.persen}">
            <span style="--level: ${s.persen}%"></span>
          </div>
        </div>`;
    });

    isi += `
      <div class="col-lg-4 col-md-6">
        <div class="skill-panel">
          <div class="skill-panel-head">
            <span class="icon"><i class="${kelompok.ikon}"></i></span>
            <div><h3>${kelompok.judul}</h3><small>${kelompok.subjudul}</small></div>
          </div>
          ${barisSkill}
        </div>
      </div>`;
  });
  wadahSkill.innerHTML = isi;
}

function tampilkanTimeline(idElemen, data) {
  const daftar = document.getElementById(idElemen);
  if (!daftar) return;
  let isi = "";
  data.forEach(function (item) {
    isi += `<li>
      <span class="tl-period">${item.periode}</span>
      <h3>${item.judul}</h3>
      <p class="tl-place">${item.tempat}</p>
    </li>`;
  });
  daftar.innerHTML = isi;
}
tampilkanTimeline("experienceList", pengalaman);
tampilkanTimeline("educationList", pendidikan);

// ===== COUNTER ANGKA =====
// Angkanya dihitung dari data di atas, jadi ikut berubah kalau datanya berubah.

function hitungTotalSkill() {
  let total = 0;
  kelompokSkill.forEach(function (k) {
    total += k.isi.length;
  });
  return total;
}

const targetCounter = {
  projects: daftarProyek.length,
  categories: Object.keys(namaKategori).length,
  skills: hitungTotalSkill(),
};

function jalankanCounter(elemen, target) {
  const mulai = performance.now();
  function langkah(sekarang) {
    const progres = Math.min((sekarang - mulai) / 1200, 1);
    // dibuat melambat di akhir supaya angka terasa "mendarat"
    elemen.textContent = Math.round(target * (1 - Math.pow(1 - progres, 3)));
    if (progres < 1) requestAnimationFrame(langkah);
  }
  requestAnimationFrame(langkah);
}

document.querySelectorAll("[data-stat]").forEach(function (elemen) {
  const target = targetCounter[elemen.dataset.stat];
  elemen.textContent = target;
  if (kurangiAnimasi) return;

  elemen.textContent = "0";
  const pengamat = new IntersectionObserver(function (daftarEntri) {
    if (daftarEntri[0].isIntersecting) {
      jalankanCounter(elemen, target);
      pengamat.disconnect();
    }
  }, { threshold: 0.6 });
  pengamat.observe(elemen);
});

// ===== KARYA: KARTU, FILTER, PENCARIAN, MODAL =====

function buatKartu(p) {
  return `
    <div class="col-lg-4 col-md-6 work-item reveal" data-category="${p.kategori}">
      <a href="#" data-id="${p.id}" aria-haspopup="dialog" aria-label="Lihat detail ${p.judul}: ${p.ringkasan}">
        <div class="ph ph-wide" data-label="Proyek ${p.id}">
          <img src="${p.gambar}" alt="${p.judul}: ${p.ringkasan}" loading="lazy" onerror="this.remove()" />
        </div>
        <h3>${p.judul}</h3>
        <p>${p.ringkasan}</p>
      </a>
    </div>`;
}

// kartu dimunculkan satu-satu dengan jeda 80 ms
function munculkanKartu(wadah) {
  wadah.querySelectorAll(".work-item").forEach(function (kartu, i) {
    kartu.style.setProperty("--d", i * 80 + "ms");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        kartu.classList.add("in");
      });
    });
  });
}

const modalKarya = document.getElementById("projectModal");

function bukaModal(id) {
  const p = daftarProyek.find(function (x) {
    return x.id === id;
  });
  if (!p || !modalKarya) return;

  document.getElementById("projectModalTitle").textContent = p.judul;
  document.getElementById("modalCat").textContent = namaKategori[p.kategori];
  document.getElementById("modalDetail").textContent = p.detail;
  document.getElementById("modalTech").innerHTML = p.teknologi
    .map(function (t) {
      return "<li>" + t + "</li>";
    })
    .join("");
  document.getElementById("modalPh").innerHTML =
    `<img src="${p.gambar}" alt="${p.judul}: ${p.ringkasan}" onerror="this.remove()" />`;

  const tombolSumber = document.getElementById("modalLink");
  tombolSumber.hidden = !p.tautan;
  if (p.tautan) tombolSumber.href = p.tautan;

  // keterangan sumber gambar dan tautan
  const sumber = [];
  if (p.gambar.includes("pinimg.com")) sumber.push("Gambar: Pinterest");
  if (p.tautan) sumber.push("Sumber: " + new URL(p.tautan).hostname.replace("www.", ""));
  document.getElementById("modalCredit").textContent = sumber.join(" | ");

  bootstrap.Modal.getOrCreateInstance(modalKarya).show();
}

// klik pada kartu membuka modal (dipakai di beranda dan halaman karya)
function aktifkanKlikKartu(wadah) {
  wadah.addEventListener("click", function (e) {
    const kartu = e.target.closest("a[data-id]");
    if (!kartu) return;
    e.preventDefault();
    bukaModal(Number(kartu.dataset.id));
  });
}

// beranda: tampilkan 3 karya pertama
const wadahUnggulan = document.getElementById("featuredGrid");
if (wadahUnggulan) {
  wadahUnggulan.innerHTML = daftarProyek.slice(0, 3).map(buatKartu).join("");
  munculkanKartu(wadahUnggulan);
  aktifkanKlikKartu(wadahUnggulan);
}

// halaman karya: semua karya + filter + pencarian
const wadahKarya = document.getElementById("projectGrid");
if (wadahKarya) {
  let kategoriAktif = "all";
  let kataCari = "";
  const tombolFilter = document.querySelectorAll(".filters button");

  function tampilkanKarya() {
    const hasil = daftarProyek.filter(function (p) {
      const cocokKategori = kategoriAktif === "all" || p.kategori === kategoriAktif;
      const teks = (p.judul + " " + p.ringkasan + " " + p.detail + " " + namaKategori[p.kategori] + " " + p.teknologi.join(" ")).toLowerCase();
      return cocokKategori && teks.includes(kataCari);
    });

    wadahKarya.innerHTML = hasil.map(buatKartu).join("");
    munculkanKartu(wadahKarya);
    document.getElementById("workEmpty").hidden = hasil.length > 0;
    document.getElementById("workCount").textContent =
      "Menampilkan " + hasil.length + " dari " + daftarProyek.length + " karya";
  }

  tombolFilter.forEach(function (tombol) {
    tombol.addEventListener("click", function () {
      kategoriAktif = tombol.dataset.filter;
      tombolFilter.forEach(function (t) {
        t.setAttribute("aria-pressed", t === tombol);
      });
      tampilkanKarya();
    });
  });

  document.getElementById("workSearch").addEventListener("input", function (e) {
    kataCari = e.target.value.trim().toLowerCase();
    tampilkanKarya();
  });

  aktifkanKlikKartu(wadahKarya);
  tampilkanKarya();
}

// ===== FORM KONTAK =====

const formKontak = document.getElementById("contactForm");
if (formKontak) {
  const urlFormspree = "https://formspree.io/f/mljgawoo";
  const pesanStatus = document.getElementById("formStatus");

  // tiap aturan mengembalikan pesan error, atau "" kalau isiannya sudah benar
  const aturan = {
    name: function (nilai) {
      return nilai.trim().length < 3 ? "Nama minimal 3 karakter." : "";
    },
    email: function (nilai) {
      if (nilai.trim() === "") return "Email wajib diisi.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(nilai.trim())) {
        return "Format email belum benar, contoh: nama@email.com.";
      }
      return "";
    },
    type: function (nilai) {
      return nilai.trim().length < 5 ? "Ceritakan kebutuhan Anda, minimal 5 karakter." : "";
    },
    message: function (nilai) {
      const panjang = nilai.trim().length;
      return panjang < 10 ? "Detail proyek minimal 10 karakter (sekarang " + panjang + ")." : "";
    },
  };

  // periksa satu kolom, tampilkan atau hapus pesan errornya
  function periksa(idKolom) {
    const kolom = formKontak.elements[idKolom];
    const pesan = aturan[idKolom](kolom.value);
    document.getElementById(idKolom + "Error").textContent = pesan;
    kolom.classList.toggle("invalid", pesan !== "");
    kolom.setAttribute("aria-invalid", pesan !== "");
    kolom.setAttribute("aria-describedby", idKolom + "Error");
    return pesan === "";
  }

  Object.keys(aturan).forEach(function (idKolom) {
    const kolom = formKontak.elements[idKolom];
    kolom.addEventListener("blur", function () {
      periksa(idKolom);
    });
    // setelah kolom ditandai salah, pesannya hilang begitu isiannya diperbaiki
    kolom.addEventListener("input", function () {
      if (kolom.classList.contains("invalid")) periksa(idKolom);
    });
  });

  function tampilkanStatus(teks, jenis) {
    pesanStatus.textContent = teks;
    pesanStatus.className = "form-status " + jenis;
  }

  formKontak.addEventListener("submit", async function (e) {
    e.preventDefault();
    tampilkanStatus("", "");

    let semuaBenar = true;
    Object.keys(aturan).forEach(function (idKolom) {
      if (!periksa(idKolom)) semuaBenar = false;
    });
    if (!semuaBenar) {
      formKontak.querySelector(".invalid").focus();
      return;
    }

    const tombolKirim = formKontak.querySelector("button[type=submit]");
    tombolKirim.disabled = true;
    try {
      const respon = await fetch(urlFormspree, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(formKontak),
      });
      if (!respon.ok) throw new Error("gagal kirim");

      tampilkanStatus("Pesan sudah terkirim. Terima kasih, saya akan membalas dalam dua hari kerja.", "ok");
      formKontak.reset();
      Object.keys(aturan).forEach(function (idKolom) {
        const kolom = formKontak.elements[idKolom];
        kolom.classList.remove("invalid");
        kolom.removeAttribute("aria-invalid");
      });
    } catch (err) {
      tampilkanStatus("Pesan gagal dikirim. Periksa koneksi lalu coba lagi.", "fail");
    }
    tombolKirim.disabled = false;
  });
}

// ===== ANIMASI MUNCUL SAAT SCROLL =====

if ("IntersectionObserver" in window && !kurangiAnimasi) {
  const elemenAnimasi = document.querySelectorAll(
    [
      ".hero .col-lg-7 > *",
      ".hero .portrait-wrap",
      ".section-head",
      "#about .about-photo",
      "#about .col-lg-7 > :not(.section-head)",
      ".featured-more",
      ".filters",
      ".work-search",
      "#skills .row > div",
      "#journey .col-lg-6 > :not(.section-head)",
      ".contact .col-lg-5 > *",
      ".form-card",
      ".site-footer .row > div",
      ".footer-bottom",
    ].join(",")
  );

  // class "reveal-ready" baru dipasang di sini, jadi kalau JS mati elemen tetap terlihat
  html.classList.add("reveal-ready");

  const pengamat = new IntersectionObserver(
    function (daftarEntri) {
      daftarEntri.forEach(function (entri) {
        if (entri.intersectionRatio >= 0.12) {
          entri.target.classList.add("in");
        } else if (entri.intersectionRatio === 0) {
          entri.target.classList.remove("in");
        }
      });
    },
    { threshold: [0, 0.12] }
  );

  elemenAnimasi.forEach(function (el) {
    el.classList.add("reveal");
    // jeda bertahap berdasarkan urutan elemen di dalam induknya (maksimal 5 langkah)
    const urutan = Array.prototype.indexOf.call(el.parentElement.children, el);
    el.style.setProperty("--d", Math.min(urutan, 5) * 90 + "ms");
  });

  // dua requestAnimationFrame supaya posisi awal (tersembunyi) sempat digambar dulu
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      elemenAnimasi.forEach(function (el) {
        pengamat.observe(el);
      });
    });
  });
}

// ===== TAHUN DI FOOTER =====

const teksTahun = document.getElementById("year");
if (teksTahun) teksTahun.textContent = new Date().getFullYear();
