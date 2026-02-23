<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductSection extends Model
{
    protected $fillable = [
        'product_id',
        'title',
        'slug',
        'content',
        'image',
        'video_url',
        'sort_order',
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    protected function image(): \Illuminate\Database\Eloquent\Casts\Attribute
    {
        return \Illuminate\Database\Eloquent\Casts\Attribute::make(
            get: fn ($value) => request()->is('api/*') && $value && !str_starts_with($value, 'http') ? url('storage/' . $value) : $value,
        );
    }
}
