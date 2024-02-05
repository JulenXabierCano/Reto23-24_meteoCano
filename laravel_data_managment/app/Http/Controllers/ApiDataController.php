<?php
namespace App\Http\Controllers;

use App\Models\Ciudad;
use App\Models\Historico;
use Illuminate\Support\Facades\Log;

use DateTime;

class ApiDataController
{
    public function api_data()
    {
        $coordenadasCiudades = json_decode(Ciudad::all("ciudad", "coordenadas"), true);
        foreach ($coordenadasCiudades as $coordenadas) {
            $latLon = explode(";", $coordenadas['coordenadas']);
            $apiCall = 'https://api.openweathermap.org/data/2.5/onecall?units=metric&appid=ee7c4b79648c7ec65f4c16b0b11a0ffe&lang=es&lat=' . $latLon[0] . '&lon=' . $latLon[1];
            // Realiza la solicitud a la API
            $response = json_decode(@file_get_contents($apiCall), true);
            $ciudad = Ciudad::find($coordenadas["ciudad"]);
            if ($ciudad) {
                $ciudad->update([
                    "estadoDelCielo" => $response["current"]["weather"][0]["description"],
                    "temperaturas" => $response["current"]["temp"] . ";" . $response["current"]["feels_like"],
                    "humedad" => $response["current"]["humidity"],
                    "viento" => $response["current"]["wind_speed"] . ";" . $response["current"]["wind_deg"],
                    "lluvia" => $response["minutely"][0]["precipitation"],
                ]);
            }
        }
        log::info("Se ha ejecutado correctamente la obtención de datos del api");
    }


    public function random_temp()
    {
        $ciudades = Ciudad::all();

        foreach ($ciudades as $ciudad) {
            $temperatura = explode(";", $ciudad["temperaturas"])[0];
            $sensTermica = explode(";", $ciudad["temperaturas"])[1];
            $temperatura = $temperatura + rand(-100, 100) / 100;
            $ciudad->update([
                "temperaturas" => $temperatura . ";" . $sensTermica
            ]);
        }

        log::info("Se ha ejecutado correctamente la aleatorización de datos");

    }


    public function dump_data()
    {
        $ciudades = Ciudad::all();
        foreach ($ciudades as $ciudad) {
            $historico = new Historico();

            $historico["ciudad"] = $ciudad["ciudad"];
            $historico["estadoDelCielo"] = $ciudad["estadoDelCielo"];
            $historico["temperaturas"] = $ciudad["temperaturas"];
            $historico["humedad"] = $ciudad["humedad"];
            $historico["viento"] = $ciudad["viento"];
            $historico["lluvia"] = $ciudad["lluvia"];

            $historico->save();
        }

        log::info("se ha dumpeado correctamente la información al historico");
    }

    // public function test_function()
    // {
    //     $tiempo = new DateTime('2023-01-01 03:00:00');
    //     $tiempo = $tiempo->modify("+3 hours");
    //     log::info($tiempo->format('Y-m-d H:i:s'));
    // }
}