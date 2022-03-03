<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'cate_name' => $this->faker->name,
            'cate_slug' => $this->faker->slug,
            'cate_status' => 1,
            'created_by' => 1,
            'modified_by' => 1
        ];
    }
}
