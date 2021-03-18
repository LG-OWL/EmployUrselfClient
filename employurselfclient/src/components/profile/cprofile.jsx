import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



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

  return ( 
    <body>
      <div>
        props.user.name
      </div>
      <div>
        props.user.timelimit
      </div>
        {props.isVisiting ? 
        <Button onClick={openTask} variant="outlined">
          Fragen beantworten
        </Button>: 
        <Button onClick={openChange} variant="outlined">
          Fragen ändern 
      </Button>}
    </body>
  )
}