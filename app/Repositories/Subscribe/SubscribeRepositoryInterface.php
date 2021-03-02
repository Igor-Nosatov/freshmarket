<?php
namespace App\Repositories\Subscribe;

use App\Entity\Subscribe;

interface SubscribeRepositoryInterface
{
    public function addSubscriber(Subscribe $subscribe):Subscribe;
}