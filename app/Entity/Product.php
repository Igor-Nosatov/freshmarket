<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use ProductTrait\Categories;
    use ProductTrait\Producers;
    use ProductTrait\ScopeWithFilters;
    use ProductTrait\Types;

    protected $table = 'products';

    protected $fillable = [
        'name',
        'code',
        'price',
        'img_url',
        'description',
        'type_id',
        'producer_id',
        'category_id',
    ];

    const PRICES = [
        'Меньше чем 10 лей',
        'От 10 до 15 лей',
        'От 15 до 20 лей',
        'Больше чем 20 лей',
    ];
}
