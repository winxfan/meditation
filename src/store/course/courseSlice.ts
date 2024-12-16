import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { initialState } from './data'
import { LoadingStatus } from "../../constants";
import {fetchCourse} from "../../utils/api/course";
import {HttpResponse, ICourse} from "../../utils/types";

export type CourseState = {
  status: LoadingStatus,
  data: ICourse;
}

export const getCourse = createAsyncThunk<HttpResponse<ICourse>, {id: string}>('course/get',async ({id}) => {
  const {data} = await fetchCourse(id)
  return data;
});

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourse (state, action: PayloadAction<CourseState>) {
      state = {...action.payload}
    },
    clearCourse (state) {
      state = initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCourse.pending, (state) => {
      state.status = LoadingStatus.pending;
    }),
      builder.addCase(getCourse.rejected, (state) => {
        state.status = LoadingStatus.error;
      }),
      builder.addCase(getCourse.fulfilled, (state, action) => {
        state.status = LoadingStatus.success;
        state.data = action.payload.data;
      })
  },
})

export const {setCourse, clearCourse} = courseSlice.actions

export default courseSlice.reducer
