import React from 'react';

import './PostItem.scss';

interface PostProps {
    title: string;
    content: string;
    imageURL: string;
    author: string;
    avatar?: string | null;
}

const PostItem: React.FC<PostProps> = ({ title, content, imageURL, author, avatar }) => {

    return (
        <>
        <div className='post-box'>
            <div className="text">
                <div className="author">
                    {
                        avatar ? 
                            <img src={avatar} className="avatar" />
                        :
                            <p className="avatar"> {author[0].toUpperCase()} </p>
                    }
                    <div className="author-name">{author}</div>
                </div>
                <h3 className='title'>{title}</h3>
                <div className='content'>{content}</div>
            </div>
            <img className='image' src={imageURL} />
        </div>
        </>
    )
}
export default PostItem