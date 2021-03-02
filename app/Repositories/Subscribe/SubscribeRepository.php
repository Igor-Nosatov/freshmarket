<?php
namespace App\Repositories\Subscribe;

use App\Entity\Subscribe;
use Illuminate\Http\Request;
use App\Repositories\Subscribe\SubscribeRepositoryInterface;
use Illuminate\Support\Facades\Auth;

class SubscribeRepository implements SubscribeRepositoryInterface
{
    public function addSubscriber(Subscribe $subscribe):Subscribe
    {
        $subscribe->save();
        return $subscribe;
    }
}