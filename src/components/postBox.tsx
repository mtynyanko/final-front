import React from 'react';

interface PostProps {
    title: string;
    content: string;
    imageURL: string;
    key: number;
}

class PostBox extends React.Component<PostProps> {
    render() {
        return (
            <>
            <div className='post-box' key={this.props.key}>
                <h3>{this.props.title}</h3>
                <img src={this.props.imageURL} />
                <div>{this.props.content}</div>
            </div>
            </>
        )
    }
}
export default PostBox