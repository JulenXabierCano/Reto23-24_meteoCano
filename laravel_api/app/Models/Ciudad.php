<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ciudad extends Model
{
    protected $table = 'ciudades';
    protected $primaryKey = 'ciudad';

    protected $keyType = 'string';

    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'ciudad',
        'coordenadas',
        'estadoDelCielo',
        'temperaturas',
        'humedad',
        'viento',
        'lluvia',
        'cod_ciudad',
        'cod_provincia',
    ];
}
