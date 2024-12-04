<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthentificationRequest;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    function index () {
        if (Auth::check()) {
            return redirect()->route('dashboard');
        }
        return Inertia::render('Login');
    }

    function login (AuthentificationRequest $request) {
        $credentials = $request->validated();

        if (Auth::attempt($credentials)) {
            return redirect()->route('dashboard');
        }

        return back()->withErrors('email ou mot de pass est incorrect !');
    }

}
