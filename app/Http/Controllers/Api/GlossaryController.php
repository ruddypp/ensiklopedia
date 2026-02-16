<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Glossary;
use Illuminate\Http\Request;

class GlossaryController extends Controller
{
    public function index(Request $request)
    {
        $query = Glossary::orderBy('title');

        if ($request->has('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%");
            });
        }

        $glossary = $query->get();
        return response()->json($glossary);
    }
}
