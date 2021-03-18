import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(2),
      },
    },
    large: {width: theme.spacing(20),
            height: theme.spacing(20),},
  }));



export default function CompanyProfile (props){
    const classes = useStyles();
    return (
      <left>
        <div className={classes.root}>
          <Avatar src="/broken-image.jpg" className = {classes.large}></Avatar> 
        </div>
        <div>
          <td>Name</td>
        </div>
        <div>
          <td>E-Mail</td>
        </div>
        <div>
          <td>Eigenschaften</td>
        </div>
      </left>
        

    )
}