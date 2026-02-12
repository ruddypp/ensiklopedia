<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/{any?}', function () {
    return view('app');
})->where('any', '^(?!admin|api|up).*$');

require __DIR__.'/settings.php';
