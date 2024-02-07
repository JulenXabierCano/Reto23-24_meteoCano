<?php
  
namespace App\Models;
  
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
  
class users_config extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
  
    protected $table = 'users_config';
    protected $primaryKey = 'usuario';

    protected $keyType = 'string';

    /**
     * The attributes that are mass assignable.
     *
     * @var array

     */
    protected $fillable = [
        'usuario',
        'configuracion',
        'ciudades',
    ];
  
}