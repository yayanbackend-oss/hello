# Setup Project Backend - ElysiaJS + Drizzle + MySQL

Dokumen ini berisi langkah-langkah high-level untuk menginisiasi dan menyusun struktur awal project backend. Tugas ini ditujukan untuk diikuti dan diselesaikan secara bertahap.

## Teknologi yang Digunakan
- **Environment**: Node.js v18 (via nvm)
- **Runtime / Package Manager**: Bun
- **Web Framework**: ElysiaJS
- **ORM**: Drizzle ORM
- **Database**: MySQL 5.7
- **Basa Pemrograman**: JavaScript Murni (Vanilla JS) — **TIDAK MENGGUNAKAN TypeScript**

## Langkah-langkah Implementasi

### 1. Setup Environment dan Inisiasi Project
- Pastikan lingkungan terminal kamu menggunakan Node.js versi 18. Buat file `.nvmrc` yang memuat instruksi versi 18, dan jalankan `nvm use`.
- Inisiasi project dengan Bun. Jika inisiasi bawaan Bun mengarahkan ke pembuatan file berformat `.ts`, ubah dan pastikan semua file kode dan setting di `package.json` mengarah ke file `.js`.

### 2. Instalasi Dependency
Gunakan Bun (`bun add`) untuk menginstal beberapa kebutuhan utama:
- **Core Framework**: `elysia`
- **Database & Query Builder**: `drizzle-orm` serta driver database (misal: `mysql2`)
- **Development Tooling**: `drizzle-kit` (letakkan di `devDependencies`) untuk memfasilitasi migrasi database.

### 3. Konfigurasi Database (MySQL 5.7)
- Pastikan service MySQL 5.7 sudah berjalan secara lokal atau menggunakan container. Buat database baru khusus project ini.
- Susun file konfigurasi yang akan mengkoneksikan Drizzle ORM dengan database MySQL tersebut.
- Rancang skema database (misal `schema.js`) dengan setidaknya 1 buah tabel referensi untuk pengetesan awal.
- Setup file konfigurasi migrasi (`drizzle.config.js`) untuk mendefinisikan lokasi skema dan parameter koneksi.

### 4. Setup Main Server
- Di file utama aplikasi (misal `server.js` atau `index.js`), inisiasikan instance dari server **Elysia**.
- Integrasikan pool koneksi dari Drizzle ORM agar bisa digunakan oleh eksekusi di dalam route.
- Daftarkan minimal satu route test, misalnya route `GET /` yang memberikan response konfirmasi bahwa program telah berjalan baik.

### 5. Testing & Validation
- Jalankan server melalui Bun (`bun --watch index.js` atau command sejenis).
- Lakukan panggilan HTTP sederhana ke server. Uji route yang telah dibuat dan pastikan tidak ada error di log konsol.
- Pastikan jika ada migrasi database atau test query dari route tertentu, datanya berhasil diakses lewat MySQL.
