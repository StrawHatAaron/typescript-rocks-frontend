import React from 'react';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from 'material-ui/styles/typography';

const useDrawerLink = makeStyles((theme) => ({
    drawerLink:{
      textDecoration: "none",
      padding: theme.spacing(1),
    },
  }));

interface DrawerLinkProps{
    route: string,
    name: string,
    internal: boolean,
    icon?: any,
};

export const DrawerLink: React.FC<DrawerLinkProps> = ({
    route, name, internal, icon}) => {
    const classes = useDrawerLink();
    if(internal){return(
        <Link 
            to={route}
            className={classes.drawerLink}>
        <ListItem button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText 
                primaryTypographyProps={{color:"textSecondary"}} 
                primary={name}/>
        </ListItem>
        </Link>
    )}else{return(
        <a 
            href={route} 
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration:"none"}}>
        <ListItem>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText 
                primaryTypographyProps={{color:"textSecondary"}} 
                primary={name}/>    
        </ListItem>
        </a>
    )}
};