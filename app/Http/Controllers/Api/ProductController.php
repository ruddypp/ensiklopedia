<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::select('id', 'name', 'slug', 'cover_image', 'description', 'created_at')
            ->orderBy('created_at', 'desc');

        if ($request->has('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%");
            });
        }

        if ($request->has('limit')) {
            $products = $query->take($request->input('limit'))->get();
        } else {
            $products = $query->paginate(9);
        }

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
