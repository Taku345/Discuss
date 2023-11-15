<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Room_User extends Model
{
  use HasFactory;
  protected $table = 'room_user';
  // branch テスト

  public function messages(): HasMany
  {
    return $this->hasMany(
      Massage::class,
      ['user_id', 'room_id'],
      ['user_id', 'room_id']
    );
  }
}