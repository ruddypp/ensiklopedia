<?php
// Script to create storage symlink on shared hosting
// Upload this to your public_html or htdocs folder and access it via browser: http://your-domain.com/symlink_helper.php

$target = __DIR__ . '/storage/app/public';
$shortcut = __DIR__ . '/public/storage';

if (file_exists($shortcut)) {
    echo "Symlink already exists!";
} else {
    if (symlink($target, $shortcut)) {
        echo "Symlink created successfully!";
    } else {
        echo "Failed to create symlink. Ensure PHP has permission to write and symlink() is enabled.";
    }
}
?>
