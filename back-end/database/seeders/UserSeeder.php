<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $limit = 1000;
        // Option 1
         \App\Models\User::factory()->create([
             'name' => 'Admin',
             'email' => 'admin@gmail.com',
             'password' => Hash::make('123123'),
             'created_at' => now(),
             'updated_at' => now()
         ]);
        $infors = [
            ['name' => '大友真琴', 'email' => 'mako.otomo@salto.link'],
            ['name' => '小林惇侃', 'email' => 'toshiyasu.kobayashi@salto.link'],
            ['name' => '岸健太', 'email' => 'kenta.kishi@salto.link'],
            ['name' => '川名泰聖', 'email' => 'taisei.kawana@salto.link'],
            ['name' => '松元大河', 'email' => 'taiga.matsumoto@salto.link'],
            ['name' => '松本健史', 'email' => 'takeshi.matsumoto@salto.link'],
            ['name' => '桑原克佳', 'email' => 'katsuyoshi.kuwabara@salto.link'],
            ['name' => '橋本泰河', 'email' => 'taiga.hashimoto@salto.link'],
            ['name' => '深辺明寛', 'email' => 'akihiro.fukabe@salto.link'],
            ['name' => '清水勝紀', 'email' => 'katsunori.shimizu@salto.link'],
            ['name' => '田邊涼二', 'email' => 'ryoji.tanabe@salto.link'],
            ['name' => '篠岡空憲', 'email' => 'kuken.shinooka@salto.link'],
            ['name' => '諏訪利典', 'email' => 'toshinori.suwa@salto.link'],
            ['name' => '齊藤保', 'email' => 'yasushi.saito@salto.link'],
            ['name' => '中原彩華', 'email' => 'ayaka.nakahara@salto.link'],
            ['name' => '木村恭平', 'email' => 'kyohei.kimura@salto.link'],
            ['name' => '松山純輝', 'email' => 'junki.matsuyama@salto.link'],
        ];
        $users = [];
        foreach ($infors as $item) {
            $users[] = [
                'name' => $item['name'],
                'email' => $item['email'],
                'email_verified_at' => now(),
                'password' => Hash::make('123456'),
                'remember_token' => str::random(10),
                'created_at' => now(),
                'updated_at' => now()
            ];
        }

        $chunks = array_chunk($users, 50);
        foreach ($chunks as $item) {
            User::insert($item);
        }

        $data = [];
        $faker = Faker::create();
        for ($i = 0; $i <= $limit; $i++) {
            $data[] = [
                'name' => $faker->name,
                'email' => $faker->email,
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
