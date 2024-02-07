<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use App\Models\User;

class ConfigurationController extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public static function guardarConfiguracion()
    {
        $usuario = User::where("email", request("email"))->first();
    }
}
