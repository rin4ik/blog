<?php

namespace App\Providers;

use App\Comment;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer(
            'layouts.right-sidebar',
            'App\Http\Composers\Views'
        );
        view()->composer(
            'admin.layouts._leftNav',
            function ($view) {
                $view->with('count', Comment::where('status', 0)->count());
            }
        );

        \Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->isLocal()) {
            $this->app->register(\Barryvdh\Debugbar\ServiceProvider::class);
        }
    }
}
