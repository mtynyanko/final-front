import React from 'react';

import './PostItem.scss';

interface PostProps {
    title: string;
    content: string;
    imageURL: string;
}

const PostItem: React.FC<PostProps> = ({ title, content, imageURL }) => {
    return (
        <>
        <div className='post-box'>
            <div className="text">
                <h3 className='title'>{title}</h3>
                <div className='content'>{content}</div>
            </div>
            <img className='image' src={imageURL} />
        </div>
        </>
    )
}
export default PostItem