<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\User;
use Symfony\Component\HttpFoundation\Request;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }

    public function registerForm()
    {
        return view('pages.register');
    }

    public function register()
    {
        request()->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6'
        ]);
        $user = User::add(request()->all());
        return redirect('/login')->with('flash', 'Your thread has been published!');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (auth()->attempt(request([
            'email',
            'password'
       ]))) {
            return redirect('/');
        }
        return back()->with('status', 'Неправильный логин или пароль');
    }

    public function loginForm()
    {
        return view('pages.login');
    }
}
