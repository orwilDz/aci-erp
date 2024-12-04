<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboadController extends Controller
{
    public function index() {
        return Inertia::render('Dashboard');
    }
}
