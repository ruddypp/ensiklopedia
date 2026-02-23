<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Glossary extends Model
{
    protected $fillable = [
        'title',
        'description',
        'image',
        'category',
    ];

    protected function image(): \Illuminate\Database\Eloquent\Casts\Attribute
    {
        return \Illuminate\Database\Eloquent\Casts\Attribute::make(
            get: fn ($value) => request()->is('api/*') && $value && !str_starts_with($value, 'http') ? url('storage/' . $value) : $value,
        );
    }
}
