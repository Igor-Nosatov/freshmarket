<?php

namespace App\Repositories\Catalog;

use App\Repositories\Catalog\CatalogRepositoryInterface;
use App\Entity\Category;
use App\Entity\Producer;
use App\Entity\Product;
use App\Entity\Type;

class CatalogRepository  implements CatalogRepositoryInterface
{
    public function getProduct()
    { 
        return Product::query();
    }

    public function getTypes()
    {
        return Type::query();
    }

    public function getCategory()
    {
        return Category::query();
    }

    public function getProducer()
    {
        return  Producer::query();
    }
    
}
