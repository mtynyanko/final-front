import { CLOSE_MODAL_WIDOW, OPEN_MODAL_WINDOW } from "../../types/constants";

export const openModalWindow = () => ({
    type: OPEN_MODAL_WINDOW,
});
export const closeModalWindow = () => ({
    type: CLOSE_MODAL_WIDOW,
});







// export const requestPosts = (): PostAction => ({
//     type: POSTS_REQUEST,
//   });
  
//   export const fetchPostsSuccess = (posts: Post[]): PostAction => ({
//     type: FETCH_POSTS_SUCCESS,
//     payload: posts,
//   });
  
//   export const fetchPostsError = (error: AxiosError): PostAction => ({
//     type: FETCH_POSTS_FAILURE,
//     payload: error,
//   });
  