import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ApplicantProfile from aprofile;
import CompanyProfile from cprofile;

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

/*interface IBasicProfile{
  user: any,
  isVisiting: Boolean,
  isApplicant: Boolean,
  
}*/

export default function BasicProfile (props){
    const classes = useStyles();
    return (
      <left>
        <div className={classes.root}>
          <Avatar src="/broken-image.jpg" className = {classes.large}></Avatar> 
        </div>
        <div>
          props.user.email
        </div>
          {props.isApplicant? <ApplicantProfile user = {props.user} isVisiting = {props.isVisiting} />: <CompanyProfile user = {props.user} isVisiting = {props.isVisiting}/> } 
      </left>
    )
}