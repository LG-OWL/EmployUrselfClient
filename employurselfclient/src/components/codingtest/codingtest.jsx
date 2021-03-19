import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      maxWidth: '50%',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 20,
      paddingLeft: 10
    },
    textarea: {
        border: '1px solid rgb(75, 69, 69, 0.52)',
        borderRadius: 4,
        width: '90%',
        height: 100,
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        marginTop: 10
    },
  });

export default function CodingTests (props){
    const classes = useStyles()
    let [questions, setQuestions] = useState([]);
    // TODO Frage bei welchen Unternehmen Bewerber ihm Bewerbungsprozess ist ab.
    const getQuestions = () => {
        fetch("http://localhost:8080/company/getQuestions", {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: 'Microsoft@gmail.de'})
        })
        .then(res => res.json())
        .then(data => {
            data = JSON.parse(data);
            console.log(data)
            setQuestions(data)
        })
    }
    useEffect(()=>{
        getQuestions();
    }, [])

    return (
        <div>
            {questions.map((question, index) => (
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                    <p>{question.content}</p>
                    <textarea 
                        placeholder='Answer' 
                        className= {classes.textarea}
                        id="exampleFormControlTextarea1"
                        rows="5"
                    ></textarea>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
  }