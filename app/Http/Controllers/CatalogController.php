<?php

namespace App\Http\Controllers;

use App\Services\PriceService;
use App\Actions\Catalog\GetProductsAction;
use App\Actions\Catalog\GetPricesAction;
use App\Actions\Catalog\GetProducersAction;
use App\Actions\Catalog\GetCategoriesAction;
use App\Actions\Catalog\GetTypesAction;

class CatalogController extends Controller
{
    private $getProducts;
    private $getPrices;
    private $getProducers;
    private $getCategories;
    private $getTypes;

    public function __construct(
        GetProductsAction $getProducts,
        GetPricesAction $getPrices,
        GetProducersAction $getProducers,
        GetCategoriesAction $getCategories,
        GetTypesAction $getTypes
        )
    {
        $this->getProducts = $getProducts;
        $this->getPrices = $getPrices;
        $this->getProducers = $getProducers;
        $this->getCategories = $getCategories;
        $this->getTypes = $getTypes;
    }

    public function show($slug, PriceService $priceService)
    {
        $data['products'] = $this->getProducts->execute($slug);
        $data['types'] = $this->getTypes->execute($slug); 
        $data['categories'] = $this->getCategories->execute($slug);
        $data['producers'] = $this->getProducers->execute($slug);
        $data['prices']  = $this->getPrices->execute($priceService);
        return response()->json($data, 200);
    } 
}
