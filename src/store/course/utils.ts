import { CourseState } from './courseSlice'

// export const isBasketState = (obj: any): obj is BasketState => {
//   if (!obj) return false
//
//   const objAsBasketState = obj as BasketState
//   return (objAsBasketState.products !== undefined &&
//     objAsBasketState.totalProductProperties !== undefined &&
//     objAsBasketState.amount !== undefined &&
//     objAsBasketState.quantity !== undefined)
// }

export const saveStore = (state: CourseState) => localStorage.setItem('basket', JSON.stringify(state))
