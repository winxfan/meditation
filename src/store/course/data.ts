import { CourseState } from "./courseSlice";
import { LoadingStatus } from "../../constants";
import {Access, IModule} from "@/utils/types";

export const initialState: CourseState = {
  status: LoadingStatus.none,
  data: {
    _id: '',
    avatar: '',
    title: '',
    description: '',
    access: 'free',
    price: 0,
    modules: [],
  }
}

// export const initialState = isBasketState(JSON.parse(localStorage.getItem('basket') as string))
//   ? JSON.parse(localStorage.getItem('basket') as string)
//   : initialData
