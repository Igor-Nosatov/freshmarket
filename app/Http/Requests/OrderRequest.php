<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{
    public function rules():array
    {
        return [
            'name' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'receiver_name' => 'required',
            'receiver_phone' => 'required',
            'city' => 'required',
            'street' => 'required',
            'house_number' => 'required',
            'apartament_number' => 'required',
            'floor' => 'required',
        ];
    }
}
