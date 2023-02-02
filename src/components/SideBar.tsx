import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from '/logo.svg'
import './SideBar.css'
import home from '/home.svg'
import marketplace from '/marketplace.svg'
import social from '/social.svg'
import messagerie from '/messagerie.svg'
import {Link} from "react-router-dom";



const SideBarItem = ({icon, text, url}: any) => (
    <ListItem>
        <Link to={url} className="sidebar-link">
            <ListItemButton>
                <ListItemIcon sx={{ mr: 1 }}><img src={icon} alt={text}/></ListItemIcon>
                <ListItemText primary={text}/>
            </ListItemButton>
        </Link>
    </ListItem>
)

export default function SideBar() {
    const drawer = (
        <>
            <Box sx={{display: 'flex', justifyContent: 'center',  m: 4}}>
                <img src={logo} alt="logo" className='sidebar-logo'/>
            </Box>
            <List>
                <SideBarItem icon={home} text="Accueil" url="/"/>
                <SideBarItem icon={social} text="Social" url="/social"/>
                <SideBarItem icon={marketplace} text="Marketplace" url="/marketplace"/>
                <SideBarItem icon={messagerie} text="Messagerie" url="/messagerie"/>
            </List>
        </>
    );

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 287,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 287, boxSizing: 'border-box', boxShadow: 4 },
            }}
        >
                    {drawer}
        </Drawer>
    );
}
