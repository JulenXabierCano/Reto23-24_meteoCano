<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataController extends Controller
{
    public static function requestData(){
        return Ciudad::all();
    }
}
