<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'content' => $faker->text,
        'description' => $faker->paragraph,
        'image' => 'photo1.png', // secret
        'date' => '25/02/18',
        'views' => $faker->numberBetween(0, 5000),
        'category_id' => 1,
        'user_id' => 1,
        'status' => 1,
        'is_featured' => 0
    ];
});
$factory->define(App\Category::class, function (Faker $faker) {
    return [
        'title' => $faker->word,
    ];
});
$factory->define(App\Tag::class, function (Faker $faker) {
    return [
        'title' => $faker->word,
    ];
});
