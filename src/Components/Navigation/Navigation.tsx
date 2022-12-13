import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from "@mui/material"
import React from "react";
import { NavigationModel } from "../../Models/NavigationModel";
import MailIcon from '@mui/icons-material/Mail';
import NavigationModelMockup from "./NavigationModelMockup";
import { HomeIcon } from "../../Assets/Icons";

export interface INavigationProps {
    elements: NavigationModel[]
}

export const Navigation: React.FC<INavigationProps> = function Navigation(props: INavigationProps) {
    const drawerWidth = 250;
    return (
        <Box sx={{ display: 'flex'}}  >
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box'
                    }
                }}
                variant="permanent"
                anchor="left"
            >
                <List >
                    {NavigationModelMockup.map((navModel) => {
                        return(
                            <ListItem key={navModel.Key} sx={{alignContent: "auto"}} >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={navModel.Href} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })};
                    {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => {
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
                    })} */}
                </List>
                {/* <Divider /> */}
            </Drawer>
        </Box>

    )
}