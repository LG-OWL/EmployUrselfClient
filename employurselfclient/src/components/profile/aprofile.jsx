import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(5),
    },
  },
}));

export default function ApplicantProfile (props){
    const classes = useStyles();
    // zeitlimit bei Fragen
    return (
      <div>
        <div>
          <h2>{props.user.firstname} {props.user.lastname}</h2>
        </div>
        <div>
          {props.user.rating}
        </div>
        <div>
          {props.isVisiting ? null: props.user.openQuestions} 
        </div>
      </div>


    )
}