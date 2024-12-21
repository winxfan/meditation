import { UserState } from "./userSlice";
import { LoadingStatus } from "../../constants";

// todo delete in prod
export const DEFAULT_COURSE_ID = '669d6cc1e974ad807227514f';
export const DEFAULT_Auth_Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9-_-eyJpZCI6NzQ0NTI5ODk5LCJ1c2VybmFtZSI6IndpbnhmYW4iLCJmaXJzdF9uYW1lIjoi0JTQsNC90LjQuyIsImlhdCI6MTcyNjQwMjI2MSwiZXhwIjoxNzI4OTk0MjYxfQ-_-StADCG7fC8lQ3QVBlIhKUA_bObfQeYoJVbjgSvvScFQ';

export const initialState: UserState = {
  status: LoadingStatus.none,
  startStudyStatus: LoadingStatus.none,
  nextLessonStatus: LoadingStatus.none,
  isAuthorized: false,
  data: {
    _id: DEFAULT_COURSE_ID,
    id: 0,
    username: '',
    first_name: "",
    studyHasStarted: false,
  }
}