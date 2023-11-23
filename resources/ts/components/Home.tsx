import { Grid } from '@material-ui/core';
import React from 'react'
import RoomBoard from './RoomBoard';
import RankingBoard from './RankingBoard';

const Home: React.FC = () => {

  return (
    <div>
      <h1>Discuss</h1>
      <Grid container>
        <Grid item xs={12}>
          <RoomBoard />
        </Grid>
        {/* <Grid item xs={4}>
          <RankingBoard />
        </Grid> */}
      </Grid>
    </div>
  )
}

export default Home;