<?php

namespace App\Http\Controllers;

use App\Actions\Checkout\CheckoutAction;
use Illuminate\Http\Request;
class CheckoutController extends Controller
{
    private $makeCheckout;

    public function __construct(CheckoutAction $makeCheckout)
    {
        $this->makeCheckout = $makeCheckout;
    }

    public function store(Request $request)
    {
        return $this->makeCheckout->execute($request);
    }
}
