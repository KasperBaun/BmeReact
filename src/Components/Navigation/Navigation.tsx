import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import React, { useEffect } from "react";
import { Navigation } from "../../Models/Navigation";
import MailIcon from '@mui/icons-material/Mail';
import { DrawerStyles } from "./../../Styles/Drawer"
import { StorageService } from "../../Repositories/StorageService";

export interface INavigationProps {
    elements: Navigation[]
    //drawerWidth: number
}

export const NavMenu: React.FC<INavigationProps> = function Navigation(props: INavigationProps) {
    var stor: StorageService;
    useEffect(
        () => {
            stor = StorageService.GetStorageService();
        }
        , []);

    function handleOnClick(){
        stor.testCache();
    };

    function showCache(){
        console.log("Current cache size: " + stor.storageSize +" kB");
        //console.log("Size of item in localStorage: " + new Blob([localStorage.getItem("somekey1")!]).size);
    }

    function printCurrentDate(){
        console.log("Date.now() " + Date.now());
        console.log("new Date().getUTCDate() " + new Date().getUTCDate());
    }

    return (
        <Box sx={{ display: 'flex', width: 250 }}  >
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
                <List sx={{ background: (theme) => theme.palette.background.default }}>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => {
                        return (
                            <ListItem key={text} sx={{alignContent: "auto"}} >
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
                    <ListItem key={"FillCache"} disablePadding>
                        <ListItemButton onClick={handleOnClick}>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary={"FillCache"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"ShowCache"} disablePadding>
                        <ListItemButton onClick={showCache}>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary={"ShowCache"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"PrintCurrentDate"} disablePadding>
                        <ListItemButton onClick={printCurrentDate}>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary={"PrintCurrentDate"} />
                        </ListItemButton>
                    </ListItem>
                    {/* {['All mail', 'Trash', 'Spam'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))} */}
                </List>
                {/* <Divider /> */}
            </Drawer>
        </Box>

    )
}