import React from 'react';

import './PostItem.scss';

interface PostProps {
    title: string;
    content: string;
    imageURL: string;
    author: string;
    avatar?: string | null;
    createdAt: Date;
}

const PostItem: React.FC<PostProps> = ({ title, content, imageURL, author, avatar, createdAt }) => {

    const dateFormatting = (date: Date): string => {
        const newDate = new Date(date);
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
        return newDate.toLocaleDateString('en-US', options);
    }

    return (
        <>
        <div className='post-box'>
            <img className='image' src={imageURL} />
            <div className="separation"></div>
            <div className="text">
                <div className="header">
                    <h3 className='title'>{title}</h3>
                    <p className="date">{dateFormatting(createdAt)}</p>
                </div>
                <div className='content'>{content}</div>
            </div>
            <div className="author">
            <div className="author-name">{author}</div>
                {
                    avatar ? 
                    <img src={avatar} className="avatar" />
                    :
                    <p className="avatar"> {author[0].toUpperCase()} </p>
                }
            </div>
        </div>
        </>
    )
}
export default PostItem