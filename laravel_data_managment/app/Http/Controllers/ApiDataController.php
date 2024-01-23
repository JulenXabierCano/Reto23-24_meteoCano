<?php
namespace App\Http\Controllers;

use App\Models\Ciudad;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;

class ApiDataController
{
    public function api_data()
    {

        $coordenadasCiudades = json_decode(Ciudad::all("ciudad", "coordenadas"), true);

        log::info("Se han obtenido las coordenadas y las ciudades:");
        log::info($coordenadasCiudades);

        foreach ($coordenadasCiudades as $coordenadas) {
            $latLon = explode(";", $coordenadas['coordenadas']);

            log::info("Coordenadas actuales:");
            log::info($latLon);

            $apiCall = 'https://api.openweathermap.org/data/2.5/onecall?units=metric&appid=ee7c4b79648c7ec65f4c16b0b11a0ffe&lang=es&lat=' . $latLon[0] . '&lon=' . $latLon[1];

            // Realiza la solicitud a la API
            $response = json_decode(@file_get_contents($apiCall), true);

            log::info("Respuesta del API:");
            log::info($response["current"]);
            // return $response;
            // return $coordenadasCiudades;
            $ciudad = Ciudad::find($coordenadas["ciudad"]);

            log::info("Se ha intentado obtener la ciudad " . $coordenadas["ciudad"] . ":");
            log::info($ciudad->ciudad);

            if ($ciudad) {
                $time = new Carbon();
                $ciudad->update([
                    "estadoDelCielo" => $response["current"]["weather"][0]["description"],
                    "temperaturas" => $response["current"]["temp"] . ";" . $response["current"]["feels_like"],
                    "humedad" => $response["current"]["humidity"],
                    "viento" => $response["current"]["wind_speed"] . ";" . $response["current"]["wind_deg"],
                    "lluvia" => $response["minutely"][0]["precipitation"],
                ]);
            }
        }
        return redirect("http://localhost:8084");
    }


    public function aleatorizadorTemperatura()
    {
        $temperaturas = explode(";", Ciudad::all("temperaturas"));

        foreach ($temperaturas as $temperatura) {
            
        }
    }

}