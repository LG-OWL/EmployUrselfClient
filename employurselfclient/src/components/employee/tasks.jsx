import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(10),
            width: '100ch',
        },
    },
}));

export default function TaskPage(props){

    const classes = useStyles();
    const [input, setInput] = useState({answer:''})

    const checkInput = (event) => { 
        if(input.answer !== '')
          console.log("Eingegeben")
    }

    const handleChange = (event) => {
        setInput(event.target.value);
    };
    
    return(
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField disabled
                    id = "tf_task"
                    label = "Aktuelle Aufgabe"
                    variant = "filled"

                />

            </div>

            <div>
                <TextField required
                    id = "tf_answer"
                    label = "Aktuelle Antwort"
                    helperText = "enter your solution"
                    multiline
                    rowsMax={4}
                    onChange={handleChange}
                    variant="filled"
                />

            </div>
            <div>
                <Button onClick={checkInput} variant="outlined">
                Abgeben
                </Button>
            </div>
        </form>

    );
}