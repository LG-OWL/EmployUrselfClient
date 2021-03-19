import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    ContentWrapper: {
      marginLeft: 270,
      height: '100%'
    },
}));

export default function ContentWrapper(props){
    const classes = useStyles()
    return(
        <div className={classes.ContentWrapper}>
            {props.children}
        </div>
    )
}