<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'name' => 'Мёд и его продукты',
            'code' => '1',
            'type_id' => '1',
            'slug' => 'baking',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Шоколадная и ореховая паста',
            'code' => '2',
            'type_id' => '1',
            'slug' => 'baking',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Джем, варенье',
            'code' => '3',
            'type_id' => '1',
            'slug' => 'baking',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Батончики',
            'code' => '4',
            'type_id' => '1',
            'slug' => 'baking',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);







        DB::table('categories')->insert([
            'name' => 'Тропические фрукты',
            'code' => '5',
            'type_id' => '2',
            'slug' => 'exotic-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Виноград',
            'code' => '6',
            'type_id' => '2',
            'slug' => 'exotic-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Яблоки',
            'code' => '7',
            'type_id' => '2',
            'slug' => 'exotic-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Бахчевые',
            'code' => '8',
            'type_id' => '2',
            'slug' => 'exotic-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);








        DB::table('categories')->insert([
            'name' => 'Виноград',
            'code' => '9',
            'type_id' => '3',
            'slug' => 'premium-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Цитрусовые',
            'code' => '10',
            'type_id' => '3',
            'slug' => 'premium-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Ягоды',
            'code' => '11',
            'type_id' => '3',
            'slug' => 'premium-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Яблоки',
            'code' => '12',
            'type_id' => '3',
            'slug' => 'premium-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Бахчевые',
            'code' => '13',
            'type_id' => '3',
            'slug' => 'premium-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);












        DB::table('categories')->insert([
            'name' => 'Морковь, свекла',
            'code' => '14',
            'type_id' => '4',
             'slug' => 'premium-vegetables',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Картофель, батат',
            'code' => '15',
            'type_id' => '4',
             'slug' => 'premium-vegetables',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Огурцы',
            'code' => '16',
            'type_id' => '4',
             'slug' => 'premium-vegetables',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Помидоры',
            'code' => '17',
            'type_id' => '4',
             'slug' => 'premium-vegetables',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Перец',
            'code' => '18',
            'type_id' => '4',
             'slug' => 'premium-vegetables',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('categories')->insert([
            'name' => 'Кабачки, баклажаны',
            'code' => '19',
            'type_id' => '4',
             'slug' => 'premium-vegetables',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
