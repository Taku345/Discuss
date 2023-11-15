<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Room;
use App\Models\Room_User;
use App\Models\RoomUser;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {


    $users = User::factory(10)->create();

    $rooms = Room::factory(50)
      ->recycle($users)
      ->create();

    $room_users = Room_User::factory(1)
      ->recycle($users)
      ->recycle($rooms)
      ->create();

    // \App\Models\User::factory()->create([
    //     'name' => 'Test User',
    //     'email' => 'test@example.com',
    // ]);
  }
}
