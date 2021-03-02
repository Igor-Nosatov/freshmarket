<?php

declare (strict_types = 1);

namespace App\Actions\Home;

use App\Repositories\Home\HomeRepositoryInterface;

final class GetProductDataAction
{
    private $homeRepository;

    public function __construct(HomeRepositoryInterface $homeRepository)
    {
        $this->homeRepository = $homeRepository;
    }

    public function execute()
    {   
        $data['products'] = $this->homeRepository->getProducts();
        $data['posts'] = $this->homeRepository->getRandomPosts();
        return $data;
    }
}
