<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ciudades', function (Blueprint $table) {
            $table->string('ciudad')->primary();
            $table->string('coordenadas');
            $table->string('estadoDelCielo');
            $table->string('temperaturas');
            $table->integer('humedad');
            $table->string('viento');
            $table->integer('lluvia');
            $table->integer('cod_ciudad');
            $table->integer('cod_provincia');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ciudades');
    }
};
