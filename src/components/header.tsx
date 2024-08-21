import React from 'react'
import Avatar from '@mui/joy/Avatar'

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <>
        <div className="header">
            <h3 className="page-name">{title}</h3>
            <Avatar variant="outlined" color="danger" />
        </div>
        </>
    )
}

export default Header