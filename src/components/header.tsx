import React from 'react'
import Avatar from '@mui/joy/Avatar'

interface HeaderProps {
    title: string;
}

class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <>
            <div className="header">
                <h3 className="page-name">{this.props.title}</h3>
                <Avatar variant="outlined" color="danger" />
            </div>
            </>
        )
    }
}
export default Header