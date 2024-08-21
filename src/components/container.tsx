import { useEffect, useState } from "react";
import axios from "axios";
import PostBox from "./postBox";
import { useSelector, useDispatch } from 'react-redux'


interface ResponseProps {
    id: number;
    header: string;
    content: string;
    imageURL: string;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
}


const Container = () => {
    // const [posts, setPosts] = useState<ResponseProps[]>([]);
    
    const posts = useSelector((state) => state.values.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3001/posts')
        .then(res => {
            setPosts(res.data);
        })
    }, []) 

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