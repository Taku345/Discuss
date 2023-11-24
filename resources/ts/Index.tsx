import React, { useRef } from 'react';
//Reactのバージョンダウン対応
// import { createRoot } from 'react-dom/client'; //react18から
import { render } from 'react-dom';
import Chat from './components/Chat';
import '../css/index.css';
import { CssBaseline, Grid } from '@material-ui/core';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store';
import LeftDrawer, { DrawerHeader } from './components/LeftDrawer';
import { Box } from '@mui/material';

const Index: React.FC = () => {

  const metaCsrfToken = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement;
  const csrfToken = useRef<string>(metaCsrfToken.content);

  return (
    <div className='root'>
      <CssBaseline />
      <Provider store={store}>
        <Box sx={{ display: 'flex', flexGrow: 1 }} className='FlexBox1'>
          <LeftDrawer />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='FlexChild1' >
            <DrawerHeader />
            <Home />
          </Box>
        </Box>
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

export default Index;