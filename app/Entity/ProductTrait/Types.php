<?php
namespace App\Entity\ProductTrait;

use App\Entity\Type;

trait Types
{
    public function type()
    {
      return $this->belongsTo(Type::class);
    }
}