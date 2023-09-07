import {useEffect,useState } from 'react'

import './App.css'

function App() {
  
const [contact, setContact] = useState([])
 const [message, setMessage] = useState('');
 const [question, setQuestion] = useState('');
 const [answers, setAnswers] = useState('');
  

  const callForQuestion = async () => {
    const response = await fetch('http://localhost:8080/getinfo/');
    //const data = await response.json();
    const rawData = await response.text(); // Get the response as a text
    const data = JSON.parse(rawData); // HELP HERE: Parse the text as JSON


    
    const ansToQuestions = [data.results[0].correct_answer, ...data.results[0].incorrect_answers];
    console.log(ansToQuestions);
  
    const randomNumber = Math.floor(Math.random() * ansToQuestions.length);
    setQuestion(data.results[0].question);  
    setAnswers(ansToQuestions); // Assign the array ansToQuestions to the answers state
    console.log(ansToQuestions[randomNumber]);
    console.log(answers);
  };
  
  
   const callForMessage = () => {
    fetch('/api')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMessage(data.message);
    })
    .catch(err => console.log(err));
    }


useEffect(() => {
  callForMessage();
  callForQuestion()
//empty array becaue we are not watchting for anyting yet
}, [])


  return (

    
    <>
      <div className='App'>
        {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{false ? (
        <div className='score-section'>You scored 1 out of {questions.length}</div>
        ) : (


      <h1>Vite + React</h1>
      {contact}
      <h2>Message from the backend: {message}</h2>
      
      </div>
      div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>
              
              <h2>Question: {question}</h2>
              
              </div>
					

					<div className='answer-section'>
						<button>Answer 1</button>
						<button>Answer 2</button>
						<button>Answer 3</button>
						<button>Answer 4</button>
					</div>


      
    </>
  )
}

export default App
