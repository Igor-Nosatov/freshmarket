<?php

declare (strict_types = 1);

namespace App\Actions\Wishlist;
use Illuminate\Http\Request;
use App\Repositories\Wishlist\WishlistRepositoryInterface;

final class DeleteWishlistAction
{
    private $wishlistRepository;

    public function __construct(WishlistRepositoryInterface $wishlistRepository)
    {
        $this->wishlistRepository = $wishlistRepository;
    }

    public function execute($id)
    {
        return $this->wishlistRepository->deleteProductWishlist($id); 
    }
}
