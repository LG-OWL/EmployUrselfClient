import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

export default function TaskPage(props){
    const [aktuellerWert, setAktuellerWert] = useState('');
    const 

    return(
        <form className={classes.root} noValidate autoComplete="off">
            
            <TextField
                id = "task_field"
                label = "task"
                variant = "outlined"
            />

            <TextField
                id = "answer_field"
                label = "answer_field"
                type = "enter your solution"
                autoComplete = ""
            />

        </form>

    );
}