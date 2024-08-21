import React from 'react';

interface PostProps {
    title: string;
    content: string;
    imageURL: string;
}

const PostBox: React.FC<PostProps> = ({ title, content, imageURL }) => {
    return (
        <>
        <div className='post-box'>
            <h3>{title}</h3>
            <img src={imageURL} />
            <div>{content}</div>
        </div>
        </>
    )
}
export default PostBox