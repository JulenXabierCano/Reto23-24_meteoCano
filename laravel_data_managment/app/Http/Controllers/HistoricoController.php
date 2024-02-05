<?php

namespace App\Http\Controllers;

use App\Models\Historico;
use App\Models\Ciudad;
use DateTime;

class HistoricoController
{
    public static function generar_historico()
    {
        $estados = ["cielo claro", "muy nuboso", "nubes", "pocas nubes", "nubes dispersas", "bruma"];

        $fecha = new DateTime("2023-01-01 00:00:00");
        $fechaFin = new DateTime("2023-12-31 21:00:00");

        $ciudades = Ciudad::all();

        while ($fecha <= $fechaFin) {
            foreach ($ciudades as $ciudad) {
                $temperatura = rand(-200, 3000) / 100;

                $humedad = rand(0, 100);

                Historico::create([
                    'ciudad' => $ciudad->ciudad,
                    'estadoDelCielo' => $estados[rand(0, 5)],
                    'temperaturas' => $temperatura,
                    'humedad' => $humedad,
                    'viento' => $ciudad->viento,
                    'lluvia' => $ciudad->lluvia,
                    'fechaHistorico' => $fecha,
                ]);
            }
            $fecha->modify("+3 hours");
        }
    }
}