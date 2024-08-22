import { useEffect } from "react";
import axios from "axios";
import PostBox from "./postBox";
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { rewritePosts } from "../redux/actions";
import { RootState } from "../redux/store";
import { AppDispatch } from "../redux/store";

const Container = () => {
    // const [posts, setPosts] = useState<ResponseProps[]>([]);
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
    const posts = useTypedSelector((state) => state.posts);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3001/posts')
        .then(res => {
            dispatch(rewritePosts(res.data));
        })
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