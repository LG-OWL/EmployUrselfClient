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
         {props.user.rating.amountRatings === 0 ? 0 : "Bewertung: " + props.user.rating[0]/props.user.rating[1] + "/5" }
         <h4>{props.user.rating[1]} Bewertungen</h4>
        </div>
        <div>
          {props.isVisiting ? null: props.user.openQuestions} 
        </div>
      </div>


    )
}