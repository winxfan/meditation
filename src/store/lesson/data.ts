import {LessonState} from "./lessonSlice";
import {LoadingStatus} from "../../constants";
import {ICommentProps} from "@/features/Commentaries/components/Comment";

export const initialState: LessonState = {
  status: LoadingStatus.none,
  data: {},
  createCommentStatus: LoadingStatus.none,
  createCommentData: null,
  getCommentsStatus: LoadingStatus.none,
  getCommentsData: [],
}
