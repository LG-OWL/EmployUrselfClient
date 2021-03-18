import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function LoginPage(props){
  const classes = useStyles();
  const [input, setInput] = useState({email:'',password:''})
  const history = useHistory();
  const checkInput = (event) => { 
    if(input.email !== '' && input.password !== '')
      history.push('/CompanyProfile')
  }
  const handleChangeEmail = (event) => {setInput({...input,email:event.target.value})}
  const handleChangePassword= (event) => {setInput({...input,password:event.target.value})}


  return(
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outline-required"
          label="E-Mail"
          variant="outlined"
          onChange = {handleChangeEmail}
        />
      </div>
      <div>
        <TextField
          id="outlined-password-input"
          label="Passwort"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange = {handleChangePassword}
        />
      </div>
      <div>
        <Button onClick={checkInput} variant="outlined">
          Anmelden
        </Button>
      </div>
    </form>
  );
}