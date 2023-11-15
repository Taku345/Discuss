<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class RoomUser extends Model
{
  use HasFactory;
  protected $table = 'room_user';
  protected $primaryKey = ['user_id', 'room_id'];
  // branch テスト
  // モデル名の変更テスト
  public $incrementing = false;

  public function messages(): HasMany
  {
    return $this->hasMany(
      Massage::class,
      ['user_id', 'room_id'],
      ['user_id', 'room_id']
    );
  }
}
