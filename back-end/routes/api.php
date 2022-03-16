<?php

use App\Http\Controllers\Api\V1\LoginController;
use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['prefix' => 'v1', 'as' => 'api.'], function () {
    Route::post('/login', [LoginController::class, 'login'])->name('login');
});

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::group(['prefix' => 'v1', 'as' => 'api.'], function () {
        Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
        Route::get('/users',  [UserController::class, 'index'])->name('index');
        Route::post('/users',  [UserController::class, 'store'])->name('store');
        Route::put('/users/{user}',  [UserController::class, 'update'])->name('update');
        Route::delete('/users/{user}',  [UserController::class, 'destroy'])->name('destroy');
        route::get('/users/edit/{user}',  [UserController::class, 'edit'])->name('edit');
    });
});

Route::fallback(function () {
    return response()->json([
        'message' => 'Page Not Found. If error persists, contact admin@gmail.com'
    ], 404);
});
