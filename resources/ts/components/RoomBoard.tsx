import React from 'react'
import RoomFilterPanel from './RoomFilterPanel'
import RoomList from './RoomList'
import { Grid, Typography } from '@mui/material'

export default function RoomBorad() {
  return (
    <div>
      <Typography variant="h5">ルーム一覧</Typography>
      <RoomFilterPanel />
      <RoomList />
    </div>
  )
}
