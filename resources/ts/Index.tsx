import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Room } from '../types/apiTypes';
import Rooms from './components/Rooms';

const Index: React.FC = () => {

  const metaCsrfToken = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement;
  const csrfToken = useRef<string>(metaCsrfToken.content);

  return (
    <Rooms />
  )
}


const container = document.getElementById('index');
if (container) {
  const root = createRoot(container);
  root.render(<Index />);
}
