<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('glossaries', function (Blueprint $table) {
            if (Schema::hasColumn('glossaries', 'term')) {
                $table->renameColumn('term', 'title');
            }
            if (Schema::hasColumn('glossaries', 'definition')) {
                $table->renameColumn('definition', 'description');
            }
            if (!Schema::hasColumn('glossaries', 'category')) {
                 // Check if 'description' exists, otherwise fallback to 'definition' or just add it
                 $after = Schema::hasColumn('glossaries', 'description') ? 'description' : 'definition';
                 if (Schema::hasColumn('glossaries', $after)) {
                     $table->string('category')->after($after); 
                 } else {
                     $table->string('category');
                 }
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('glossaries', function (Blueprint $table) {
            $table->dropColumn('category');
            $table->renameColumn('description', 'definition');
            $table->renameColumn('title', 'term');
        });
    }
};
