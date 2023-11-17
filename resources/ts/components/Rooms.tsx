import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Room } from '../../types/apiTypes'

const Rooms: React.FC = () => {

  const metaCsrfToken = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement;
  const csrfToken = useRef<string>(metaCsrfToken.content);

  const [room, setRoom] = useState<Room>();

  // 先ほど作成したLaravelのAPIのURL
  const url = "http://localhost/api/rooms/22";

  useEffect(() => {
    (async () => {
      try {
        const res: AxiosResponse<Room> = await axios.get<Room>(url);
        setRoom(res.data);
        return;
      } catch (e) {
        return e;
      }
    })();
  }, []);

  return (
    <div>
      <p>ルーム取得テスト</p>
      {room && <>{Object.entries(room).map(([key, value]) => <p key={key}>{key}:{value}</p>)}</>}

      <form action="/api/rooms/33" method="get">
        <input type="hidden" name="_token" value={csrfToken.current} />
        <input type="number" name="id" />
        <button type="submit">登録</button>
      </form>
    </div>
  );
}

export default Rooms;