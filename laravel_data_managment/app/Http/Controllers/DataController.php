<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataController extends Controller
{
    public static function obtenerDatos()
    {
        if (isset($_REQUEST["ciudad"]))
            $mensaje = "Existen parametros: " . $_REQUEST["ciudad"];
        else
            $mensaje = "No existen parametros";

        return $mensaje;

        /**
         * return response()=>json([
         *      "parametro"="valor"
         * ])
         * 
         * 
         */
    }
}
