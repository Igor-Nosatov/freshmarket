<?php

use Illuminate\Support\Facades\Route;

Route::post('login', 'AuthController@login')->name('login');
Route::post('register', 'AuthController@register');

Route::middleware('auth:api')->group(function () {
    Route::get('/user', 'AuthController@getAuthUser');
    Route::get('/logout', 'AuthController@logout');
});

Route::get('/', 'HomeController@index');
Route::get('/types', 'TypeController@index');
Route::get('/catalog/{slug}', 'CatalogController@show');

Route::middleware('auth:api')->group(function () {
    Route::get('/catalog/product/{title}', 'ProductController@show');

    Route::group([
        'prefix' => '/cart',
    ], function () {
        Route::get('/', 'CartController@index');
        Route::post('/add', 'CartController@store');
        Route::post('/update/{id}', 'CartController@update');
        Route::delete('/delete/{id}', 'CartController@delete');
    });

    Route::post('/checkout/add', 'CheckoutController@store');

    Route::group([
        'prefix' => '/wishlist',
    ], function () {
        Route::get('/', 'WishlistController@index');
        Route::post('/add', 'WishlistController@store');
        Route::post('/update/{id}', 'WishlistController@update');
        Route::delete('/delete/{id}', 'WishlistController@delete');
    });
    Route::group([
        'prefix' => '/subscribe',
    ], function () {
        Route::get('/get', 'SubscribeController@index');
        Route::post('/add', 'SubscribeController@store');
    });
    Route::post('/contact/add', 'ContactController@store');
});

Route::group([
    'prefix' => '/blog',
], function () {
    Route::get('/', 'PostController@index');
    Route::get('/{title}', 'PostController@show');
});

Route::get('/mila', 'SubscribeController@get');
