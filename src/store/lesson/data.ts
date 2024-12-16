import {LessonState} from "./lessonSlice";
import {LoadingStatus} from "../../constants";

export const initialState: LessonState = {
  status: LoadingStatus.none,
  testScoreStatus: LoadingStatus.none,
  data: {},
  testScoreData: {}
}
