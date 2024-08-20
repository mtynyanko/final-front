import React from "react";
import axios from "axios";
import PostBox from "./postBox";

interface ResponseProps {
    id: number;
    header: string;
    content: string;
    imageURL: string;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
}

interface StateProps {
    posts: ResponseProps[];
}

class Container extends React.Component<StateProps> {
    state: StateProps = {
        posts: [],
    }
    componentDidMount() {
        axios.get('http://localhost:3001/posts')
        .then(res => {
            const posts = res.data;
            this.setState({ posts })
        })
    }
    render() {
        return (
            <>
            <div className="container">
                {
                    this.state.posts
                    .map(post => 
                        <PostBox key={post.id} title={post.header} content={post.content} imageURL={post.imageURL} />
                    )
                }
            </div>
            </>
        )
    }
}
export default Container