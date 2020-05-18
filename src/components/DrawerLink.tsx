import React, {useState,} from 'react';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import {SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon'

interface DrawerLinkProps{
    route: string,
    name: string,
    internal: boolean,
    icon?: any,
};

export const DrawerLink: React.FC<DrawerLinkProps> = ({
    route, name, internal, icon}) => {
    if(internal){return(
        <Link to={route}>
        <ListItem button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name}/>    
        </ListItem>
        </Link>
    )}else{return(
        <a href={route} target="_blank">
        <ListItem>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name}/>    
        </ListItem>
        </a>
    )}
};