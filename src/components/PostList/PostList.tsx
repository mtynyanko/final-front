import { useEffect } from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

import { RootState, MyDispatch } from "../../redux/store";
import { requestPosts } from "../../redux/actions/actions";
import PostItem from "../PostItem/PostItem";
import './PostList.scss'

const PostList = () => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
    const posts = useTypedSelector((state) => state.posts);
    const dispatch: MyDispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPosts())
    }, [dispatch]) 

    return (
        <div className="container">
            {
                posts
                .map(post => 
                    <PostItem key={post.id} title={post.header} content={post.content} imageURL={post.imageUrl} avatar={post.author.avatar} author={post.author.login}/>
                )
            }
        </div>
    )
}

export default PostList