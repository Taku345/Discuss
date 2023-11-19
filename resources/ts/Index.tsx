import React, { useRef } from 'react';
import Rooms from './components/Rooms';
//Reactのバージョンダウン対応
// import { createRoot } from 'react-dom/client'; //react18から
import { render } from 'react-dom';
import Chat from './components/Chat';
import '../css/index.css';
import { Card, CardContent, Grid } from '@material-ui/core';

const Index: React.FC = () => {

  const metaCsrfToken = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement;
  const csrfToken = useRef<string>(metaCsrfToken.content);

  return (
    <div className='root'>
      <Grid container>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Rooms />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          {/* <Card>
            <CardContent> */}
          <Chat />
          {/* </CardContent>
          </Card> */}
        </Grid>
      </Grid>

    </div>
  )
}

const container = document.getElementById('index');
if (container) {
  //Reactのバージョンダウン対応
  // const root = createRoot(container);
  // root.render(<Index />);
  render(<Index />, container);
}
