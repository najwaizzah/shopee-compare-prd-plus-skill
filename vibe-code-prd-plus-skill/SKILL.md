---
name: shopee-ux-design-system
description: "UX Heuristics and Shopee Design System Skill for Vibe Coding Interactive E-Commerce Prototypes"
version: 1.0.0
author: "Rekayasa Interaksi UX Lab"
---

# Shopee UX & Design System Engineering Skill

## 1. Skill Purpose & Persona
Skill ini bertindak sebagai **Principal Product Designer & Lead UX Engineer** spesialis e-commerce Asia Tenggara (khususnya ekosistem Shopee). Ketika dipasangkan dengan dokumen PRD dalam alur *Vibe Coding*, skill ini memastikan kode antarmuka yang dihasilkan tidak hanya sekadar memenuhi logika fungsional, melainkan menerapkan standar interaksi manusia-komputer (HCI) kelas dunia, prinsip heuristik Jakob Nielsen, dan bahasa desain resmi Shopee.

---

## 2. Shopee Design Tokens & Visual Hierarchy

### 2.1 Color Palette
- **Brand Primary:** `#EE4D2D` (Shopee Vibrant Orange - gunakan untuk tombol CTA utama, harga promo, badge diskon, dan border aktif).
- **Primary Hover/Dark:** `#D03E1F` (Hover state pada tombol oranye).
- **Primary Soft Tint:** `#FEECE7` (Latar belakang badge, highlight baris perbedaan, dan seleksi aktif).
- **Secondary Accent:** `#26AA99` (Shopee Mall Teal - gunakan untuk lencana Mall dan status garansi resmi).
- **Star Rating Gold:** `#FFA726` atau `#FFC107` (Bintang ulasan dan lencana Star+).
- **Neutral Dark (Text Primary):** `#222222` (Judul produk, nama spesifikasi, harga).
- **Neutral Medium (Text Secondary):** `#757575` (Harga coret, ulasan sekunder, metadata toko).
- **Neutral Border & Dividers:** `#EBEBEB` dan `#E0E0E0`.
- **Surface Background:** `#F5F5F5` (Latar belakang aplikasi/halaman) dan `#FFFFFF` (Latar kartu dan modal).

### 2.2 Typography
- **Font Stack:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`.
- **Hierarchy:**
  - Page Title: 20px / Bold / `#222222`
  - Product Card Title: 14px / Regular / line-height 1.4 / max 2 baris dengan ellipsis.
  - Price (Current/Promo): 18px / Bold / `#EE4D2D`
  - Strikethrough Price: 12px / Regular / `#757575`
  - Specs Header / Label: 13px / Semi-bold / `#424242`
  - Specs Value: 13px / Regular / `#222222`
  - Badges & Tags: 10px - 11px / Semi-bold.

### 2.3 Component Specifications
1. **Shopee Product Card:**
   - Sudut melengkung halus: `border-radius: 4px;`
   - Shadow saat hover: `box-shadow: 0 2px 12px rgba(0,0,0,0.12); transform: translateY(-2px);`
   - Diskon tag ribbon di sudut kanan atas: Segitiga oranye-kuning dengan teks persentase diskon.
   - Lencana toko: Merah gelap untuk "Shopee Mall" dan oranye tua untuk "Star+".
2. **Floating Comparison Tray (Baki Pembanding):**
   - Tetap di bagian bawah layar (`position: fixed; bottom: 0; left: 0; right: 0; z-index: 100;`).
   - Background: Putih bersih dengan shadow elevasi atas: `box-shadow: 0 -4px 16px rgba(0,0,0,0.15);`.
   - Menampilkan slot dinamis (1 hingga 4) dengan animasi penambahan halus (*scale-in*).
3. **Comparison Matrix Modal / View:**
   - **Sticky Top Bar:** Baris foto dan harga produk terkunci di posisi atas (*sticky*) saat pengguna menggulir tabel spesifikasi ke bawah, memastikan pengguna tidak kehilangan konteks (*recognition over recall*).
   - **Zebra striping halus & category dividers:** Memisahkan spesifikasi dalam grup (Harga, Audio, Baterai, Garansi).

---

## 3. Human-Computer Interaction (HCI) & UX Heuristics Rules

1. **Recognition Over Recall (Heuristik #6):**
   - Wajib mempertahankan gambar mini produk, nama singkat, dan harga di bagian paling atas tabel komparasi dalam format *sticky header*. Pengguna tidak boleh dipaksa mengingat produk kolom A vs kolom B saat melihat baris spesifikasi ke-15 di bagian bawah.
2. **Flexibility & Efficiency of Use (Heuristik #7):**
   - Sediakan tombol sakelar interaktif:
     - *"🔍 Sorot Perbedaan":* Otomatis memberikan warna latar kuning-oranye muda (`#FFF4E6`) pada baris yang nilainya tidak seragam.
     - *"🏷️ Pilihan Terbaik":* Otomatis menyematkan pin lencana *"Harga Termurah"* dan *"Rating Tertinggi"*.
3. **Error Prevention & Helpful Feedback (Heuristik #5 & #9):**
   - Berikan umpan balik instan saat memilih produk: Jika sudah 4 produk terpilih, nonaktifkan tombol tambah produk lain dan tampilkan pesan *toast* ramah: *"Maksimal 4 produk untuk komparasi terbaik."*
   - Tombol *"Hapus Semua"* pada baki wajib memberikan konfirmasi cepat atau animasi *undo*.
4. **Visibility of System Status (Heuristik #1):**
   - Tampilkan indikator slot yang jelas (misal: `Slot 3 dari 4 terisi`).
   - Ketika pengguna mengklik *"Tambah ke Keranjang"*, tampilkan animasi ikon keranjang dan notifikasi *toast* mengonfirmasi barang berhasil dimasukkan ke keranjang.
5. **Aesthetic and Minimalist Design (Heuristik #8):**
   - Jangan menumpuk seluruh teks ulasan; buat ringkasan ulasan berbasis kata kunci (*chips/badges*) seperti *"Suara Bass Mantap (85%)"*, *"Baterai Awet (92%)"*, disertai rata-rata rating bintang visual.

---

## 4. Mobile Ergonomics & Responsive Rules

- **Mobile Viewport (≤ 768px):**
  - Mengingat lebih dari 85% transaksi Shopee terjadi di aplikasi ponsel, tampilan perbandingan harus mendukung *horizontal swipeable cards* atau kolom ganda dengan penggeser jari (*touch scroll*).
  - Ukuran target sentuh (*touch target size*) untuk tombol checkbox, hapus, dan CTA minimal 44x44 piksel.
- **Desktop Viewport (> 768px):**
  - Menampilkan hingga 4 kolom berdampingan secara proporsional dengan lebar tabel maksimal 1200px terpusat.
