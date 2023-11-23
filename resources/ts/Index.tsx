import React, { useRef } from 'react';
import Rooms from './components/Rooms';
//Reactのバージョンダウン対応
// import { createRoot } from 'react-dom/client'; //react18から
import { render } from 'react-dom';
import Chat from './components/Chat';
import '../css/index.css';
import { Card, CardContent, CssBaseline, Grid } from '@material-ui/core';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store';

const Index: React.FC = () => {

  const metaCsrfToken = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement;
  const csrfToken = useRef<string>(metaCsrfToken.content);

  return (
    <div className='root'>
      <Provider store={store}>
        <CssBaseline />
        <Grid container>
          <Grid item xs={3}>
            <Rooms />
          </Grid>
          <Grid item xs={9}>
            <Home />
          </Grid>
        </Grid>
      </Provider>
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
