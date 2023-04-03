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
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { APP_NAVS } from '../config';

const drawerWidth = 240;

const linkStyle = { textDecoration: 'none', fontSize: '1.55rem', color: '#3c3a3a' }
const linkListStyle = { borderBottom: '1px solid #ffffff5c' }



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
        <Box onClick={handleDrawerToggle}
            sx={{ backgroundColor: '#faecf8', color: '#3c3a3a', height: '100%', overflowX: 'hidden' }}>
            <Typography variant="h6" sx={{ my: 2, textAlign: 'center', fontSize: 20, fontWeight: 600 }}>
                Personals
            </Typography>
            <Divider />
            <List>

                {
                    loggedIn ? <>
                        {
                            APP_NAVS.filter(item => item.loggedIn === true)?.map((nav, i) => {
                                return <Link to={`${nav.link}`} style={linkStyle} key={i}>
                                    <ListItem disablePadding sx={linkListStyle}>
                                        <ListItemButton>
                                            <ListItemText className='merriweather' disableTypography primary={`${nav.text}`} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            })
                        }
                        <Button sx={{ mt: 8, mx: 2, width: '90%' }} variant="contained"
                            onClick={logUserOut} endIcon={<PowerSettingsNewIcon />}>
                            Logout
                        </Button>
                    </>
                        : <>
                            {
                                APP_NAVS.filter(item => item.loggedIn === false)?.map((nav, i) => {
                                    return <Link to={`${nav.link}`} style={linkStyle} key={i}>
                                        <ListItem disablePadding sx={linkListStyle}>
                                            <ListItemButton>
                                                <ListItemText className='merriweather' disableTypography primary={`${nav.text}`} />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                })
                            }
                        </>
                }

            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" position='fixed' sx={{ backgroundColor:'#faecf8', color:'#3c3a3a'}}>
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
                        {
                            loggedIn ? <>
                                {
                                    APP_NAVS.filter(item => item.loggedIn === true || item.loggedIn === 'both')?.map((nav, i) => {
                                        return <CustomLink to={`${nav.link}`} text={`${nav.text}`} key={i} />
                                    })
                                }
                                <Button sx={{ mx: 1 }} variant="contained" onClick={logUserOut}>
                                    Logout
                                </Button>
                            </>
                                : <>
                                    {
                                        APP_NAVS.filter(item => item.loggedIn === false)?.map((nav, i) => {
                                            return <CustomLink to={`${nav.link}`} text={`${nav.text}`} key={i}  />
                                        })
                                    }
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
