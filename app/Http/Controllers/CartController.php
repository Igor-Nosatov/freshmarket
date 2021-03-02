<?php

namespace App\Http\Controllers;

use App\Actions\Cart\DeleteCartAction;
use App\Actions\Cart\GetCartAction;
use App\Actions\Cart\SaveCartAction;
use App\Actions\Cart\SaveCustomerAction;
use App\Actions\Cart\UpdateCartAction;
use Illuminate\Http\Request;

class CartController extends Controller
{
    private $getCart;
    private $saveCart;
    private $updateCart;
    private $deleteCart;

    public function __construct(
        GetCartAction $getCart,
        SaveCartAction $saveCart,
        UpdateCartAction $updateCart,
        DeleteCartAction $deleteCart
    ) {
        $this->getCart = $getCart;
        $this->saveCart = $saveCart;
        $this->updateCart = $updateCart;
        $this->deleteCart = $deleteCart;
    }

    public function index()
    {
        $data['carts'] = $this->getCart->execute();
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $this->saveCart->execute($request);
        return response()->json('Товар добавлено', 200);
    }

    public function update(Request $request, $id)
    {
        $this->updateCart->execute($request, $id);
        return response()->json('Товар отредактировано', 200);
    }

    public function delete($id)
    {
        $this->deleteCart->execute($id);
        return response()->json('Товар удалено', 200);
    }
}
