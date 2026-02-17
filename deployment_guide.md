# Panduan Build & Deploy ke InfinityFree

Panduan ini menjelaskan langkah-langkah untuk melakukan build aplikasi (Laravel + React) dan mendeploy-nya ke layanan hosting InfinityFree.

## 1. Persiapan Build Lokal

Sebelum mengupload, kita perlu menyiapkan file "build" dari aplikasi web kita.

### Backend (Laravel)
Pastikan dependensi PHP sudah siap (biasanya kita upload folder `vendor` dari lokal jika hosting tidak support composer, atau run composer di server jika support). Untuk InfinityFree, sebaiknya run di lokal lalu upload.

1.  Jalankan perintah berikut di terminal proyek Anda:
    ```bash
    composer install --optimize-autoloader --no-dev
    ```
    *Note: Ini akan menginstall library PHP yang dibutuhkan untuk produksi.*

2.  Pastikan file `.env` sudah siap (kita akan buat baru di hosting, tapi pastikan Anda tahu setting database-nya).

### Frontend (React/Vite)
Kita perlu mengubah kode React menjadi file statis (HTML/JS/CSS) agar bisa dibaca browser.

1.  Jalankan perintah build Vite:
    ```bash
    npm run build
    ```
    *Perintah ini akan membuat folder `public/build` berisi asset CSS dan JS.*

## 2. Struktur Folder Hosting

InfinityFree menggunakan struktur folder standar:
*   `htdocs` (ini adalah folder `public` kita)

Namun, karena struktur Laravel menaruh file public di folder `public` dan core system di luar itu, kita perlu trik sedikit agar aman.

**Struktur yang Disarankan di File Manager InfinityFree:**

```text
/ (Root Directory)
├── budaya_madura_core/    <-- (Buat folder baru ini, upload SEMUA file Laravel KECUALI folder public)
│   ├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── database/
│   ├── resources/
│   ├── routes/
│   ├── storage/
│   ├── vendor/
│   ├── .env
│   ├── artisan
│   └── ... (file lain di root project)
│
└── htdocs/                <-- (Ini adalah folder public dari Laravel)
    ├── build/             <-- (Hasil npm run build)
    ├── images/
    ├── index.php          <-- (Perlu diedit, lihat langkah 3)
    ├── .htaccess
    └── ... (file lain dari folder public)
```

## 3. Langkah Upload dan Konfigurasi

### Langkah 1: Upload File
1.  Buka File Manager atau gunakan FTP (FileZilla) ke akun InfinityFree Anda.
2.  Buat folder baru sejajar dengan `htdocs`, beri nama misal `budaya_madura_core`.
3.  **Upload Core**: Upload semua file project Anda ke dalam `budaya_madura_core`, **KECUALI** folder `public`, `node_modules`, dan `.git`.
4.  **Upload Public**: Buka folder `htdocs` di hosting (hapus file default/index2.php jika ada). Upload **ISI** dari folder `public` project lokal Anda ke dalam `htdocs`.

### Langkah 2: Edit `index.php`
Karena kita memisahkan folder `public` (sekarang `htdocs`) dengan core system, kita perlu memberitahu `index.php` dimana lokasi `autoload.php` dan `app.php`.

1.  Edit file `htdocs/index.php`.
2.  Cari baris yang memuat `vendor/autoload.php` dan `bootstrap/app.php`.
3.  Ubah path-nya menjadi mengarah ke folder core yang kita buat:

```php
// Sesuaikan path ini
require __DIR__.'/../budaya_madura_core/vendor/autoload.php';

// ...

$app = require __DIR__.'/../budaya_madura_core/bootstrap/app.php';
```

### Langkah 3: Konfigurasi `.env`
1.  Masuk ke folder `budaya_madura_core`.
2.  Cari file `.env.example`, rename menjadi `.env` (atau buat file baru bernama `.env`).
3.  Isi konfigurasi sesuai database InfinityFree (Anda perlu buat Database dulu di Control Panel InfinityFree >> MySQL Databases).

```env
APP_NAME=BudayaMadura
APP_ENV=production
APP_DEBUG=false
APP_URL=http://nama-domain-anda.rf.gd (sesuaikan)

DB_CONNECTION=mysql
DB_HOST=sqlxxx.infinityfree.com (lihat di panel)
DB_PORT=3306
DB_DATABASE=if0_xxxxxxx_db_name (lihat di panel)
DB_USERNAME=if0_xxxxxxx (lihat di panel)
DB_PASSWORD=password_akun_vpanel

FILESYSTEM_DISK=public
```

### Langkah 4: Symlink Storage (Penting untuk Gambar)
Di shared hosting seperti InfinityFree, kita sering tidak bisa menjalankan command `php artisan storage:link`.
Cara manual:
1.  Hapus folder `htdocs/storage` jika ada.
2.  Di komputer lokal, buat folder `storage` di dalam `public`. Isi dengan file yang sama dengan `storage/app/public` jika ada file bawaan.
3.  Jika ingin upload gambar berfungsi, pastikan config `filesystems.php` menggunakan `'root' => public_path('storage')` atau atur manual path uploadnya karena symlink mungkin tidak jalan.
    *   *Alternatif Mudah:* Ubah config `filesystems.php` disk `public` drivernya dari `local` menjadi `public_uploads` (custom build) atau pastikan upload langsung diarahkan ke `public/images` bukan `storage`.

## 4. Troubleshooting Umum

*   **Error 500 / Blank Page**:
    *   Cek permission folder `budaya_madura_core/storage`. Set permission ke `777` (Read/Write/Execute) agar Laravel bisa menulis log dan session.
    *   Pastikan `.env` sudah benar password databasenya.
    *   Pastikan versi PHP di InfinityFree sesuai dengan `composer.json` (Minimal PHP 8.1/8.2). Atur di Control Panel >> Select PHP Version.

*   **Vite Manifest Error**:
    *   Pastikan folder `htdocs/build` ter-upload dengan benar.
    *   Pastikan file `htdocs/build/manifest.json` ada.

Selamat mencoba deploy! 🚀
