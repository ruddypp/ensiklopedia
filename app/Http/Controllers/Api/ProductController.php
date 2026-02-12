<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::select('id', 'name', 'slug', 'cover_image', 'color_theme', 'description')
            ->get();
        return response()->json($products);
    }

    public function show($slug)
    {
        $product = Product::with(['sections' => function($query) {
            $query->orderBy('sort_order');
        }])
            ->where('slug', $slug)
            ->firstOrFail();

        return response()->json($product);
    }
}
