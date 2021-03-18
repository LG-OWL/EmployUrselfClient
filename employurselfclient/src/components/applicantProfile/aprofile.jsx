import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(5),
      },
    },
  }));

export default function CompanyProfile (props){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Avatar src="/broken-image.jpg" className={classes.large}/> 
        </div>

    )
}