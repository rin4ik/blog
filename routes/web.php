<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');
Route::get('/post/{slug}', 'HomeController@show')->name('post.show');
Route::get('/tag/{slug}', 'HomeController@tag')->name('tag.show');
Route::get('/category/{slug}', 'HomeController@category')->name('category.show');
Route::get('/register', 'AuthController@registerForm');
Route::get('/profile/{name}', 'ProfileController@index')->name('profile');
Route::post('/profile/{name}', 'ProfileController@update');
Route::post('/register', 'AuthController@register');

Route::post('/comment', 'CommentsController@store')->middleware('auth');

Route::get('/login', 'AuthController@loginForm')->name('login');
    Route::post('/login', 'AuthController@login');
    Route::get('/logout', 'AuthController@logout');

Route::group(['prefix' => 'admin', 'namespace' => 'Admin', 'middleware' => 'admins'], function () {
    Route::get('/', 'DashboardController@index');
    Route::resource('/tags', 'TagsController');
    Route::resource('/users', 'UsersController');
    Route::resource('/categories', 'CategoriesController');
    Route::resource('/posts', 'PostsController');
    Route::get('/comments', 'CommentsController@index');
    Route::get('/comments/toggle/{id}', 'CommentsController@toggle');
    Route::delete('/comments/{comment}/destroy', 'CommentsController@destroy')->name('comments.destroy');
});
