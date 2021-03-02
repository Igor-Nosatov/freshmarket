<?php

declare (strict_types = 1);

namespace App\Actions\Catalog;

final class GetPricesAction
{
    public function execute($priceService)
    {
        return $priceService->getPrices( 
            request()->input('prices', []),
            request()->input('categories', []),
            request()->input('producers', [])
        );
    }
}

