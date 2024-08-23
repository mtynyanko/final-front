import React from 'react'

import PersonIcon from '@mui/icons-material/Person'

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <>
        <div className="header">
            <h3 className="page-name">{title}</h3>
            <PersonIcon />
        </div>
        </>
    )
}

export default Header