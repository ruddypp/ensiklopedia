<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'cover_image',

    ];

    public function sections(): HasMany
    {
        return $this->hasMany(ProductSection::class)->orderBy('sort_order');
    }


}
