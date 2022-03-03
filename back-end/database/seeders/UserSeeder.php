<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $limit = 100;
        // Option 1
        // \App\Models\User::factory($limit)->create();

        $data = [];
        for ($i = 0; $i <= $limit; $i++) {
            $data[] = [
                'name' => 'test@gmail.com',
                'email' => "test$i@gmail.com",
                'email_verified_at' => now(),
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'remember_token' => str::random(10),
                'created_at' => now(),
                'updated_at' => now()
            ];
        }


        // Options 2
        /*
        foreach ($data as $item) {
            User::create($item);
        }
        */

        // Option 3
        /*
        foreach ($data as $item) {
            User::insert($item);
        }
        */

        // Option 4
        $chunks = array_chunk($data, 50);
        foreach ($chunks as $item) {
            User::insert($item);
        }
    }
}
