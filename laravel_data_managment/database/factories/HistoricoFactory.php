<?php 
/*
namespace Database\Factories;

use App\Models\Historico;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Ciudad;
use DateTime;
use Faker\Generator as Faker;

class HistoricoFactory extends Factory
{
    protected $model = Historico::class;

    private $fechaInicio;

    public function __construct(Type $var = null)
    {
        $this->fechaInicio = new DateTime("2023-01-01 00:00:00");
    }

    public function getFecha()
    {
        return $this->fechaInicio;
    }

    public function setFecha()
    {
        $this->fechaInicio->modify("+3 hours");
    }

    public function definition()
    {

        $this->setFecha();

        $ciudades = Ciudad::all("ciudad");
        $estados = ["cielo claro", "muy nuboso", "nubes", "pocas nubes", "nubes dispersas", "bruma"];

        $temperatura = $this->faker->randomFloat(2, -2, 30);
        $variacionTermica = 0;

        $humedad = $this->faker->numberBetween(0, 100);

        if ($humedad > 50) {
            $variacionTermica = rand(0, 100) / 100;
        } else {
            $variacionTermica = rand(0, -100) / 100;
        }

        return [
            'ciudad' => $this->faker->randomElement($ciudades),
            'estadoDelCielo' => $this->faker->randomElement($estados),
            'temperaturas' => $temperatura . ";" . $temperatura + $variacionTermica,
            'humedad' => $humedad,
            'viento' => rand(0, 100) / 100 . rand(0, 359),
            'lluvia' => $this->faker->numberBetween(0, 50),
            'fechaHistorico' => $this->getFecha(),
        ];
    }
}
