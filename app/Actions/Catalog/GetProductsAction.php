<?php

declare (strict_types = 1);

namespace App\Actions\Catalog;
use Illuminate\Http\Request;
use App\Entity\Category;
use App\Entity\Producer;
use App\Entity\Product;
use App\Entity\Type;
use App\Repositories\Catalog\CatalogRepositoryInterface;

final class GetProductsAction
{ 
    private $catalogRepository;

    public function __construct(CatalogRepositoryInterface $catalogRepository)
    {
        $this->catalogRepository = $catalogRepository;
    }

    public function execute($slug)
    {
        $sortField = request('sort_field', 'price');
        if (!in_array($sortField, ['name', 'price'])) {
            $sortField = 'price';
        }
        $sortDirection = request('sort_direction', 'desc');
        if (!in_array($sortDirection, ['asc', 'desc'])) {
            $sortDirection = 'asc';
        }

        return $this->catalogRepository->getProduct()->withFilters(
            request()->input('prices', []),
            request()->input('categories', []),
            request()->input('producers', [])
        )->orderBy($sortField, $sortDirection)
            ->with('categories')->has('categories')
            ->with('producers')->has('producers')
            ->with('type')->has('type')
            ->where('slug', $slug)
            ->paginate(6);
    }
}
