<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Client::select('id', 'nom', 'email', 'numero')->get();
    }


   
    public function store(Request $request)
    {
        $request->validate([
            'nom'=>'required',
            'email'=>'required',
            'numero' =>'required',
        ]);
        Client::create($request->post());
        return response()->json([
            'message' => 'Le Client à bien été ajouté !',
        ]);
    }

    
    public function show(Client $client)
    {
        return response()->json([
            'message' =>  $client,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        //
    }

   
    public function update(Request $request, Client $client)
    {
        $request->validate([
            'nom'=>'required',
            'email'=>'required',
            'numero' =>'required',
        ]);
        
        $client->fill($request->post())->update();

        Client::create($request->post());
        $client->save();
        return response()->json([
            'message' => 'Le Client a bien été ajouté !',
        ]);
    }

   
   // public function destroy(Client $Client)
   // {
   //     $Client->delete();
   //     return response()->json([
   //         'message' => "Le Client a bien été supprimé"
   //     ]);
   // }
        }
