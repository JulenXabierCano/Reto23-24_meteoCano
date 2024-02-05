<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        $schedule->call("App\Http\Controllers\ApiDataController@api_data")->everyFifteenMinutes();

        $schedule->call("App\Http\Controllers\ApiDataController@random_temp")->everyFifteenSeconds();

        $schedule->call("App\Http\Controllers\ApiDataController@dump_data")->everyThreeHours();

        // $schedule->call("App\Http\Controllers\ApiDataController@test_function")->everyTwoSeconds();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
