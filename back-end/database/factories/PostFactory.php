<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'post_title' => $this->faker->sentence,
            'post_slug' => $this->faker->slug,
            'post_desc' => $this->faker->sentence,
            'post_content' => $this->faker->paragraph,
            'post_status' => 1,
            'image_id' => 1,
            'cate_id' => 1,
            'created_by' => 1
        ];
    }
}
