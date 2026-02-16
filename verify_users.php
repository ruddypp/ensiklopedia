<?php

use App\Models\User;

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);

$kernel->bootstrap();

$count = User::where('role', 'guru')->count();

if ($count > 0) {
    echo "FAIL: $count users with role 'guru' still exist.\n";
    exit(1);
} else {
    echo "SUCCESS: No users with role 'guru' found.\n";
    exit(0);
}
