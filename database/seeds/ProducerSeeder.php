<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class ProducerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('producers')->insert([
            'name' => 'Украина',
             'code' => '1',
             'type_id' => '1',
            'slug' => 'baking',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('producers')->insert([
            'name' => 'Польша',
             'code' => '2',
             'type_id' => '1',
            'slug' => 'baking',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('producers')->insert([
            'name' => 'Турция',
             'code' => '3',
             'type_id' => '1',
            'slug' => 'baking',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('producers')->insert([
            'name' => 'Германия',
             'code' => '4',
             'type_id' => '1',
            'slug' => 'baking',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);




        DB::table('producers')->insert([
            'name' => 'Украина',
             'code' => '5',
             'type_id' => '2',
             'slug' => 'exotic-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('producers')->insert([
            'name' => 'Польша',
             'code' => '6',
             'type_id' => '2',
             'slug' => 'exotic-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('producers')->insert([
            'name' => 'Турция',
             'code' => '7',
             'type_id' => '2',
             'slug' => 'exotic-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('producers')->insert([
            'name' => 'Германия',
             'code' => '8',
             'type_id' => '2',
             'slug' => 'exotic-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);






        DB::table('producers')->insert([
            'name' => 'Украина',
             'code' => '9',
             'type_id' => '3',
            'slug' => 'premium-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('producers')->insert([
            'name' => 'Польша',
             'code' => '10',
             'type_id' => '3',
            'slug' => 'premium-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('producers')->insert([
            'name' => 'Турция',
             'code' => '11',
             'type_id' => '3',
            'slug' => 'premium-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('producers')->insert([
            'name' => 'Германия',
             'code' => '12',
             'type_id' => '3',
            'slug' => 'premium-fruit',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);





        DB::table('producers')->insert([
            'name' => 'Украина',
             'code' => '13',
             'type_id' => '4',
             'slug' => 'premium-vegetables',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('producers')->insert([
            'name' => 'Польша',
             'code' => '14',
             'type_id' => '4',
             'slug' => 'premium-vegetables',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('producers')->insert([
            'name' => 'Турция',
             'code' => '15',
             'type_id' => '4',
             'slug' => 'premium-vegetables',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('producers')->insert([
            'name' => 'Германия',
             'code' => '16',
             'type_id' => '4',
             'slug' => 'premium-vegetables',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
    }
}
