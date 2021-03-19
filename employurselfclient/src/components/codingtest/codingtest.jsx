import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function CodingTests (props){
    console.log("DDDDD")
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
    getQuestions();

    return (
        <div>
            {questions.map((question, index) => (
                <div>
                    <p>{question.content}</p>
                    <textarea placeholder='Answer'></textarea>
                </div>
            ))}
        </div>
    )
  }