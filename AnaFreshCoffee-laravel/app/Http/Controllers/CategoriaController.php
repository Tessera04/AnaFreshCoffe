<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriaCollection;
use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index(){
        //return response()->json(['categorias' => Categoria::all()]);
        //Este cofigo hace lo mismo que el de abajo
        return new CategoriaCollection(Categoria::all());
    }
}
