import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './data'
import { LoadingStatus } from "@/constants";
import {HttpResponse, IUser, ITelegramUser} from "@/utils/types";
import {
  getUser,
} from "@/utils/api/auth";

export interface UserState {
  status: LoadingStatus,
  startStudyStatus: LoadingStatus,
  nextLessonStatus: LoadingStatus,
  isAuthorized: boolean,
  data: IUser
}

export interface UserAuthParams {
  data?: ITelegramUser,
  courseId: string
}

export const userAuth = createAsyncThunk<HttpResponse<IUser>, ITelegramUser>(
  'user/auth',async (props) => {
  const {data} = await getUser(props);
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser (state, action: PayloadAction<UserState>) {
      state = {...action.payload}
    },
    clearUser (state) {
      state = initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userAuth.pending, (state) => {
      state.status = LoadingStatus.pending;
    }),
    builder.addCase(userAuth.rejected, (state) => {
      state.status = LoadingStatus.error;
      state.isAuthorized = false;
    }),
    builder.addCase(userAuth.fulfilled, (state, action) => {
      state.status = LoadingStatus.success;
      state.isAuthorized = true;
      state.data = action.payload.data;
    })
    // builder.addCase(userNextLesson.pending, (state) => {
    //   state.nextLessonStatus = LoadingStatus.pending;
    // }),
    // builder.addCase(userNextLesson.rejected, (state) => {
    //   state.nextLessonStatus = LoadingStatus.error;
    // }),
    // builder.addCase(userNextLesson.fulfilled, (state, action) => {
    //   state.nextLessonStatus = LoadingStatus.success;
    //   // update
    //   // state.data.currentLesson = action.payload.data;
    // })
  },
})

export const {setUser, clearUser} = userSlice.actions

export default userSlice.reducer
