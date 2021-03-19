import React, { useState } from 'react';


export default function CodingTests (props){
    const classes = useStyles();
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
            let questions
            for(const question of data){
                questions.push(question)
            }
            setQuestions(questions)
        })
    }

    return (
        <div>
            {questions.map((question, index) => (
                <div>
                    <p>{question.content}</p>
                    <textarea></textarea>
                </div>
            ))}
        </div>
    )
  }