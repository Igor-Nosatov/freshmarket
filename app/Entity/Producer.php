<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;

class Producer extends Model
{
    protected $table = 'producers';

    protected $fillable = [
        'name', 'slug'
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
