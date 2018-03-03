<?php

namespace App\Http\Controllers;

use App\User;

class AuthController extends Controller
{
    public function registerForm()
    {
        return view('pages.register');
    }

    public function register()
    {
        request()->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);
        $user = User::add(request()->all());
        $user->setPasswordAttribute(request()->get('password'));
        return redirect('/login')->with('flash', 'Your thread has been published!');
        ;
    }

    public function loginForm()
    {
        return view('pages.login');
    }
}
