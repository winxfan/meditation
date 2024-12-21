import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { initialState } from './data'
import { LoadingStatus } from "@/constants";
import {HttpResponse,} from "@/utils/types";
import {
  fetchCreateComment,
  fetchGetComments,
  fetchLesson,
} from "@/utils/api/lesson";
import {ICommentProps} from "@/features/Commentaries/components/Comment";

export type LessonState = {
  status: LoadingStatus,
  createCommentStatus: LoadingStatus,
  createCommentData: ICommentProps | null,
  getCommentsStatus: LoadingStatus,
  getCommentsData: ICommentProps[],
}

export const getComments = createAsyncThunk<HttpResponse<ICommentProps[]>, {lessonId: number}>('comments/get',async ({lessonId}) => {
  const {data} = await fetchGetComments({lessonId})
  return data;
});

export const createComment = createAsyncThunk<HttpResponse<ICommentProps[]>, ICommentProps & {lessonId: number}>('comment/create',async (props) => {
  const {data} = await fetchCreateComment(props)
  return data;
});

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {
    resetCreateCommentStatus: (state) => {
      state.createCommentStatus = LoadingStatus.none;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createComment.pending, (state) => {
      state.createCommentStatus = LoadingStatus.pending;
    }),
    builder.addCase(createComment.rejected, (state) => {
      state.createCommentStatus = LoadingStatus.error;
    }),
    builder.addCase(createComment.fulfilled, (state, action) => {
      state.createCommentStatus = LoadingStatus.success;
      state.createCommentData = action.payload.data as any;
    }),

    builder.addCase(getComments.pending, (state) => {
      state.getCommentsStatus = LoadingStatus.pending;
    }),
    builder.addCase(getComments.rejected, (state) => {
      state.getCommentsStatus = LoadingStatus.error;
    }),
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.getCommentsStatus = LoadingStatus.success;
      state.getCommentsData = action.payload.data;
    })
  },
})

export const {
  resetCreateCommentStatus,
} = lessonSlice.actions

export default lessonSlice.reducer
