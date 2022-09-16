import React from 'react';
import AppBar from '@mui/material/AppBar';
// import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { StyledLink, StyledToolbar } from './NavBar.styles';

type Page = {
    name: string;
    path: string;
}

const NavBar: React.FC = () => {
    const pages: Page[] = [
        { name: 'Home', path: '/' }, 
        { name: 'Member', path: '/member'},
        { name: 'About Us', path: '/about' }, 
        { name: 'Career', path: '/career' },
        { name: 'Contact Us', path: '/contact'},
    ];
    
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <StyledToolbar disableGutters>
                    
                    {/* For Mobile View */}
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem'
                        }}
                    >
                        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                        LOGO
                        </Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page: Page, index: number) => (
                                <MenuItem key={`page_${index}`} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link to={page.path} style={{textDecoration: 'none', color: '#000'}}>
                                            {page.name}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    
                    {/* For Desktop View */}
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem'
                        }}
                    >
                        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                            LOGO
                        </Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: 'auto' }}>
                        {pages.map((page: Page, index: number) => (
                            <StyledLink 
                                active={window.location.pathname === page.path ? '1' : '0'}
                                to={page.path} 
                                key={`page_${index}`} 
                                onClick={handleCloseNavMenu} 
                            >
                                {page.name}
                            </StyledLink>
                        ))}
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    )
};

export default React.memo(NavBar);