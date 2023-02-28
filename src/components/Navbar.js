import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomLink from './CustomLink';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authAction';

const drawerWidth = 240;

const linkStyle = { color: '#212121', textDecoration: 'none', fontSize: '1rem' }




const Navbar = (props) => {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.auth.loggedIn)

    const logUserOut = () => {
        dispatch(logout())
    }
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Personals
            </Typography>
            <Divider />
            <List>
                <Link to="/" style={linkStyle}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText disableTypography sx={{fontSize:'1.8rem'}} primary='Home' />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/personals" style={linkStyle}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText disableTypography sx={{fontSize:'1.8rem'}} primary='Personals' />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/add-new-personal" style={linkStyle}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText disableTypography sx={{fontSize:'1.8rem'}} primary='New Personal' />
                        </ListItemButton>
                    </ListItem>
                </Link>
                {
                    loggedIn ?
                        <Button sx={{ mt:4 }} variant="contained" onClick={logUserOut}>
                            Logout
                        </Button>
                        : <>
                            <Link to="/register" style={linkStyle}>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText disableTypography sx={{fontSize:'1.8rem'}} primary='Register' />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to="/login" style={linkStyle}>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText disableTypography sx={{fontSize:'1.8rem'}} primary='Login' />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </>
                }

            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" position='static'>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Personals
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <CustomLink to="/" text="Home" />
                        <CustomLink to="/personals" text="Personals" />
                        <CustomLink to="/add-new-personal" text="New Personal" />
                        {
                            loggedIn ?
                                <Button sx={{ mx: 1 }} variant="contained" onClick={logUserOut}>
                                    Logout
                                </Button>
                                : <>
                                    <CustomLink to="/register" text="Register" />
                                    <CustomLink to="/login" text="Login" />
                                </>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Navbar;
