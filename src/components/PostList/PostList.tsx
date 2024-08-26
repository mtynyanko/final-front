import { useEffect } from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

import { RootState, MyDispatch } from "../../redux/store";
import { requestPosts } from "../../redux/actions/actions";
import PostItem from "../PostItem/PostItem";
import Loading from "../Loading/Loading";
import './PostList.scss'

const PostList = () => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
    const posts = useTypedSelector((state) => state.posts);
    const dispatch: MyDispatch = useDispatch();
    const isLoading = useTypedSelector((state)=> state.isLoading);
    const error = useTypedSelector((state)=> state.error);
    useEffect(() => {
        dispatch(requestPosts())
    }, [dispatch]) 
    if (isLoading) {
        return (
            <Loading />
        )
    } else if (error) {
        return (
            <div className="error-screen">error</div>
        )
    } else if (!posts.length) {
        <div className="message">no news for today</div>
    }
    else {
        return (
            <div className="container">
                {
                    posts
                    .map(post => 
                        <PostItem key={post.id} 
                                  title={post.header} 
                                  content={post.content} 
                                  imageURL={post.imageUrl} 
                                  avatar={post.author.avatar} 
                                  author={post.author.login} 
                                  createdAt={post.createdAt}
                        />
                    )
                }
            </div>
        )
    }
    
}

export default PostList