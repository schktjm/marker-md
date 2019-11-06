import React from 'react'
import AppBar from '@material-ui/core/AppBar';

const AppBarStyle = {
    padding: "0 10px"
};

const Navbar = props => {
    return (
        <>
            <AppBar position={'relative'} color={'secondary'} style={AppBarStyle}>
                <p>Marker Tester</p>
            </AppBar>
        </>
    )
};

export default Navbar;
