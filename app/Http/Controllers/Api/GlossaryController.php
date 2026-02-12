<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Glossary;
use Illuminate\Http\Request;

class GlossaryController extends Controller
{
    public function index()
    {
        $glossary = Glossary::orderBy('term')->get();
        return response()->json($glossary);
    }
}
