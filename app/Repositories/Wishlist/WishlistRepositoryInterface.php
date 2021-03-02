<?php
namespace App\Repositories\Wishlist;
use Illuminate\Http\Request;

interface WishlistRepositoryInterface
{
     public function getProductWishlist();
     public function saveProductWishlist(Request $request);
     public function updateProductWishlist(Request $request, $id);
     public function deleteProductWishlist($id); 
}