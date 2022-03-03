<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class PostSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        $limit = 5000;

        $cates = Category::all()->pluck('cate_id', 'cate_id')->toArray();
        $users = User::all()->pluck('id', 'id')->toArray();
        $data = [];
        for ($i = 0; $i <= $limit; $i++) {
            $data[] = [
                'post_title' => $faker->sentence,
                'post_slug' => $faker->slug,
                'post_desc' => $faker->sentence,
                'post_content' => $faker->paragraph,
                'post_status' => 1,
                'image_id' => 1,
                'cate_id' => array_rand($cates),
                'created_by' => array_rand($users),
                'created_at' => now(),
                'updated_at' => now()
            ];
        }

        $chunks = array_chunk($data, 1000);
        foreach ($chunks as $item) {
            Post::query()->insert($item);
        }
    }
}
