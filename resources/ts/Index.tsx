import React, { useRef } from 'react';
import Rooms from './components/Rooms';
//Reactのバージョンダウン対応
// import { createRoot } from 'react-dom/client'; //react18から
import { render } from 'react-dom';

const Index: React.FC = () => {

  const metaCsrfToken = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement;
  const csrfToken = useRef<string>(metaCsrfToken.content);

  return (
    <Rooms />
  )
}

const container = document.getElementById('index');
if (container) {
  //Reactのバージョンダウン対応
  // const root = createRoot(container);
  // root.render(<Index />);
  render(<Index />, container);
}
