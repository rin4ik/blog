<?php

namespace App\Http\Composers;

use App\Tag;
use App\Post;
use App\Category;
use Illuminate\View\View;

class Views
{
    /**
     * Create a new profile composer.
     *
     * @param  UserRepository  $users
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $view->with('categories', Category::orderBy('title', 'asc')->get());

        $view->with('tags', Tag::all());

        $view->with('popular', Post::orderBy('views', 'desc')->take(3)->get());

        $view->with('featured', Post::where('is_featured', 1)->take(3)->get());

        $view->with('recent', Post::orderBy('date', 'desc')->take(3)->get());
    }
}
