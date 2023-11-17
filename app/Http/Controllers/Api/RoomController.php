<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
  public function index()
  {
    $json = Room::all();
    return response()->json(
      $json,
      200,
      [],
      JSON_UNESCAPED_UNICODE //文字化け対策
    );
  }

  public function create()
  {
    //
  }

  public function store(Request $request)
  {
    //
  }

  public function show($id)
  {
    $json = Room::find($id);
    return response()->json(
      $json,
      200,
      [],
      JSON_UNESCAPED_UNICODE //文字化け対策
    );
  }

  public function edit($id)
  {
    //
  }

  public function update(Request $request, $id)
  {
    //
  }

  public function destroy($id)
  {
    //
  }
}
