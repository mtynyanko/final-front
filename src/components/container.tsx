import { useEffect } from "react";
import PostBox from "./postBox";
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { RootState } from "../redux/store";
import { MyDispatch } from "../redux/store";
import { requestPosts } from "../redux/actions";

const Container = () => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
    const posts = useTypedSelector((state) => state.posts);
    const dispatch: MyDispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPosts())
    }, [dispatch]) 

    return (
        <>
        <div className="container">
            {
                posts
                .map(post => 
                    <PostBox key={post.id} title={post.header} content={post.content} imageURL={post.imageURL} />
                )
            }
        </div>
        </>
    )
}

export default Container