<?php

namespace App\Repositories\Product;

use App\Entity\Product;
use Illuminate\Http\Request;

class ProductRepository implements ProductRepositoryInterface
{
    public function productShow($title)
    {
        return Product::with('categories')->has('categories')
            ->with('producers')->has('producers')
            ->where('title', $title)->first();
    }

    public function productUpdateUnits(Request $request, Product $product)
    {
        $product->units = $product->units + $request->get('units');
        return $product->save();   
    }
}
