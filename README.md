# Business Model You — Personal Canvas Architect & Visualizer

Aplikasi web mandiri berbasis peramban (*client-side only*) untuk merancang, memetakan, mengedit secara langsung, dan mengekspor 9 blok kerangka kerja **Business Model You** (Personal Business Model Canvas karya Tim Clark & Alexander Osterwalder).

Aplikasi ini dirancang dengan estetika minimalis modern (*Swiss Design / Clean SaaS Workspace*), tipografi sans-serif kontras tinggi, penataan ruang presisi, dukungan dwibahasa (**ID / EN**), serta ekspor dokumen berstandar profesional.

* **Live Demo**: [https://bmy-generator.netlify.app/](https://bmy-generator.netlify.app/)
* **Repository**: [https://github.com/ixlumine/bmy-generator](https://github.com/ixlumine/bmy-generator)

---

## Fitur Utama

### 1. Interaksi Kanvas Langsung (Directly Edit)
* **Inline Canvas Editing**: Klik langsung teks pada kartu kanvas preview untuk mengubah nama, posisi, dan butir poin tanpa harus berpindah ke panel form.
* **Keyboard Flow**: Tekan `Enter` untuk membuat butir poin baru di bawahnya, dan tekan `Backspace` pada butir kosong untuk menghapusnya.
* **Two-Way Synchronization**: Setiap ketikan di kanvas tersinkronisasi dua arah ke formulir di panel samping dan tersimpan otomatis ke `localStorage` peramban.

### 2. Arsitektur Reposisi Simetris (Dynamic Symmetry & Spacing)
* **9-Box Smart Simetris**: Mengatur proporsi lebar kolom secara dinamis dan simetris (`W_outer : W_stack : W_center : W_stack : W_outer`). Kolom tengah melebar proporsional saat kolom samping memiliki sedikit teks, menjaga keseimbangan tinggi kanvas tanpa celah kosong menganga.
* **Bento Simetris (3-4-2)**: Alternatif susunan piramida bertingkat (Baris 1: 3 Pilar Utama; Baris 2: 4 Blok Operasional; Baris 3: 2 Blok Finansial).
* **Klasik (Equal)**: Format 5 kolom sama lebar tradisional.
* **Kontrol Jarak Antar Poin**: Pilihan jarak butir (*Dekat / Tight*, *Normal*, *Lega / Relaxed*, dan *Merata / Even*) yang tersusun rapat dari atas.
* **Format Horizontal Cost & Revenue**: Poin pada blok *08 Cost Structure* dan *09 Revenue Streams* otomatis berjajar ke samping memanfaatkan ruang lebar kartu.

### 3. Rasio Halaman Presisi (Page Ratio)
* **Auto Fit**: Tinggi kanvas merapat otomatis mengikuti panjang teks tanpa ada sisa ruang kosong.
* **A4 Landscape (297:210)**: Mengunci proporsi kanvas persis format cetak kertas dokumen.
* **16:9 Widescreen**: Format presentasi slide monitor modern.
* **4:3 Standard Board**: Format papan strategi klasik.

### 4. Panggung Interaktif (Pan & Zoom Workspace)
* **Pan & Drag**: Klik-tarik latar panggung atau tahan `Spacebar` + drag untuk menggeser kanvas leluasa.
* **Zooming**: Tombol kontrol zoom, pintasan `Ctrl` + *scroll wheel*, atau gesture *pinch* trackpad.
* **Resizable & Collapsible Sidebar**: Lebar panel form kiri dapat diubah ukurannya (*drag handle*) atau disembunyikan (*collapse*) untuk area kerja penuh.

### 5. Sistem Ekspor Berstandar Produksi
* **Native Browser Print (Vector PDF A4 Landscape)**:
  Memanfaatkan dialog cetak sistem operasi (`window.print()`) dan aturan `@media print` terisolasi. Hanya kanvas yang dicetak, teks 100% merupakan vektor murni yang tajam, dapat diblok/diseleksi, dan dicari (`Ctrl + F`) secara instan.
* **Export PNG Resolusi Tinggi (3x Scale)**:
  Menghasilkan gambar resolusi tinggi tanpa artefak antarmuka editor via `html-to-image`.
* **Backup & Restore JSON**:
  Unduh seluruh state profil dan pengaturan visual menjadi file `.json` atau unggah kembali kapan saja.

### 6. Dukungan Dwibahasa (ID / EN)
* Tombol pengalih bahasa instan di navbar atas (**ID | EN**).
* Menerjemahkan seluruh antarmuka, label, subjudul blok 01–09, modal panduan, hingga data sampel kanvas.

---

## Struktur Proyek

```text
bmy-generator/
├── index.html        # Kerangka HTML5, SEO meta tags, SVG icons, schema.org JSON-LD
├── style.css         # Styling CSS murni, CSS Variables tema, grid simetris, @media print
├── app.js            # Engine JavaScript Vanilla (Pan/Zoom, Direct Edit, Layout, I18n, Storage)
├── og-image.png      # Gambar preview Open Graph sosial media (1200 x 630 px)
├── robots.txt        # Izin indexing untuk bot mesin pencari
├── sitemap.xml       # Peta situs URL untuk Google Search Console
├── _headers          # Konfigurasi security headers dan caching Netlify
└── README.md         # Dokumentasi teknis proyek