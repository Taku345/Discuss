<?php

// use App\Http\Controllers\RoomController;
use App\Http\Controllers\Api\RoomController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//   return $request->user();
// });


Route::middleware('auth:sanctum')->group(function () {
  Route::get('/user', function (Request $request) {
    return $request->user();
  });
});

Route::apiResource('/rooms', RoomController::class);
//以下は古い書き方？viteを使わない場合の？なのかも？
// Route::group(['middleware' => ['api', 'cors']], function () {
//   Route::options('rooms', function () {
//     return response()->json();
//   });
//   Route::resource('rooms', RoomController::class);
//   // Route::resource('rooms', 'Api\RoomController'); //なぜかエラー、どこかでApiフォルダも認識するなどの設定が必要？
// });
