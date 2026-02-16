<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GlossarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing data to avoid duplicates
        \App\Models\Glossary::truncate();

        $glossaries = [
            [
                'title' => 'Batik',
                'description' => 'Seni kain tradisional dengan motif unik menggunakan malam dan pewarna alami.',
                'image' => 'images/glossary/batik.jpg',
                'category' => 'Kearifan Lokal'
            ],
            [
                'title' => 'Angklung',
                'description' => 'Alat musik tradisional dari bambu yang dimainkan dengan cara digoyangkan.',
                'image' => 'images/glossary/angklung.jpg',
                'category' => 'Kearifan Lokal'
            ],
            [
                'title' => 'Karapan Sapi',
                'description' => 'Tradisi pacuan sapi khas masyarakat Madura yang digelar setiap tahun.',
                'image' => 'images/glossary/karapan.jpg',
                'category' => 'Kearifan Lokal'
            ],
            [
                'title' => 'Garam',
                'description' => 'Komoditas utama Pulau Madura yang dihasilkan melalui proses evaporasi air laut.',
                'image' => 'images/glossary/garam.jpg',
                'category' => 'Istilah Sains'
            ],
            [
                'title' => 'Sate Madura',
                'description' => 'Kuliner khas Madura berupa daging yang ditusuk dan dibakar dengan bumbu kacang.',
                'image' => 'images/glossary/sate.jpg',
                'category' => 'Kearifan Lokal'
            ]
        ];

        foreach ($glossaries as $glossary) {
            \App\Models\Glossary::create($glossary);
        }
    }
}
