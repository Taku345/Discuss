<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Room;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room_User>
 */
class Room_UserFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'user_id' => User::factory(),
      'room_id' => Room::factory(),
      'user_type' => '0', //ホスト、ゲスト、オブザーバー
      'joined_at' => $this->faker->dateTimeBetween('-30 days', '-15 days'),
      'last_read_at' => $this->faker->dateTimeBetween('-16 days', '+15 days'),

    ];
  }
}
