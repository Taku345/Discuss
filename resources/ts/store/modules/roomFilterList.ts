import axios, { AxiosResponse } from 'axios';
import { Room } from '../../../types/apiTypes';
import { RoomFilter, RoomFilterList } from '../../../types/types';
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initRoomFilterList = createAsyncThunk<Room[]>(
  'initRoomFilterList/get',
  async (_payload) => {
    const res: AxiosResponse<Room[]> = await axios.get<Room[]>(`http://localhost/api/rooms`);
    return res.data;
  }
)

const roomFilterList = createSlice({
  name: 'roomFilterList',
  initialState: { ...(new RoomFilterList()) },
  reducers: {
    changedFilter(state, { type, payload }) {
      state.filter = { ...state.filter, ...payload };
      state.filteredList = state.list.filter((room) => {
        return //ここにfilter処理、filter関数の書き方確認
      });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(initRoomFilterList.pending, (state) => {
        state.status = 'Loading...';
      })
      .addCase(initRoomFilterList.fulfilled, (state, action) => {
        state.status = '取得済'
        state.list = action.payload;
        state.filteredList = action.payload;
      })
      .addCase(initRoomFilterList.rejected, (state) => {
        state.status = '取得エラー'
      })
  }
});

const { changedFilter } = roomFilterList.actions;
export { changedFilter, initRoomFilterList };
export default roomFilterList.reducer