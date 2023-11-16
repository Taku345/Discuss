<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Laravel</title>
  @viteReactRefresh
  {{-- @vite(['resources/sass/app.scss', 'resources/ts/Index.tsx']) --}}
  @vite(['resources/ts/Index.tsx'])
</head>

<body>
  <div id="index"></div>

  <!-- 直接ビュー内で find メソッドを呼び出し確認する用 -->
  @php
    // $user = \App\Models\User::find(1);
    // $rooms = \App\Models\User::find(3)
    //     ->rooms()
    //     ->get();
    // $instance = new \App\Http\Controllers\RoomController();
    // $tmp = \App\Models\Room::all(); // 自動でログイン中のユーザー
  @endphp

  <!-- 取得したユーザーの名前を表示 -->
  <h1>test</h1>
  {{-- <h1>{{ $user->name }}</h1>
  <h1>{{ dd($rooms) }}</h1> --}}
  {{-- <h1>{{ dd($tmp) }}</h1> --}}



</body>

</html>
