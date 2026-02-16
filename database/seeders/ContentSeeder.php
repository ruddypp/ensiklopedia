<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\ProductSection;
use App\Models\Glossary;
use Illuminate\Support\Str;

class ContentSeeder extends Seeder
{
    public function run(): void
    {
        // 1. GLOSSARY
        // Truncate to avoid duplicates if re-running without fresh
        Glossary::truncate();
        
        $glossaries = [
            ['title' => 'Aktivitas air', 'description' => 'Banyaknya air dalam makanan yang memengaruhi cepat rusak atau tidak.', 'category' => 'Sains'],
            ['title' => 'Amilopektin', 'description' => 'Zat dalam ketan yang membuatnya lengket.', 'category' => 'Sains'],
            ['title' => 'Aroma', 'description' => 'Bau khas dari suatu bahan.', 'category' => 'Sains'],
            ['title' => 'Asam amino', 'description' => 'Bagian kecil penyusun protein.', 'category' => 'Sains'],
            ['title' => 'Bahan fermentasi', 'description' => 'Bahan yang diolah melalui proses fermentasi.', 'category' => 'Sains'],
            ['title' => 'Batik', 'description' => 'Kain bergambar yang dibuat dengan cara khusus menggunakan lilin dan pewarna.', 'category' => 'Budaya'],
            ['title' => 'Beras ketan', 'description' => 'Beras yang lengket saat dimasak.', 'category' => 'Sains'],
            ['title' => 'Berpikir kritis', 'description' => 'Cara berpikir teliti untuk memahami dan menilai suatu hal.', 'category' => 'Umum'],
            ['title' => 'Budaya lokal', 'description' => 'Kebiasaan dan tradisi yang berasal dari daerah setempat.', 'category' => 'Budaya'],
            ['title' => 'Canting', 'description' => 'Alat kecil untuk menorehkan lilin pada kain batik.', 'category' => 'Budaya'],
            ['title' => 'Cair', 'description' => 'Bentuk benda yang dapat mengalir seperti air.', 'category' => 'Sains'],
            ['title' => 'Dampak lingkungan', 'description' => 'Pengaruh kegiatan manusia terhadap alam.', 'category' => 'Sains'],
            ['title' => 'Ekologi', 'description' => 'Ilmu tentang hubungan makhluk hidup dengan lingkungannya.', 'category' => 'Sains'],
            ['title' => 'Ekosistem', 'description' => 'Kesatuan makhluk hidup dan lingkungannya.', 'category' => 'Sains'],
            ['title' => 'Ekosistem laut', 'description' => 'Lingkungan hidup makhluk di laut.', 'category' => 'Sains'],
            ['title' => 'Energi panas', 'description' => 'Panas yang berasal dari matahari atau api.', 'category' => 'Sains'],
            ['title' => 'Etnosains', 'description' => 'Cara mempelajari sains melalui budaya dan kebiasaan masyarakat.', 'category' => 'Sains'],
            ['title' => 'Eksplorasi', 'description' => 'Kegiatan mencari dan mencoba pengetahuan baru.', 'category' => 'Umum'],
            ['title' => 'Fermentasi', 'description' => 'Proses perubahan bahan dengan bantuan mikroorganisme.', 'category' => 'Sains'],
            ['title' => 'Filter feeder', 'description' => 'Hewan yang makan dengan menyaring makanan dari air.', 'category' => 'Sains'],
            ['title' => 'Gelatinisasi', 'description' => 'Proses mengembangnya pati saat dipanaskan.', 'category' => 'Sains'],
            ['title' => 'Granula pati', 'description' => 'Butiran kecil pati dalam beras.', 'category' => 'Sains'],
            ['title' => 'Gula pereduksi', 'description' => 'Jenis gula yang mudah bereaksi saat dipanaskan.', 'category' => 'Sains'],
            ['title' => 'Habitat', 'description' => 'Tempat tinggal alami makhluk hidup.', 'category' => 'Sains'],
            ['title' => 'Higienis', 'description' => 'Bersih dan aman dari kuman.', 'category' => 'Kesehatan'],
            ['title' => 'Identitas budaya', 'description' => 'Ciri khas suatu daerah yang membedakannya dari daerah lain.', 'category' => 'Budaya'],
            ['title' => 'Interaktif', 'description' => 'Bersifat saling berhubungan dan melibatkan pengguna secara aktif.', 'category' => 'Umum'],
            ['title' => 'IPAS', 'description' => 'Mata pelajaran yang mempelajari alam dan kehidupan sosial.', 'category' => 'Pendidikan'],
            ['title' => 'Kadar air', 'description' => 'Banyaknya air yang terdapat dalam suatu bahan.', 'category' => 'Sains'],
            ['title' => 'Kaldu', 'description' => 'Air rebusan ikan atau daging yang berasa gurih.', 'category' => 'Kuliner'],
            ['title' => 'Kearifan lokal', 'description' => 'Pengetahuan dan kebiasaan baik yang diwariskan oleh masyarakat.', 'category' => 'Budaya'],
            ['title' => 'Keberlanjutan', 'description' => 'Keadaan yang tetap terjaga untuk masa depan.', 'category' => 'Lingkungan'],
            ['title' => 'Kelestarian', 'description' => 'Keadaan alam dan budaya tetap terjaga.', 'category' => 'Lingkungan'],
            ['title' => 'Kerang bambu', 'description' => 'Kerang panjang yang hidup di dalam pasir pantai.', 'category' => 'Sains'],
            ['title' => 'Keseimbangan lingkungan', 'description' => 'Keadaan alam yang terjaga agar tetap sehat.', 'category' => 'Lingkungan'],
            ['title' => 'Konsentrasi larutan', 'description' => 'Tingkat kepekatan suatu larutan.', 'category' => 'Sains'],
            ['title' => 'Konsistensi', 'description' => 'Tingkat kekentalan suatu bahan.', 'category' => 'Sains'],
            ['title' => 'Larutan', 'description' => 'Campuran zat yang menyatu dengan air.', 'category' => 'Sains'],
            ['title' => 'Lilin malam (lilin batik)', 'description' => 'Lilin panas untuk menutup bagian kain saat membatik.', 'category' => 'Budaya'],
            ['title' => 'Lorjuk', 'description' => 'Kerang bambu kecil yang hidup di pasir pantai.', 'category' => 'Sains'],
            ['title' => 'Maillard', 'description' => 'Proses perubahan warna dan aroma pada makanan saat dipanaskan.', 'category' => 'Sains'],
            ['title' => 'Malam (lilin batik)', 'description' => 'Lilin panas untuk menutup bagian kain saat membatik.', 'category' => 'Budaya'],
            ['title' => 'Mencanting', 'description' => 'Kegiatan menggambar motif batik dengan canting.', 'category' => 'Budaya'],
            ['title' => 'Melanoidin', 'description' => 'Zat pemberi warna cokelat pada makanan goreng.', 'category' => 'Sains'],
            ['title' => 'Mikroorganisme', 'description' => 'Makhluk hidup sangat kecil yang tidak terlihat mata.', 'category' => 'Sains'],
            ['title' => 'Mineral', 'description' => 'Zat penting untuk kesehatan tulang dan darah.', 'category' => 'Kesehatan'],
            ['title' => 'Mordan', 'description' => 'Zat untuk membantu warna menempel kuat pada kain.', 'category' => 'Sains'],
            ['title' => 'Motif', 'description' => 'Pola atau gambar hias pada kain batik.', 'category' => 'Budaya'],
            ['title' => 'Nutrisi', 'description' => 'Zat gizi yang dibutuhkan tubuh untuk tumbuh sehat.', 'category' => 'Kesehatan'],
            ['title' => 'Observasi', 'description' => 'Kegiatan mengamati dengan teliti.', 'category' => 'Sains'],
            ['title' => 'Omega-3', 'description' => 'Lemak baik untuk kesehatan jantung.', 'category' => 'Kesehatan'],
            ['title' => 'Padat', 'description' => 'Bentuk benda yang keras dan tidak mengalir.', 'category' => 'Sains'],
            ['title' => 'Panas matahari', 'description' => 'Energi panas dari sinar matahari.', 'category' => 'Sains'],
            ['title' => 'Pekat', 'description' => 'Keadaan cairan yang sangat kental.', 'category' => 'Sains'],
            ['title' => 'Pelestarian', 'description' => 'Usaha menjaga agar alam dan budaya tetap terawat.', 'category' => 'Lingkungan'],
            ['title' => 'Pelorodan', 'description' => 'Proses menghilangkan lilin dari kain batik dengan air panas.', 'category' => 'Budaya'],
            ['title' => 'Pemanasan', 'description' => 'Proses memberi panas pada bahan.', 'category' => 'Sains'],
            ['title' => 'Pemanfaatan bijak', 'description' => 'Menggunakan alam secara hemat dan tidak berlebihan.', 'category' => 'Lingkungan'],
            ['title' => 'Pengawetan alami', 'description' => 'Cara menjaga makanan agar awet tanpa bahan kimia.', 'category' => 'Sains'],
            ['title' => 'Pengeringan', 'description' => 'Proses mengurangi air dengan dijemur.', 'category' => 'Sains'],
            ['title' => 'Penggorengan', 'description' => 'Proses memasak dengan minyak panas.', 'category' => 'Kuliner'],
            ['title' => 'Penguapan', 'description' => 'Perubahan air menjadi uap karena panas.', 'category' => 'Sains'],
            ['title' => 'Penguapan air', 'description' => 'Perubahan air menjadi uap karena panas matahari.', 'category' => 'Sains'],
            ['title' => 'Penangkapan berkelanjutan', 'description' => 'Cara menangkap ikan tanpa merusak alam.', 'category' => 'Lingkungan'],
            ['title' => 'Penjemuran', 'description' => 'Mengeringkan bahan di bawah sinar matahari.', 'category' => 'Sains'],
            ['title' => 'Perubahan fisika', 'description' => 'Perubahan bentuk tanpa mengubah jenis zat.', 'category' => 'Sains'],
            ['title' => 'Perubahan sifat bahan', 'description' => 'Perubahan bentuk, warna, atau rasa bahan.', 'category' => 'Sains'],
            ['title' => 'Perubahan tekstur', 'description' => 'Perubahan rasa permukaan bahan.', 'category' => 'Sains'],
            ['title' => 'Perubahan wujud zat', 'description' => 'Perubahan bentuk benda, misalnya padat menjadi cair.', 'category' => 'Sains'],
            ['title' => 'Petis', 'description' => 'Bumbu kental dari olahan ikan atau udang.', 'category' => 'Kuliner'],
            ['title' => 'Pewarna alami', 'description' => 'Pewarna yang berasal dari tumbuhan atau bahan alam.', 'category' => 'Sains'],
            ['title' => 'Pewarna kimia', 'description' => 'Pewarna buatan dari bahan kimia.', 'category' => 'Sains'],
            ['title' => 'Pewarnaan', 'description' => 'Proses memberi warna pada kain.', 'category' => 'Budaya'],
            ['title' => 'Protein', 'description' => 'Zat gizi untuk pertumbuhan dan perbaikan tubuh.', 'category' => 'Kesehatan'],
            ['title' => 'Reaksi biologis', 'description' => 'Perubahan bahan karena kerja makhluk hidup kecil.', 'category' => 'Sains'],
            ['title' => 'Reaksi kimia', 'description' => 'Perubahan zat karena proses pemanasan atau pencampuran.', 'category' => 'Sains'],
            ['title' => 'Reaksi Maillard', 'description' => 'Perubahan warna dan aroma saat makanan digoreng.', 'category' => 'Sains'],
            ['title' => 'Rengginang', 'description' => 'Makanan ringan dari beras ketan yang digoreng.', 'category' => 'Kuliner'],
            ['title' => 'Reversibel', 'description' => 'Perubahan yang dapat kembali seperti semula.', 'category' => 'Sains'],
            ['title' => 'Sifat benda', 'description' => 'Ciri khas suatu benda, seperti keras atau lunak.', 'category' => 'Sains'],
            ['title' => 'Sikap ilmiah', 'description' => 'Sikap teliti, jujur, dan ingin tahu dalam belajar.', 'category' => 'Pendidikan'],
            ['title' => 'Siklus hidup', 'description' => 'Tahapan kehidupan makhluk hidup dari kecil sampai dewasa.', 'category' => 'Sains'],
            ['title' => 'Sumber daya alam', 'description' => 'Segala sesuatu dari alam yang dapat dimanfaatkan manusia.', 'category' => 'Lingkungan'],
            ['title' => 'Suhu mencair', 'description' => 'Suhu saat benda padat berubah menjadi cair.', 'category' => 'Sains'],
            ['title' => 'Tekstur', 'description' => 'Rasa permukaan benda saat disentuh.', 'category' => 'Sains'],
            ['title' => 'Terasi', 'description' => 'Bumbu dari udang kecil yang difermentasi.', 'category' => 'Kuliner'],
            ['title' => 'Tanggung jawab', 'description' => 'Sikap mau menjaga dan melakukan tugas dengan baik.', 'category' => 'Pendidikan'],
            ['title' => 'Udang rebon', 'description' => 'Udang kecil sebagai bahan utama terasi.', 'category' => 'Sains'],
            ['title' => 'Warisan budaya', 'description' => 'Budaya yang diwariskan dari generasi ke generasi.', 'category' => 'Budaya'],
        ];

        foreach ($glossaries as $g) {
            Glossary::create($g);
        }

        // 2. PRODUCTS & SECTIONS

        $unifiedImage = 'images/batik.png';
        $unifiedVideo = 'https://www.youtube.com/watch?v=weuLejJdUu0';

        // --- BATIK MADURA ---
        $batik = Product::updateOrCreate(
            ['slug' => 'batik-madura'],
            [
                'name' => 'Batik Madura',
                'description' => 'Batik Madura merupakan kain tradisional yang dibuat secara manual dengan motif dan warna yang khas.',
                'cover_image' => $unifiedImage,
                'color_theme' => '#e11d48', // Red-ish for Batik
            ]
        );

        $this->createSection($batik, 'pembuka', 'Pembuka Produk', 
            '<p><strong>Narasi:</strong> Batik Madura merupakan kain tradisional yang dibuat secara manual dengan motif dan warna yang khas. Batik ini digunakan dalam berbagai kegiatan masyarakat dan menjadi salah satu warisan budaya Madura yang masih dilestarikan hingga saat ini.</p>' .
            '<blockquote><strong>Pertanyaan Pemantik:</strong> Mengapa warna Batik Madura terlihat cerah dan beragam? Karena masyarakat Madura hidup di tepi laut yang penuh sinar matahari. Mereka menyukai warna-warna yang cerah seperti warna laut, langit, dan matahari terbenam di pantai.</blockquote>'
        );

        $this->createSection($batik, 'identitas', 'Identitas & Latar Budaya', 
            '<p><strong>Latar Budaya:</strong> Batik Madura merupakan kain tradisional yang berasal dari Pulau Madura dan dibuat melalui proses membatik. Batik ini memiliki ciri khas berupa warna-warna cerah serta motif yang tegas dan beragam. Setiap motif Batik Madura menunjukkan keunikan yang membedakannya dari batik daerah lain. Batik Madura digunakan sebagai pakaian dan menjadi bagian dari identitas budaya masyarakat Madura.</p>' .
            '<p><strong>Asal Batik:</strong> Bangkalan, Pamekasan, Sampang, Sumenep</p>' .
            '<h3>Motif ciri khas Batik Madura berdasarkan asal daerah:</h3>' .
            '<ul>' .
            '<li><strong>Motif Flora Laut:</strong> Rumput laut, bunga teratai, daun kelapa - melambangkan kehidupan yang tumbuh dari air dan ketahanan menghadapi angin kencang di pantai.</li>' .
            '<li><strong>Motif Fauna Laut:</strong> Ikan, kepiting, burung laut, udang - simbol rezeki dari laut yang melimpah dan rasa syukur nelayan.</li>' .
            '<li><strong>Motif Ombak:</strong> Gelombang laut yang bergulung-gulung - filosofi bahwa hidup itu naik turun seperti ombak, harus tetap semangat.</li>' .
            '<li><strong>Motif Butiran Garam:</strong> Titik-titik kecil yang rapi menyerupai butiran garam - menghormati profesi petani garam yang banyak di Madura, simbol ketekunan dan hasil kerja keras yang manis walaupun prosesnya panas dan melelahkan.</li>' .
            '<li><strong>Motif Perahu Layar:</strong> Kapal nelayan dengan layar terkembang - simbol semangat pelaut Madura yang berani mengarungi lautan luas untuk mencari nafkah.</li>' .
            '<li><strong>Warna Cerah:</strong> Merah (keberanian), kuning (kemuliaan), hijau (kesuburan), biru (kedamaian laut) - mencerminkan jiwa masyarakat pesisir yang terbuka, ramah, dan penuh semangat hidup.</li>' .
            '</ul>' .
            '<h3>Jenis Batik Berdasarkan Daerah:</h3>' .
            '<h4>1) Batik Bangkalan</h4>' .
            '<p>Batik Bangkalan dikenal dengan warna-warna sangat berani dan kontras, seperti merah menyala, hitam, dan kuning yang mencerminkan karakter masyarakat pesisir yang tegas dan kuat.</p>' .
            '<ul>' .
            '<li><strong>Motif Per Keper (Burung):</strong> Menggambarkan burung dengan garis tegas dan bentuk yang jelas, melambangkan kebebasan dan semangat terbang tinggi seperti burung laut di pantai Bangkalan.</li>' .
            '<li><strong>Motif Daun dan Bunga:</strong> Bentuk sederhana dengan warna kuat, menggambarkan tanaman pantai yang tahan angin kencang.</li>' .
            '<li><strong>Motif Ombak/Gelombang:</strong> Terinspirasi dari wilayah pesisir Bangkalan yang berbatasan langsung dengan Selat Madura, menggambarkan gelombang laut yang dinamis.</li>' .
            '</ul>' .
            '<h4>2) Batik Sampang</h4>' .
            '<p>Batik Sampang memiliki motif yang lebih sederhana dengan pola berulang dan warna tetap cerah, tetapi tidak sepadat Bangkalan. Motif-motifnya mencerminkan kehidupan pedesaan yang tenang.</p>' .
            '<ul>' .
            '<li><strong>Motif Bunga dan Daun:</strong> Menggambarkan flora khas pedesaan Sampang dengan bentuk yang lebih natural dan tidak terlalu rumit.</li>' .
            '<li><strong>Motif Garis dan Bentuk Geometris:</strong> Pola berulang yang teratur, menunjukkan keteraturan dan kesederhanaan hidup masyarakat agraris.</li>' .
            '<li><strong>Motif Alam Sekitar:</strong> Tanaman dan lingkungan pedesaan seperti padi, jagung, dan tumbuhan perkebunan yang menjadi mata pencaharian utama.</li>' .
            '</ul>' .
            '<h4>3) Batik Pamekasan</h4>' .
            '<p>Batik Pamekasan dikenal sebagai batik Madura yang lebih halus dan rapi, dengan variasi motif yang lebih banyak. Perpaduan warnanya lebih seimbang dan tertata indah.</p>' .
            '<ul>' .
            '<li><strong>Motif Sekar Jagad Madura:</strong> Motif "bunga dunia" yang menggambarkan keberagaman dan keindahan alam semesta dalam satu kain, dengan berbagai macam bunga dan warna.</li>' .
            '<li><strong>Motif Bunga dan Tanaman Hias:</strong> Berbagai jenis bunga seperti mawar, melati, dan bunga tropis lainnya yang tersusun rapi dan penuh detail.</li>' .
            '<li><strong>Motif Burung dan Kupu-Kupu:</strong> Fauna yang digambarkan dengan detail halus, melambangkan keindahan dan transformasi kehidupan.</li>' .
            '</ul>' .
            '<h4>4) Batik Sumenep</h4>' .
            '<p>Batik Sumenep terkenal dengan motif paling halus dan detail di antara batik Madura lainnya. Warna yang digunakan cenderung lebih lembut karena pengaruh budaya keraton.</p>' .
            '<ul>' .
            '<li><strong>Motif Kembang Randu:</strong> Bunga kapuk (randu) yang dilukis dengan sangat halus dan detail, melambangkan kelembutan dan keanggunan.</li>' .
            '<li><strong>Motif Kembang Sepatu dan Bunga Halus:</strong> Bunga-bunga tropis dengan detail kelopak dan benang sari yang sangat teliti, menunjukkan kehalusan pengerjaan.</li>' .
            '<li><strong>Motif Burung dan Sulur Tanaman:</strong> Burung-burung kecil yang bertengger di antara sulur dan ranting tanaman merambat, menciptakan kesan anggun dan natural.</li>' .
            '</ul>' .
            '<h3>Kegunaan Batik Madura dalam kehidupan sehari-hari</h3>' .
            '<ul>' .
            '<li><strong>Upacara Adat:</strong> Pernikahan, khitanan, dan acara keagamaan - batik adalah pakaian wajib.</li>' .
            '<li><strong>Pakaian Sekolah:</strong> Banyak sekolah di Madura mewajibkan siswa memakai batik sebagai seragam, biasanya hari Jumat.</li>' .
            '<li><strong>Oleh-oleh Khas:</strong> Wisatawan yang datang ke Madura selalu membeli batik sebagai kenang-kenangan.</li>' .
            '<li><strong>Identitas Budaya:</strong> Batik menjadi simbol kebanggaan masyarakat Madura dan menunjukkan identitas mereka.</li>' .
            '<li><strong>Pasar Moderen:</strong> Batik Madura kini dijual online ke seluruh Indonesia bahkan luar negeri.</li>' .
            '</ul>'
        );

        $this->createSection($batik, 'bahan', 'Bahan Baku', 
            '<p>Batik Madura dibuat dengan memanfaatkan bahan baku yang berasal dari alam dan lingkungan sekitar. Bahan utama yang digunakan adalah kain, malam atau lilin batik, serta zat pewarna.</p>' .
            '<ul>' .
            '<li><strong>Kain:</strong> Umumnya berupa kain katun karena mudah menyerap warna dan nyaman digunakan sebagai pakaian.</li>' .
            '<li><strong>Malam (Lilin Batik):</strong> Berfungsi untuk menutup bagian tertentu pada kain agar tidak terkena warna saat proses pewarnaan. Malam dibuat dari campuran bahan yang dapat meleleh ketika dipanaskan dan mengeras kembali setelah dingin.</li>' .
            '<li><strong>Pewarna Alami:</strong> Warna-warna cerah seperti merah, cokelat, dan kuning diperoleh dari tumbuhan, misalnya akar, kulit kayu, dan daun tertentu. Pemanfaatan pewarna alami menunjukkan pengetahuan masyarakat Madura dalam menggunakan sumber daya alam secara bijak.</li>' .
            '</ul>'
        );

        $this->createSection($batik, 'proses', 'Proses Pembuatan', 
            '<p>Proses pembuatan Batik Madura dilakukan secara tradisional melalui beberapa tahapan yang memerlukan ketelitian dan kesabaran. Proses ini diwariskan secara turun-temurun oleh masyarakat Madura.</p>' .
            '<ol>' .
            '<li><strong>Pembuatan Pola:</strong> Pengrajin menggambar motif batik di atas kain menggunakan pensil. Motif yang dibuat biasanya terinspirasi dari alam, tumbuhan, hewan, serta kehidupan masyarakat Madura.</li>' .
            '<li><strong>Mencanting:</strong> Pengrajin menggunakan canting yang diisi malam atau lilin panas untuk menutupi garis-garis motif pada kain. Bagian kain yang tertutup malam tidak akan menyerap warna saat proses pewarnaan.</li>' .
            '<li><strong>Pewarnaan (Pencelupan):</strong> Kain yang telah diberi malam dicelupkan ke dalam larutan pewarna. Pewarnaan dapat dilakukan lebih dari satu kali untuk menghasilkan warna yang diinginkan.</li>' .
            '<li><strong>Pengeringan Awal:</strong> Keringkan diatas kayu penyanggah dan jepit agar tidak terbang ketika terkena angin.</li>' .
            '<li><strong>Blok Warna:</strong> Blok warna pada inti tersebut.</li>' .
            '<li><strong>Pelorodan Pertama:</strong> Campuran air mendidih dengan soda agar malam cepat terlepas, tujuannya supaya warna tadi timbul. Lalu dikeringkan.</li>' .
            '<li><strong>Pembatikan Kembali:</strong> Lakukan pembatikan kembali menggunakan canting sesuai dengan kreativitas dan keinginan pembatik.</li>' .
            '<li><strong>Pewarnaan Kedua:</strong> Memberi warna pada motif tersebut, lalu dikeringkan kembali.</li>' .
            '<li><strong>Blok Warna Lanjutan:</strong> Blok warna pada motif pertama dan kedua, lalu celupkan kain untuk diberi pewarnaan dasar kedalam campuran naptol dan garam agar warna lebih keluar.</li>' .
            '<li><strong>Diamkan:</strong> Diamkan pada kayu penyangga ± sehari semalam agar kualitas warnanya bagus.</li>' .
            '<li><strong>Pelorodan Kedua:</strong> Masuk pada proses pelorodan (pelepasan malam) yang kedua. Caranya sama seperti pada tahap 6.</li>' .
            '<li><strong>Bilas:</strong> Bilas ke campuran air dan HCL untuk penyempurnaan warna.</li>' .
            '<li><strong>Pengeringan Akhir:</strong> Setelah proses pewarnaan, kain dijemur hingga kering agar warna menempel dengan baik pada kain.</li>' .
            '<li><strong>Selesai:</strong> Batik siap dipasarkan.</li>' .
            '</ol>' .
            '<p>Video Proses Pembuatan Batik:</p>'
        );
        ProductSection::where('product_id', $batik->id)->where('slug', 'proses')->update(['video_url' => $unifiedVideo]);

        $this->createSection($batik, 'ipas', 'Konsep IPAS', 
            '<h3>1. Perubahan Wujud Zat - Lilin Malam</h3>' .
            '<p>Lilin malam adalah lilin khusus yang digunakan untuk membuat motif pada kain. Lilin ini terbuat dari campuran malam (sejenis lilin dari lebah) dan parafin (lilin dari minyak bumi).</p>' .
            '<ul>' .
            '<li><strong>Lilin Padat:</strong> Pada suhu biasa (25°C), lilin malam berbentuk padat seperti lilin biasa.</li>' .
            '<li><strong>Memanaskan Lilin:</strong> Ketika dipanaskan, lilin berubah menjadi cair.</li>' .
            '<li><strong>Suhu Mencair:</strong> Lilin malam mencair pada suhu sekitar 60-70°C.</li>' .
            '<li><strong>Menggunakan Lilin Cair:</strong> Lilin cair digoreskan ke kain dengan canting.</li>' .
            '<li><strong>Lilin Membeku Lagi:</strong> Setelah menempel di kain, lilin cepat mendingin dan kembali menjadi padat.</li>' .
            '<li><strong>Kesimpulan Sains:</strong> Lilin mengalami perubahan wujud bolak-balik dari padat → cair → padat lagi (Perubahan Fisika Reversibel).</li>' .
            '</ul>' .

            '<h3>2. Bahan-Bahan dari Alam (Sumber Daya Alam)</h3>' .
            '<ul>' .
            '<li><strong>Warna Kuning:</strong> Dari kunyit atau tegeran.</li>' .
            '<li><strong>Warna Biru:</strong> Dari daun tanaman indigo/tarum.</li>' .
            '<li><strong>Warna Merah:</strong> Dari kulit kayu mengkudu atau akar pohon soga.</li>' .
            '<li><strong>Warna Coklat:</strong> Dari kulit kayu pohon tingi atau jambal.</li>' .
            '<li><strong>Warna Hitam:</strong> Dari campuran tunjung dengan pewarna coklat.</li>' .
            '</ul>' .

            '<h3>3. Pemanfaatan Energi Matahari (Energi Panas)</h3>' .
            '<p>Energi panas matahari sangat penting dalam pembuatan batik!</p>' .
            '<ul>' .
            '<li><strong>Tahap 1:</strong> Mengeringkan kain setelah dicuci (2-3 jam).</li>' .
            '<li><strong>Tahap 2:</strong> Mengeringkan kain setelah diwarnai. Panas matahari membuat warna lebih cerah dan tidak mudah luntur.</li>' .
            '<li><strong>Tahap 3:</strong> Melorod (Menghilangkan Lilin). Kain direbus air panas, lalu dijemur lagi.</li>' .
            '</ul>' .

            '<h3>4. Proses Pewarnaan - Mengapa Warna Bisa Menempel?</h3>' .
            '<p>Pewarna meresap masuk ke serat-serat kain seperti air yang meresap ke spons. Agar warna tidak luntur, pembatik menambahkan “mordan” (seperti garam khusus) yang membuat pewarna menempel erat di kain.</p>' .

            '<h3>5. Sifat Benda – Lilin dan Air Tidak Bisa Bercampur</h3>' .
            '<p>Lilin malam memiliki sifat tidak bisa bercampur dengan air (hidrofobik). Ketika kain berlilin dicelup ke air pewarna, air tidak bisa menembus lilin. Jadi bagian yang berlilin tetap berwarna putih.</p>'
        );

        $this->createSection($batik, 'dampak', 'Dampak & Tanggung Jawab', 
            '<p>Batik Madura memberikan dampak positif bagi masyarakat. Batik menjadi sumber mata pencaharian bagi para pengrajin dan membantu meningkatkan perekonomian keluarga. Selain itu, batik juga berperan sebagai warisan budaya yang memperkenalkan identitas dan kekayaan budaya Madura kepada masyarakat luas.</p>' .
            '<p>Pembuatan batik juga berkaitan dengan pemanfaatan sumber daya alam, seperti penggunaan kain, malam, dan pewarna. Jika bahan-bahan tersebut tidak digunakan secara bijak, lingkungan dapat mengalami kerusakan. Oleh karena itu, diperlukan sikap tanggung jawab dalam memanfaatkan sumber daya alam agar tidak menimbulkan dampak bagi lingkungan.</p>' .
            '<p>Sikap tanggung jawab dapat ditunjukkan dengan menjaga kebersihan lingkungan, menggunakan bahan alam secara hemat, serta menghargai hasil karya pengrajin batik. Dengan bersikap bertanggung jawab, siswa ikut berperan dalam melestarikan budaya Batik Madura dan menjaga kelestarian lingkungan.</p>'
        );


        // --- RENGGINANG LORJUK ---
        $rengginang = Product::updateOrCreate(
            ['slug' => 'rengginang-lorjuk'],
            [
                'name' => 'Rengginang Lorjuk',
                'description' => 'Makanan ringan tradisional khas Madura yang terbuat dari beras ketan dan lorjuk (kerang bambu).',
                'cover_image' => $unifiedImage,
                'color_theme' => '#f59e0b', // Amber
            ]
        );

        $this->createSection($rengginang, 'pembuka', 'Pembuka Produk', 
            '<p><strong>Narasi:</strong> Rengginang lorjuk adalah makanan ringan tradisional khas Madura. Rengginang ini memiliki rasa gurih dan tekstur renyah. Keunikan rengginang lorjuk terletak pada penggunaan lorjuk, yaitu sejenis kerang bambu yang hidup di wilayah pesisir. Rengginang lorjuk sering disajikan sebagai camilan dan oleh-oleh khas Madura.</p>' .
            '<blockquote><strong>Pertanyaan Pemantik:</strong> Mengapa Rengginang Lorjuk memiliki rasa yang berbeda?</blockquote>'
        );

        $this->createSection($rengginang, 'identitas', 'Identitas & Latar Budaya', 
            '<p>Rengginang lorjuk merupakan makanan tradisional khas Madura yang terbuat dari beras ketan dan lorjuk, yaitu sejenis kerang kecil (kerang bambu) yang hidup di pasir pantai. Rengginang ini diolah dengan cara mencampurkan lorjuk ke dalam adonan ketan, kemudian dicetak, dikeringkan, dan digoreng hingga mengembang dan renyah. Rengginang lorjuk memiliki cita rasa gurih yang khas dan mencerminkan pemanfaatan sumber daya alam pesisir oleh masyarakat Madura.</p>' .
            '<p>Rengginang lorjuk berasal dari daerah pesisir Pulau Madura yang memiliki kekayaan hasil laut. Lorjuk sebagai bahan utama diperoleh dari pantai berpasir dan telah lama dimanfaatkan oleh masyarakat setempat sebagai bahan makanan.</p>' .
            '<p>Masyarakat Madura mengolah lorjuk beras ketan menjadi rengginang sebagai bentuk pengolahan hasil alam agar lebih tahan lama dan bernilai ekonomi. Rengginang lorjuk sering disajikan sebagai camilan keluarga, hidangan saat acara tertentu, serta oleh-oleh khas Madura. Keberadaan rengginang lorjuk menunjukkan hubungan budaya masyarakat Madura dan lingkungan pesisir tempat mereka tinggal.</p>'
        );

        $this->createSection($rengginang, 'bahan', 'Bahan Baku', 
            '<p>Bahan baku utama dalam pembuatan rengginang lorjuk berasal dari sumber daya alam darat dan laut.</p>' .
            '<ul>' .
            '<li><strong>Beras Ketan:</strong> Diperoleh dari hasil pertanian.</li>' .
            '<li><strong>Lorjuk:</strong> Hasil laut yang hidup di pasir pantai.</li>' .
            '<li><strong>Garam:</strong> Digunakan sebagai penyedap rasa dan juga berasal dari proses penguapan air laut.</li>' .
            '</ul>' .
            '<p>Pemanfaatan bahan-bahan tersebut menunjukkan bahwa rengginang lorjuk sangat bergantung pada kondisi alam. Oleh karena itu, ketersediaan bahan baku perlu dijaga agar tidak mengganggu keseimbangan lingkungan.</p>'
        );

        $this->createSection($rengginang, 'proses', 'Proses Pembuatan', 
           '<p>Campurkan lorjuk ke adonan ketan, cetak, keringkan, lalu goreng hingga mengembang.</p>' .
           '<p>Video Proses Pembuatan Rengginang Lorjuk:</p>'
        );
        ProductSection::where('product_id', $rengginang->id)->where('slug', 'proses')->update(['video_url' => $unifiedVideo]);

        $this->createSection($rengginang, 'ipas', 'Konsep IPAS', 
            '<h3>a. Lorjuk (Kerang Bambu)</h3>' .
            '<p><strong>Ekologi Lorjuk:</strong> Nama Ilmiah: <em>Solen grandis</em> atau <em>Solen sp</em>. Nama Lokal: Lorjuk, kerang bambu. <strong>Habitat:</strong> Lorjuk hidup terbenam di pasir pantai pada kedalaman 10-30 cm. <strong>Cara Makan:</strong> Lorjuk adalah filter feeder yang menyaring plankton dari air laut.</p>' .

            '<h3>b. Kandungan Gizi Lorjuk</h3>' .
            '<ul>' .
            '<li><strong>Protein:</strong> 12-15% - untuk pertumbuhan dan perbaikan sel.</li>' .
            '<li><strong>Mineral:</strong> Kalsium, fosfor, zat besi.</li>' .
            '<li><strong>Vitamin B12:</strong> Penting untuk saraf.</li>' .
            '<li><strong>Omega-3:</strong> Asam lemak esensial untuk jantung.</li>' .
            '</ul>' .

            '<h3>c. Proses Gelatinisasi Ketan</h3>' .
            '<p><strong>Gelatinisasi:</strong> Proses penyerapan air oleh granula pati saat dipanaskan (68-78°C), menyebabkan pati mengembang dan menjadi gel. Amilopektin tinggi dalam ketan membuatnya lengket.</p>' .

            '<h3>d. Reaksi Maillard saat Penggorengan</h3>' .
            '<p>Warna kecoklatan dan aroma khas rengginang terbentuk melalui Reaksi Maillard (suhu 140-165°C), yaitu reaksi kimia antara asam amino (dari lorjuk) dengan gula pereduksi (dari ketan) yang menghasilkan senyawa melanoidin (warna coklat, aroma gurih).</p>' .

            '<h3>e. Pengawetan Alami</h3>' .
            '<p>Rengginang bertahan lama karena kadar air rendah (<5%) akibat penggorengan dan garam yang berfungsi sebagai pengawet alami.</p>'
        );

        $this->createSection($rengginang, 'dampak', 'Dampak & Tanggung Jawab', 
            '<p>Rengginang lorjuk memberikan dampak positif bagi masyarakat Madura. Produk ini membantu meningkatkan perekonomian masyarakat dan melestarikan makanan tradisional daerah.</p>' .
            '<p>Namun, pemanfaatan bahan baku yang berlebihan, terutama lorjuk, dapat berdampak pada berkurangnya sumber daya alam di pesisir. Sikap tanggung jawab dapat ditunjukkan dengan menjaga lingkungan pantai, tidak mengambil lorjuk secara berlebihan, serta menghargai makanan tradisional sebagai bagian dari budaya belanja.</p>'
        );


        // --- PETIS ---
        $petis = Product::updateOrCreate(
            ['slug' => 'petis'],
            [
                'name' => 'Petis',
                'description' => 'Produk olahan tradisional khas Madura dari hasil laut (ikan/udang) yang menjadi bumbu penting kuliner.',
                'cover_image' => $unifiedImage,
                'color_theme' => '#0f172a', // Dark blue/black
            ]
        );

        $this->createSection($petis, 'pembuka', 'Pembuka Produk', 
            '<p><strong>Narasi:</strong> Petis Madura merupakan produk olahan tradisional khas Madura yang dibuat dari hasil laut, seperti ikan atau udang. Di Madura, petis telah menjadi bagian penting dari kuliner sejak ratusan tahun lalu. Petis biasanya digunakan sebagai bumbu rujak , campuran sambal dan lainnya.</p>' .
            '<blockquote><strong>Pertanyaan Pemantik:</strong> Faktor apa saja yang memengaruhi rasa petis Madura?</blockquote>'
        );

        $this->createSection($petis, 'identitas', 'Identitas & Latar Budaya', 
            '<p>Petis Madura berkembang di wilayah pesisir Pulau Madura yang kaya akan hasil laut. Sejak dahulu, masyarakat Madura mengolah ikan atau udang menjadi petis sebagai cara untuk mengawetkan bahan makanan agar dapat digunakan dalam waktu lama.</p>' .
            '<p>Petis tidak hanya berfungsi sebagai bumbu, tetapi juga menjadi bagian dari kebiasaan makan masyarakat Madura. Petis sering digunakan dalam berbagai makanan tradisional dan menjadi identitas kuliner daerah.</p>' .
            '<p>Keberadaan petis Madura mencerminkan pengetahuan belanja masyarakat dalam mengolah sumber daya alam sesuai dengan kondisi lingkungan tempat tinggal mereka.</p>'
        );

        $this->createSection($petis, 'bahan', 'Bahan Baku', 
            '<p>Bahan baku utama petis Madura berasal dari hasil laut yaitu ikan. Selain itu, digunakan juga bahan pendukung seperti garam dan gula.</p>' .
            '<ul>' .
            '<li><strong>Ikan/Udang:</strong> Diperoleh dari laut sekitar Madura.</li>' .
            '<li><strong>Garam:</strong> Berasal dari air laut yang diolah melalui proses penguapan.</li>' .
            '<li><strong>Gula:</strong> Digunakan untuk menyeimbangkan rasa petis agar tidak terlalu asin.</li>' .
            '</ul>' .
            '<p>Penggunaan bahan-bahan alami ini menunjukkan ketergantungan masyarakat Madura terhadap sumber daya laut dan pentingnya menjaga kelestarian lingkungan laut agar bahan baku tetap tersedia.</p>'
        );

        $this->createSection($petis, 'proses', 'Proses Pembuatan', 
            '<p>Perebusan ikan/udang untuk ambil sarinya. Pemanasan terus menerus hingga air menguap dan adonan mengental (pekat/pasta).</p>' .
            '<p>Video Proses Pembuatan Petis:</p>'
        );
        ProductSection::where('product_id', $petis->id)->where('slug', 'proses')->update(['video_url' => $unifiedVideo]);

        $this->createSection($petis, 'ipas', 'Konsep IPAS', 
            '<h3>a. Aspek IPA:</h3>' .
            '<ul>' .
            '<li><strong>Pemanasan:</strong> Ikan direbus untuk memisahkan daging dan air. Panas membantu proses pengawetan dan pembentukan rasa.</li>' .
            '<li><strong>Penguapan:</strong> Air yang terkandung dalam ikan dan bumbu menguap saat direbus. Proses ini mengurangi kadar air dan membuat petis lebih kental.</li>' .
            '<li><strong>Perubahan sifat bahan (Fisika):</strong> Tekstur ikan dan bumbu berubah, warna menjadi gelap, dan konsistensi lebih padat.</li>' .
            '<li><strong>Perubahan sifat bahan (Kimia):</strong> Senyawa dalam ikan, gula, dan garam mengalami reaksi pemanasan yang membentuk rasa khas petis.</li>' .
            '<li><strong>Larutan dan konsentrasi:</strong> Larutan sari ikan dan gula menjadi lebih pekat karena air menguap.</li>' .
            '</ul>' .

            '<h3>b. Aspek IPS:</h3>' .
            '<p>Petis Madura merupakan produk ekonomi yang dihasilkan melalui usaha rumahan. Petis dijual sebagai bumbu masakan dan menjadi sumber penghasilan masyarakat.</p>' .

            '<h3>c. Aspek Lingkungan:</h3>' .
            '<p>Pemanfaatan hasil laut dilakukan secara bijak agar tidak merusak keseimbangan ekosistem laut. Penangkapan ikan berkelanjutan memastikan ketersediaan bahan baku untuk generasi mendatang.</p>'
        );

        $this->createSection($petis, 'dampak', 'Dampak & Tanggung Jawab', 
            '<p>Pembuatan petis Madura memberikan manfaat ekonomi karena menjadi sumber penghasilan masyarakat dan memperkenalkan budaya belanja melalui kuliner tradisional. Proses pembuatannya juga mengenalkan konsep IPA, seperti pemanasan, penguapan, dan perubahan sifat bahan.</p>' .
            '<p>Pengambilan ikan secara berlebihan dapat merusak ekosistem laut, dan proses pengolahan yang tidak higienis berisiko menimbulkan masalah bagi konsumen.</p>' .
            '<p>Produsen perlu mengolah petis dengan bersih, konsumen menggunakan produk secara bijak, dan masyarakat menjaga kelestarian laut. Dengan tanggung jawab ini, petis tetap memberikan manfaat ekonomi, sosial, dan menjaga lingkungan.</p>'
        );


        // --- TERASI ---
        $terasi = Product::updateOrCreate(
            ['slug' => 'terasi'],
            [
                'name' => 'Terasi',
                'description' => 'Bumbu tradisional dari fermentasi udang rebon dengan aroma kuat dan rasa gurih khas Madura.',
                'cover_image' => $unifiedImage,
                'color_theme' => '#7c2d12', // Brown
            ]
        );

        $this->createSection($terasi, 'pembuka', 'Pembuka Produk', 
            '<p><strong>Narasi:</strong> Terasi adalah bumbu tradisional Indonesia yang terbuat dari udang rebon (udang kecil) yang difermentasi. Di Madura, terasi memiliki karakteristik aroma yang sangat kuat dan rasa yang gurih. Terasi Madura terkenal berkualitas tinggi karena menggunakan udang rebon segar dari perairan Selat Madura.</p>'
        );

        $this->createSection($terasi, 'identitas', 'Identitas & Latar Budaya', 
            '<p>Terasi Madura merupakan produk pangan tradisional yang berasal dari pesisir Madura. Produk ini termasuk bahan pangan fermentasi yang banyak digunakan sebagai bumbu dalam masakan sehari-hari.</p>' .
            '<p>Terasi Madura memiliki ciri khas aroma yang kuat dan rasa gurih yang membuat masakan menjadi lebih lezat dan khas rasa nusantara. Produk ini tidak hanya bernilai kuliner, tetapi juga mencerminkan kearifan belanja masyarakat pesisir Madura dalam mengolah hasil laut menjadi bahan pangan yang awet dan bernutrisi.</p>'
        );

        $this->createSection($terasi, 'bahan', 'Bahan Baku', 
            '<p>Bahan utama untuk membuat terasi adalah udang rebon (ghuraghu). Udang rebon berkualitas baik memiliki tekstur halus dan berbau segar. Bahan pendukung meliputi garam, bawang putih, gula aren, dan penyedap rasa.</p>' .
            '<p>Alat yang digunakan meliputi piring, sendok, saringan, talenan, pisau, jemuran (bidhik), lumpang dan alu, plastik, serta wadah penyimpanan.</p>'
        );

        $this->createSection($terasi, 'proses', 'Proses Pembuatan', 
            '<ol>' .
            '<li>Pencucian rebon hingga bersih.</li>' .
            '<li>Penjemuran (setengah kering).</li>' .
            '<li>Penumbukan dengan lumpang dan alu bersama bahan tambahan.</li>' .
            '<li>Fermentasi (pemeraman) alami.</li>' .
            '<li>Penjemuran akhir hingga kadar air rendah.</li>' .
            '<li>Pembentukan dan pemadatan (dicetak).</li>' .
            '</ol>' .
            '<p>Video Proses Pembuatan Terasi:</p>'
        );
        ProductSection::where('product_id', $terasi->id)->where('slug', 'proses')->update(['video_url' => $unifiedVideo]);

        $this->createSection($terasi, 'ipas', 'Konsep IPAS', 
            '<h3>a. Konsep IPA</h3>' .
            '<ul>' .
            '<li><strong>Penguapan Air:</strong> Udang dijemur di bawah sinar matahari sehingga kadar air berkurang, membantu pengawetan.</li>' .
            '<li><strong>Perubahan Tekstur dan Sifat Bahan:</strong> Udang yang awalnya kenyal berubah menjadi bahan halus setelah ditumbuk.</li>' .
            '<li><strong>Pengaruh Panas Matahari:</strong> Membantu mengeringkan bahan dan memperkuat aroma terasi.</li>' .
            '<li><strong>Fermentasi Alami:</strong> Proses biologis yang membentuk rasa gurih khas terasi (reaksi enzimatis dan mikroba).</li>' .
            '</ul>' .

            '<h3>b. Konsep IPS</h3>' .
            '<ul>' .
            '<li><strong>Pemanfaatan Sumber Daya Laut:</strong> Udang kecil yang melimpah digunakan secara bijak.</li>' .
            '<li><strong>Nilai Ekonomi:</strong> Produk yang dapat dijual dan memberi penghasilan.</li>' .
            '<li><strong>Budaya:</strong> Mencerminkan kearifan masyarakat Madura.</li>' .
            '<li><strong>Keberlanjutan:</strong> Penggunaan bahan alami menjaga kelestarian lingkungan laut.</li>' .
            '</ul>'
        );

        $this->createSection($terasi, 'dampak', 'Dampak & Tanggung Jawab', 
            '<p>Pembuatan terasi Madura memberikan manfaat ekonomi karena menjadi sumber penghasilan masyarakat pesisir. Selain itu, produk ini memperkenalkan budaya melalui cara pembuatannya yang tradisional, mengenalkan konsep IPA, seperti penguapan, perubahan tekstur, dan fermentasi bahan.</p>' .
            '<p>Pengambilan udang yang berlebihan dapat mengganggu keseimbangan ekosistem laut. Produsen perlu mengolah terasi dengan bersih, konsumen menggunakan produk secara bijak, dan masyarakat menjaga kelestarian laut.</p>'
        );
    }

    private function createSection($product, $slug, $title, $content)
    {
        ProductSection::updateOrCreate(
            [
                'product_id' => $product->id,
                'slug' => $slug,
            ],
            [
                'title' => $title,
                'content' => $content,
                'sort_order' => match($slug) {
                    'pembuka' => 1,
                    'identitas' => 2,
                    'bahan' => 3,
                    'proses' => 4,
                    'ipas' => 5,
                    'dampak' => 6,
                    default => 99
                }
            ]
        );
    }
}
