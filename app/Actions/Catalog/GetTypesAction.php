<?php

declare (strict_types = 1);

namespace App\Actions\Catalog;
use Illuminate\Http\Request;
use App\Repositories\Catalog\CatalogRepositoryInterface;

final class GetTypesAction
{
    private $catalogRepository;

    public function __construct(CatalogRepositoryInterface $catalogRepository)
    {
        $this->catalogRepository = $catalogRepository;
    }

    public function execute($slug)
    {
        return $this->catalogRepository->getTypes()->where('slug', $slug)->get();
    }
}
