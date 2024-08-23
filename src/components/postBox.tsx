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
            <h3 className='title'>{title}</h3>
            <img className='image' src={imageURL} />
            <div className='content'>{content}</div>
        </div>
        </>
    )
}
export default PostBox