<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Glossary extends Model
{
    protected $fillable = [
        'term',
        'definition',
        'image',
    ];
}
