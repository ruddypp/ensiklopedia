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


    protected function coverImage(): \Illuminate\Database\Eloquent\Casts\Attribute
    {
        return \Illuminate\Database\Eloquent\Casts\Attribute::make(
            get: fn ($value) => request()->is('api/*') && $value && !str_starts_with($value, 'http') ? url('storage/' . $value) : $value,
        );
    }
}
