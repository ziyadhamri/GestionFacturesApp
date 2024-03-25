<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Client::select('id', 'client', 'email', 'numero')->get();
    }


   
    public function store(Request $request)
    {
        $request->validate([
            'client'=>'required',
            'email'=>'required',
            'numero' =>'required',
        ]);
        Client::create($request->post());
        return response()->json([
            'message' => 'Le Client à bien été ajouté !',
        ]);
    }

    
    public function show(Client $product)
    {
        return response()->json([
            'message' =>  $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $Client)
    {
        //
    }

   
    public function update(Request $request, Client $Client)
    {
        $request->validate([
            'client'=>'required',
            'email'=>'required',
            'numero' =>'required',
        ]);
        
        $Client->fill($request->post())->update();

        Client::create($request->post());
        $Client->save();
        return response()->json([
            'message' => 'Le Client a bien été ajouté !',
        ]);
    }

   
    public function destroy(Client $Client)
    {
        $Client->delete();
        return response()->json([
            'message' => "Le Client a bien été supprimé"
        ]);
    }
        }
