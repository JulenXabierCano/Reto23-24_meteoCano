<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\RegisterController;
use Illuminate\Support\Facades\Log;

use App\Models\Ciudad;
use App\Models\Historico;

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

Route::get('getCiudades', function () {
    return json_decode(Ciudad::all());
});

Route::get('getCiudadesActuales', function () {
    return json_decode(Ciudad::all("ciudad"));
});

Route::get('getCoordenadas', function () {
    return json_decode(Ciudad::all('ciudad', 'coordenadas'));
});

Route::get('getHistorico', function () {
    return json_decode(Historico::whereBetween('fechaHistorico', explode(";", $_REQUEST["fechas"]))->where("ciudad", $_REQUEST["ciudad"])->get("temperaturas"));
});