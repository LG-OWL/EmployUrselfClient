import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';


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
  const history = useHistory();
  const openTask = (event) => { history.push('/questions')}
  const openChange = () => {}
  // TODO Eigenschaften der Unternehmens 
  return ( 
    <div>
      <div>
        {props.user.name}
      </div>
      <div>
        {props.user.timeLimit}
      <div>
        <p>Software Engineer</p>
      </div>
      </div>
        {props.isVisiting ? 
        <Button onClick={openTask} variant="outlined">
          Fragen beantworten
        </Button>: 
        <Button onClick={openChange} variant="outlined">
          Fragen ändern 
      </Button>}
    </div>
  )
}