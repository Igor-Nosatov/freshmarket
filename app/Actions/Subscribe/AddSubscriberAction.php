<?php

declare (strict_types = 1);

namespace App\Actions\Subscribe;

use App\Entity\Subscribe;
use Illuminate\Http\Request;
use App\Repositories\Subscribe\SubscribeRepositoryInterface;
use Illuminate\Support\Facades\Auth;

final class AddSubscriberAction
{
    private $subscribeRepository;

    public function __construct(SubscribeRepositoryInterface $subscribeRepository)
    {
        $this->subscribeRepository = $subscribeRepository;
    }

    public function execute(Request $request)
    {   
      $subscribe = new Subscribe();
      $subscribe->email = $request->input('email');
      $subscribe->user_id = Auth::id();
      return $this->subscribeRepository->addSubscriber($subscribe);
    }
}
