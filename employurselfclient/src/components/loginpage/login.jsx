import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  form: {
    position: 'relative',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    width: 215,
  },
  wrapper:{
    width: '100%',
    height: '100%',
    backgroundColor: '#282c34',
    position: 'absolute'
  },
  button:{
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)'
  }
}));

export default function LoginPage(props){
  const classes = useStyles();
  const [input, setInput] = useState({email:'',password:''})

  const checkInput = (event) => { 
      if(input.email !== '' && input.password !== ''){
        const data = JSON.stringify({email: input.email, password: input.password})

        fetch("http://localhost:8080/login/applicant", {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: data
        })
        .then(res => {
          if(res.status === 200){
            props.handleChange({isLoggedIn:true, isApplicant: true, email: input.email})
          }
        })

        fetch("http://localhost:8080/login/company", {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: data
        })
        .then(res => {
          if(res.status === 200){
            props.handleChange({isLoggedIn:true, isApplicant: false, email: input.email})
          }            
        })
      }        
    }

  const handleChangeUsername = (event) => {setInput({...input,email:event.target.value})}
  const handleChangePassword = (event) => {setInput({...input,password:event.target.value})}


  return(
    <div className={classes.wrapper}>
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <TextField
            id="outline-required"
            label="E-Mail"
            variant="outlined"
            onChange = {handleChangeUsername}
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
          <Button className={classes.button} onClick={checkInput} variant="outlined">
            Anmelden
          </Button>
        </div>
      </form>
    </div>
  );
}