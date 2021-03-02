<?php
namespace App\Repositories\Catalog;

use App\Services\PriceService;

interface CatalogRepositoryInterface
{
   public function getProduct();
   public function getTypes();
   public function getCategory();
   public function getProducer();
}
 