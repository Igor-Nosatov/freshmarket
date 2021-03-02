<?php
namespace App\Entity\ProductTrait;

use App\Entity\Producer;

trait Producers
{
    public function producers()
    {
      return $this->belongsTo(Producer::class, 'producer_id');
    }
}