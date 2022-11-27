import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import React from "react";
import { NavigationModel } from "../../Models/NavigationModel";
import MailIcon from '@mui/icons-material/Mail';
import { DrawerStyles } from "./../../Styles/Drawer"

export interface INavigationProps {
    elements: NavigationModel[]
    //drawerWidth: number
}

export const Navigation: React.FC<INavigationProps> = function Navigation(props: INavigationProps) {
    return (
        <Box sx={{ display: 'flex', width: 250}}  >
            <Drawer
                sx={{
                    width: DrawerStyles.width,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: DrawerStyles.width,
                        boxSizing: 'border-box'
                    },
                    
                }}
                variant="permanent"
                anchor="left"
            >
                <List sx={{background: (theme) => theme.palette.background.default}}>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => {
                        return (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>

    )
}