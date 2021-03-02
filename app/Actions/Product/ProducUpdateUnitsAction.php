<?php

declare (strict_types = 1);

namespace App\Actions\Product;

use App\Entity\Product;
use Illuminate\Http\Request;
use App\Repositories\Product\ProductRepositoryInterface;

final class ProducUpdateUnitsAction
{
    private $productRepository;

    public function __construct(ProductRepositoryInterface $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function execute(Request $request, Product $product)
    {
        return $this->productRepository->productUpdateUnits($request, $product);
    }
}
