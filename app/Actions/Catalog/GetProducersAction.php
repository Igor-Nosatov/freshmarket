<?php

declare(strict_types=1);

namespace App\Actions\Catalog;

use App\Repositories\Catalog\CatalogRepositoryInterface;

final class GetProducersAction
{
    private $catalogRepository;

    public function __construct(CatalogRepositoryInterface $catalogRepository)
    {
        $this->catalogRepository = $catalogRepository;
    }

    public function execute($slug)
    {
        return $this->catalogRepository->getProducer()
            ->where('slug', $slug)
            ->withCount(['products' => function ($query) {
                $query->withFilters(
                    request()->input('prices', []),
                    request()->input('categories', []),
                    request()->input('producers', [])
                );
            }])->get();
    }
}
