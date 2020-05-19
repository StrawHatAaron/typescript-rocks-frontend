import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center'
    }
  });

interface SvgConverterProps{
    svg?:string
};

export const SvgConverter: React.FC<SvgConverterProps> = ({svg}) => {
    const classes = useStyles();
    return(
        <SvgIcon classes={{root: classes.iconRoot}}>
            {svg}
        </SvgIcon>
    )
};
  