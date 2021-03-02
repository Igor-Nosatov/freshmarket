<?php
namespace App\Repositories\Home;

use App\Entity\Post;
use App\Entity\Product;
use App\Repositories\Home\HomeRepositoryInterface;

class HomeRepository  implements HomeRepositoryInterface 
{
    public function getProducts()
    {
       return Product::take(4)
       ->inRandomOrder()->get();
    }

    public function getRandomPosts()
    {
        return Post::take(4)->inRandomOrder()->get();
    }
}

		