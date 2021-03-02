<?php

namespace App\Http\Controllers;

use App\Actions\Subscribe\AddSubscriberAction;
use App\Actions\Subscribe\GetSubscriberAction;
use App\Entity\Cart;
use App\Entity\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubscribeController extends Controller
{
    private $addSubscriber;

    public function __construct(
        AddSubscriberAction $addSubscriber,
        )
    {
        $this->addSubscriber = $addSubscriber;
    }

    public function store(Request $request)
    {
        return $this->addSubscriber->execute($request);
    }
}
