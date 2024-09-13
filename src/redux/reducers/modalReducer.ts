import { ModalAction } from "../../types/action.types";
import { CLOSE_MODAL_WIDOW, OPEN_MODAL_WINDOW } from "../../types/constants";

interface ModalState {
    isOpen: boolean;
}

const initialState: ModalState = {
    isOpen: false,
}

const modalReducer = (state = initialState, action: ModalAction) => {
    switch (action.type) {
        case OPEN_MODAL_WINDOW: 
            return {
                ...state,
                isOpen: true,
            };
        case CLOSE_MODAL_WIDOW:
            return {
                ...state,
                isOpen: false,
            }
        default: 
            return state;
    }
}
export default modalReducer

// const initialState: PostsState = {
//     posts: [],
//     isLoading: false,
//     error: null,
//   };
  
//   const postsReducer = (state = initialState, action: PostAction) => {
//     switch (action.type) {
//       case POSTS_REQUEST:
//         return {
//           ...state,
//           isLoading: true,
//         };
//       case FETCH_POSTS_SUCCESS:
//         if ("payload" in action && !(action.payload instanceof AxiosError)) {
//           return {
//             ...state,
//             posts: action.payload,
//             isLoading: false,
//           };
//         }
//         return state;
//       case FETCH_POSTS_FAILURE:
//         if ("payload" in action && action.payload instanceof AxiosError) {
//           return {
//             ...state,
//             error: action.payload,
//             isLoading: false,
//           };
//         }
//         return state;
//       default:
//         return state;
//     }
//   };
//   export default postsReducer;