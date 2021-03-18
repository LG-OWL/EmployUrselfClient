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

export default function CompanyProfile (props){
    const classes = useStyles();
    // TODO Eigenschaften der Unternehmens (Kenntnisse)
    return (
      <body>
        <div>
          props.user.firstname
          props.user.lastname
        </div>
        <div>
          props.user.rating
        </div>
        <div>
          {props.isVisiting ? null: props.user.openQuestions} 
        </div>
      </body>


    )
}