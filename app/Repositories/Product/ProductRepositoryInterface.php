<?php
namespace App\Repositories\Product;
use Illuminate\Http\Request;
use App\Entity\Product;

interface ProductRepositoryInterface
{
    public function productShow($title);
    public function productUpdateUnits(Request $request, Product $product);
} 