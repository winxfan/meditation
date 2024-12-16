import { Statuses } from "../components/Status";

interface GetModuleStatusProps {
  index: number,
  currentIndex: number,
  studyHasStarted: boolean
}

export const getModuleStatus = (props: GetModuleStatusProps): Statuses => {
  const {index, currentIndex, studyHasStarted} = props;

  if (index < currentIndex) {
    return 'passed'
  }

  if (index === currentIndex) {
    if (studyHasStarted) {
      return 'current'
    } else {
      return 'open'
    }
  }

  return 'locked'
}

interface GetLessonStatusProps {
  index: number,
  currentIndex: number,
  moduleStatus: Statuses;
}

export const getLessonStatus = (props: GetLessonStatusProps): Statuses => {
  const {index, currentIndex, moduleStatus} = props;

  if (moduleStatus === 'passed') {
    return 'passed';
  } else if (moduleStatus === 'locked') {
    return 'locked';
  } else if (moduleStatus === 'current') {
    if (index === currentIndex) {
      if (index < currentIndex) {
        return 'passed'
      } else if (index === currentIndex) {
        return 'current'
      } else {
        return 'locked'
      }
    }
  } else {
    if (index === 0) {
      return "open"
    } else {
      return 'locked'
    }
  }

  return 'locked'
}
