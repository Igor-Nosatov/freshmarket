<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'id',
        'name',
        'title',
        'img_url',
        'description',
        'created_at'
    ];
}
