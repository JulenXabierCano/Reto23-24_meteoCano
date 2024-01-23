<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\RegisterController;

use App\Http\Controllers\DataController;

use App\Models\Ciudad;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);

Route::get('recuperarDatos', [DataController::class, "requestData"]);

Route::get('getCiudades', function () {
    return json_decode(Ciudad::all());
});

Route::get('getCoordenadas', function () {
    return json_decode(Ciudad::all('coordenadas'));
});