<?php

namespace App\Http\Controllers;

use App\Entity\Product;
use App\Actions\Product\ProductShowAction;
use App\Actions\Product\ProducUpdateUnitsAction;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private $productShow;
    private $productUpdate;

    public function __construct(
        ProductShowAction $productShow,
        ProducUpdateUnitsAction $productUpdate
    )
    {
        $this->productShow = $productShow;
        $this->productUpdate = $productUpdate;
    }

    public function show($title){
        $data['product'] =  $this->productShow->execute($title);
        return response()->json($data);
    }

    public function updateUnits(Request $request, Product $product)
    {
       return $this->productUpdate->execute($request,$product);
    }
}
