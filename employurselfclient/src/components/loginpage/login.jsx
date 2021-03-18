import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
  const [input, setInput] = useState({username:'',password:''})
  const checkInput = (event) => { 
    if(input.username !== '' && input.password !== '')
      console.log("Test")
  }
  const handleChangeUsername = (event) => {setInput({...input,username:event.target.value})}
  const handleChangePassword= (event) => {setInput({...input,password:event.target.value})}


  return(
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outline-required"
          label="Benutzername"
          variant="outlined"
          onChange = {handleChangeUsername}
        />
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