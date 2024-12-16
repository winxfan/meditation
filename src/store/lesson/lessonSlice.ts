import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { initialState } from './data'
import { LoadingStatus } from "@/constants";
import {HttpResponse, ILesson, TestScoringPointsData} from "@/utils/types";
import {fetchLesson, fetchTestScorePoints, TestScorePointsProps} from "@/utils/api/lesson";

export type LessonState = {
  status: LoadingStatus,
  testScoreStatus: LoadingStatus,
  data: Record<string, ILesson>;
  testScoreData: Record<string, TestScoringPointsData>,
}

export const getLesson = createAsyncThunk<HttpResponse<ILesson>, {id: string}>('lesson/get',async ({id}) => {
  const {data} = await fetchLesson(id)
  return data;
});

export const getTestScorePoints = createAsyncThunk<HttpResponse<TestScoringPointsData>, TestScorePointsProps>('test/scorePoints',async (props) => {
  const {data} = await fetchTestScorePoints(props);
  return data;
});

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {
    resetTestScore: (state, action: PayloadAction<{id: string}>) => {
      const {id} = action.payload;
      console.log({id})
      state.testScoreStatus = LoadingStatus.none;
      state.testScoreData[id] = undefined;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTestScorePoints.pending, (state) => {
      state.testScoreStatus = LoadingStatus.pending;
    }),
    builder.addCase(getTestScorePoints.rejected, (state) => {
      state.testScoreStatus = LoadingStatus.error;
    }),
    builder.addCase(getTestScorePoints.fulfilled, (state, action) => {
      state.testScoreStatus = LoadingStatus.success;
      const {id} = action.meta.arg;
      const {data} = action.payload;

      state.testScoreData[id] = data;
    }),

    builder.addCase(getLesson.pending, (state) => {
      state.status = LoadingStatus.pending;
    }),
    builder.addCase(getLesson.rejected, (state) => {
      state.status = LoadingStatus.error;
    }),
    builder.addCase(getLesson.fulfilled, (state, action) => {
      state.status = LoadingStatus.success;
      const {_id} = action.payload.data;

      if (_id) {
        state.data[_id] = action.payload.data;
      }
    })
  },
})

export const {
  resetTestScore
} = lessonSlice.actions

export default lessonSlice.reducer
