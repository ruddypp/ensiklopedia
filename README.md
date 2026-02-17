# E-Ensiklopedia Budaya Madura & Sains

Aplikasi ensiklopedia interaktif yang menggabungkan pembelajaran sains (IPA) dengan kearifan lokal budaya Madura untuk siswa sekolah dasar.

## 🚀 Fitur Utama

-   **Integrasi Sains & Budaya**: Materi pembelajaran yang menghubungkan konsep sains dengan tradisi lokal.
-   **Interaktif**: Dilengkapi dengan elemen multimedia dan kuis interaktif.
-   **Kamus Istilah (Glosarium)**: Pencarian cepat istilah sains dan budaya.
-   **Tampilan Ramah Anak**: Desain yang ceria, penuh warna, dan mudah digunakan.

## 🛠️ Teknologi yang Digunakan

-   **Backend**: [Laravel 11](https://laravel.com)
-   **Frontend**: [React.js](https://react.dev) + [Inertia.js](https://inertiajs.com)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com)
-   **Admin Panel**: [FilamentPHP](https://filamentphp.com)
-   **Build Tool**: [Vite](https://vitejs.dev)

## 📋 Persyaratan Sistem

Pastikan perangkat Anda sudah terinstall:

-   [PHP 8.2](https://www.php.net/downloads) atau lebih baru
-   [Composer](https://getcomposer.org/)
-   [Node.js](https://nodejs.org/) (LTS Version) & NPM
-   MySQL / MariaDB

## 📦 Cara Install & Menjalankan (Local)

Ikuti langkah-langkah berikut untuk menjalankan project di komputer lokal Anda:

### 1. Clone Repository
```bash
git clone https://github.com/username/budaya-madura.git
cd budaya-madura
```

### 2. Install Backend Dependencies (Laravel)
```bash
composer install
```

### 3. Install Frontend Dependencies (React)
```bash
npm install
```

### 4. Konfigurasi Environment
Salin file `.env.example` menjadi `.env` dan sesuaikan konfigurasi database Anda.
```bash
cp .env.example .env
php artisan key:generate
```
Edit file `.env` dan sesuaikan bagian database:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database_anda
DB_USERNAME=root
DB_PASSWORD=
```

### 5. Migrasi Database
Pastikan database sudah dibuat di MySQL, lalu jalankan:
```bash
php artisan migrate --seed
```

### 6. Jalankan Aplikasi
Buka dua terminal terpisah:

**Terminal 1 (Laravel Server):**
```bash
php artisan serve
```

**Terminal 2 (Vite Development):**
```bash
npm run dev
```

Akses aplikasi di: `http://localhost:8000`

## 🌐 Build & Deployment

Untuk panduan lengkap cara build aplikasi dan melakukan deployment ke layanan hosting (seperti InfinityFree), silakan baca panduan berikut:

👉 [Panduan Deployment (deployment_guide.md)](./deployment_guide.md)

---
Dibuat dengan ❤️ untuk pendidikan Indonesia.
