<?php

namespace App\Repositories\Wishlist;

use App\Repositories\Wishlist\WishlistRepositoryInterface;
use App\Entity\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WishlistRepository implements WishlistRepositoryInterface
{
    public function getProductWishlist()
    {
        $id = Auth::user()->id;
        //$id = $user->id;
        return Wishlist::where('user_id', $id)->with('products')->has('products')->get();
    }
    public function saveProductWishlist(Request $request)
    {
        $wishlist = Wishlist::create([
            'product_id' => $request->product_id,
            'user_id' => Auth::user()->id,
            'quantity' => $request->quantity,
        ]);

        return response()->json([
            'status' => (bool)  $wishlist,
            'data' =>  $wishlist,
            'message' =>  $wishlist ? 'Order Created!' : 'Error Creating Order',
        ]);
    }
    public function updateProductWishlist(Request $request, $id)
    {
        $wishlist = Wishlist::find($id);
        $wishlist->update($request->only(['quantity']));

        return response()->json([
            'status' => $wishlist,
            'message' => $wishlist ? 'Order Updated!' : 'Error Updating Order'
        ]);
    }
    public function deleteProductWishlist($id)
    {
        $wishlist = Wishlist::find($id);
        $wishlist->delete();
        return response()->json('The post successfully deleted');
    }
}
