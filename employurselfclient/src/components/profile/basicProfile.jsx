import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ApplicantProfile from './aprofile';
import CompanyProfile from './cprofile';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(2),
      },
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    basicProfile: {
      display: 'inline-grid',
      position: 'relative',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      '& > *': {
        alignItems: 'center',
        display: 'inline-block'
      }
    },
  }));

/*interface IBasicProfile{
  user: any,
  isVisiting: Boolean,
  isApplicant: Boolean,
  
}*/

export default function BasicProfile (props){
    const classes = useStyles();
    
    return (
      <div className={classes.basicProfile}>
        <div className={classes.root}>
          <Avatar src="/broken-image.jpg" className = {classes.large}></Avatar> 
        </div>
        <div>
          {props.user.email}
        </div>
        {props.isApplicant? <ApplicantProfile user = {props.user} isVisiting = {props.isVisiting} />: <CompanyProfile user = {props.user} isVisiting = {props.isVisiting}/> } 
      </div>
    )
}