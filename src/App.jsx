  import {useEffect,useState } from 'react'
  import './App.css'
  import correctAns from './Components/correctans';

  function App() {

  
  const [message, setMessage] = useState('');
  //const [question, setQuestion] = useState('');
  //const [correct_answers, setAnswers] = useState('');
  //const [correctAnswer, setCorrectAnswer] = useState('');
  //const [WrongAnswer_1, setWrongAnswer_1] = useState('');

    
  const { incorrect_answers, correct_answer } = data.results[0];

      const callForQuestion = async () => {
      const response = await fetch('http://localhost:8080/getinfo/');
      //const data = await response.json();  -may uncomment this line
      const rawData = await response.text(); // Get the response as a text
      const data = JSON.parse(rawData); // Parse the text as JSON

      
      //const ansToQuestions = [data.results[0].correct_answer, ...data.results[0].incorrect_answers];
      //console.log(ansToQuestions);
      
      //const randomNumber = Math.floor(Math.random() * ansToQuestions.length); //DOUBLE CHECK
      // setQuestion(data.results[0].question);  
      // setAnswers(ansToQuestions); // Assign the array ansToQuestions to the answers state
      // setCorrectAnswer(data.results[0].correct_answer);
      // //setWrongAnswer_1(data.results[0].incorrect_answers[0]);

      // console.log(ansToQuestions[randomNumber]);                           //  NOT SURE IF I NEED THIS
      // console.log(answers);
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
  //WHY IS THE ARRAY EMPTY HERE?
  });

  //HOW TO DISPLAY THE CHOICES OF ANSWERS?
 // WHAT EVENT CAN TRACK THE CORRECT/INCORRECT ANSWERS?
 // FIX BUTTONS SO THEY LINK WITH THE INDEX OF THE CORRECT/INCORRECT ANSWER?
  return (
    <div className='App'>

      <div className='question-section'>
        <div className='question-container'>
        <div className='question-text'>
          
          <h3>Question: {question}</h3>
          <span className='activequestion'>{question + 1}</span>
          <span className='totalquestions'>{question.length}</span>
          <h2>{question}</h2>
          </div>
           </div>
            </div>

      


       <div className='answer-section'>
        
          <div className='answers'>
              <h1> A. {answers}</h1>  
              <h1> B. {correct_answer}</h1>
              <h1> C. {incorrect_answers}</h1>
            </div>   




         <div className='answer-section-btn'>
						<button onClick={callForQuestion} type="submit" className='btn'>Answer 1</button>  <h1> A. {answers}</h1> 
						<button className='btn'>Answer B</button>
						<button className='btn'>Answer C</button>
						<button className='btn'>Answer D</button> 
					</div>

      
          </div>

           <div className='closing message'>  
             {message}  
           </div>
       
      </div>
   
  );
}

export default App;