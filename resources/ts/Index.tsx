import axios from 'axios';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const Index: React.FC = () => {

  // 先ほど作成したLaravelのAPIのURL
  const url = "http://localhost/api/rooms";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        console.log(res);
        return;
      } catch (e) {
        return e;
      }
    })();
  }, []);

  return (
    <div>
      Hello World!!!テストテスト
    </div>
  );
}


const container = document.getElementById('index');
if (container) {
  const root = createRoot(container);
  root.render(<Index />);
}
