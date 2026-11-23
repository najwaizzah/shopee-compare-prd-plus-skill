# Shopee Smart Product Comparison (PRD + UX Skill Implementation)
> **Tugas Praktikum Rekayasa Interaksi (UX) - Worksheet 12: Wireframe & Prototype**  
> **Mahasiswa:** Najwah Awwalul Izzah  
> **Metode:** Vibe Coding Generatif berbasis *PRD + UX Design System Skill*

---

## 🌟 Ringkasan Proyek
Repositori ini menyajikan prototipe interaktif **Fitur Komparasi Produk Terintegrasi di Shopee** yang dikembangkan menggunakan teknik **Vibe Coding tingkat lanjut**. Berbeda dengan implementasi berbasis PRD standar, proses rekayasa antarmuka ini dipandu secara intensif oleh **UX & Design System Engineering Skill** (`SKILL.md`).

Hasilnya adalah prototipe dengan tingkat kesetiaan tinggi (*high-fidelity prototype*) yang tidak hanya memenuhi seluruh persyaratan fungsional (FR-01 s/d FR-06), tetapi juga menerapkan sistem desain otentik Shopee, kepatuhan heuristik Jakob Nielsen, dan ergonomi gawai *mobile-first*.

---

## 🎯 Peningkatan Utama UX berkat Penerapan "Skill"
Dibandingkan dengan versi *PRD Only*, penambahan panduan Skill menghasilkan lompatan kualitas antarmuka yang sangat signifikan:

1. **Recognition Over Recall (Nielsen Heuristic #6):**
   - Header matriks komparasi dirancang **Sticky (menempel di atas)** saat menggulir puluhan baris spesifikasi teknis. Pengguna tidak perlu mengingat produk kolom mana yang sedang diinspeksi.
2. **Flexibility & Efficiency of Use (Nielsen Heuristic #7):**
   - **Fitur "🔍 Sorot Perbedaan" (Highlight Differences):** Menggunakan algoritma deteksi perbedaan dinamis (*Set-based difference algorithm*) untuk menandai baris yang memiliki nilai berbeda antar produk dengan latar kuning-oranye lembut.
   - **Fitur "👁️ Sembunyikan Baris Sama":** Menyaring baris yang bernilai identik guna mempercepat proses pengambilan keputusan.
   - **Fitur "🏆 Nilai Terbaik (Smart Best-Value Badges)":** Otomatis menyematkan lencana visual untuk *Harga Termurah*, *Rating Tertinggi*, dan *Baterai Terlama*.
3. **Shopee Brand Tokens & Visual Hierarchy:**
   - Palet warna resmi Shopee (`#EE4D2D`, `#D0011B` untuk Mall, `#26AA99` untuk proteksi).
   - Tipografi terstruktur menggunakan *font family* `Inter` dengan hierarki teks yang tajam.
   - Komponen otentik: Lencana *Shopee Mall*, *Star+*, *Gratis Ongkir XTRA*, persentase diskon ribbon, dan rating bintang.
4. **Ergonomi Mobile & Simulator Sentuh:**
   - Dilengkapi tombol interaktif **📱 Mode HP / 💻 Mode Desktop** di bilah atas untuk menguji responsivitas gawai secara langsung.
5. **Micro-interactions & Error Prevention:**
   - Baki pembanding melayang (*Floating Dock*) dengan animasi halus, pratinjau thumbnail mini, dan tombol hapus cepat per item.
   - Sistem notifikasi *toast* interaktif dengan animasi konfirmasi visual.
   - Simulasi alur cepat *Beli Langsung (Instant Checkout)* dan *Tambah ke Keranjang*.
   - Menyimpan status produk terpilih secara persisten di peramban menggunakan `localStorage`.

---

## 📂 Struktur Berkas
```text
vibe-code-prd-plus-skill/
├── index.html       # Antarmuka web semantik lengkap (Katalog, Baki Melayang, Matriks Komparasi, Modal)
├── style.css        # Shopee Design System Tokens, Sticky Table, Transisi CSS3, & Mode Emulator
├── app.js           # Kontroler interaktif, state persistence, deteksi perbedaan otomatis, & keranjang
├── SKILL.md         # Panduan rekayasa UX, heuristik HCI, dan token desain yang memandu AI
└── README.md        # Dokumentasi teknis dan panduan evaluasi praktikum
