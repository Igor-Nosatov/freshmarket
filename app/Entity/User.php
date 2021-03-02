<?php

namespace App\Entity;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use UserTrait\CartItems;
    use UserTrait\CheckoutItems;
    use UserTrait\Contacts;
    use UserTrait\Feedbacks;
    use UserTrait\GetJWTCustomClaims;
    use UserTrait\GetJWTIdentifier;
    use UserTrait\WishlistItems;

    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

}
