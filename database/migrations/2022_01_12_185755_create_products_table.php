<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('title', 100)->nullable();
            $table->string('slug', 100)->nullable();
            $table->string('code', 100);
            $table->float('price', 8, 2);
            $table->string('img_url');
            $table->text('description')->nullable();
            $table->unsignedBigInteger('type_id');
            $table->foreign('type_id')
              ->references('id')->on('types')
              ->onDelete('cascade');
            $table->unsignedBigInteger('producer_id');
            $table->foreign('producer_id')
              ->references('id')->on('producers')
              ->onDelete('cascade');
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')
              ->references('id')->on('categories')
              ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
