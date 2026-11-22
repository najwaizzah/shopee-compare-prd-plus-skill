# CHANGELOG - Shopee Smart Product Comparison (PRD + UX Skill)
Semua pembaruan, optimasi Heuristik Usability, dan evolusi desain dari versi *PRD-only* menuju *PRD + Skill* dicatat secara terperinci di sini.

---

## [2.0.0] - 2026-11-22
### Ditambahkan (Added)
- `skill(ux)`: Integrasi berkas `SKILL.md` (Shopee UX & Design System Engineering Skill) yang mencakup token warna resmi, hierarki tipografi Inter, dan 10 prinsip Heuristik Jakob Nielsen.
- `feat(design-system)`: Implementasi token visual otentik Shopee:
  - Header gradasi oranye `#EE4D2D` dengan pencarian pintar, kata kunci populer, dan profil pengguna.
  - Kartu produk beresolusi 1:1 dengan lencana *Shopee Mall*, *Star+*, diskon ribbon `-46%`, dan *Gratis Ongkir XTRA*.
- `feat(sticky-header)`: **Sticky Comparison Table Header** (Heuristik #6: Recognition over Recall). Baris gambar, judul, harga, dan tombol CTA tetap terkunci di bagian atas layar saat pengguna menggulir tabel spesifikasi yang panjang.
- `feat(smart-diff)`: **Fitur "Sorot Perbedaan"** (*Smart Difference Highlighting*) dengan algoritma JavaScript *Set-based comparison* yang otomatis mewarnai baris yang memiliki nilai berbeda antar produk dengan latar oranye lembut `#FFF6E8`.
- `feat(smart-filter)`: **Fitur "Sembunyikan Baris Sama"** (*Hide Identical Rows*) untuk menyaring spesifikasi seragam dan memangkas waktu evaluasi pengguna.
- `feat(best-value)`: **Lencana Rekomendasi Cerdas** (*Smart Best-Value Badges*) yang otomatis menyematkan pin visual pada:
  - 🏷️ *Harga Termurah* (Badge Hijau)
  - ⭐ *Rating Tertinggi* (Badge Emas)
  - 🔋 *Baterai Terlama* (Badge Biru)
- `feat(mobile-emulator)`: **Mode Pengalih Perangkat (📱 Mode HP / 💻 Mode Desktop)** untuk mensimulasikan ergonomi layar sentuh ponsel (414px) dengan layout adaptif.
- `feat(persistence)`: Penyimpanan status seleksi produk menggunakan `localStorage` agar pilihan pengguna tidak hilang saat memuat ulang halaman (*State Persistence*).
- `feat(micro-interactions)`:
  - Baki pembanding melayang (*Floating Dock*) dengan animasi pegas (*cubic-bezier*), kartu thumbnail interaktif, dan tombol hapus cepat per item.
  - Animasi pembesaran (*pulse*) pada badge keranjang saat barang ditambahkan.
  - Dialog modal *Quick Checkout (Beli Langsung)* dengan konfirmasi instan.

### Diubah (Changed)
- `refactor(architecture)`: Pemisahan arsitektur kode menjadi `index.html` (semantik), `style.css` (CSS variables & token sistem desain), dan `app.js` (kontroler reaktif & state management).
- `ux(error-handling)`: Mengganti dialog browser bawaan `alert()` yang kaku menjadi *Toast Notification* modern yang ramah pengguna (Heuristik #5 & #9).

### Ditingkatkan (Improved)
- `a11y(contrast)`: Kontras warna teks dan tombol memenuhi standar aksesibilitas WCAG 2.1 AA (rasio kontras > 4.5:1).
- `ux(touch-target)`: Ukuran target sentuh tombol interaktif disesuaikan minimal 44x44 piksel pada mode mobile.
