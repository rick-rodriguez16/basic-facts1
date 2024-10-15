import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { multiFactSet } from './mathFactsLib'

function App() {
  const [count, setCount] = useState(0);
  const [mathFact, setMathFact] = useState({});
  const [response, setResponse] = useState("");
  const [mark, setMark] = useState("");


  // user events
  const handleKeyDown = event => {
    //setKey(event.key);

    if (event.key === "Enter") {
      checkAnswer()
    }
  }

  const checkAnswer = () => {
    if (response === mathFact.product) {
      console.log("Correct");
      setMark("✓")
    } else {
      console.log("Incorrect");
      setMark("𐄂")
    }
    selectFact();
    setResponse("");
    
    setTimeout(() => {
      setMark("");
    }, "500");
    
  }


  // selecting math facts
  const selectSet = () => {
    const factSets = [multiFactSet];
    const setIndex = Math.floor(Math.random() * factSets.length);
    return factSets[setIndex];
  }

  const selectFact = () => {
    const chosenSet = selectSet();
    const factIndex = Math.floor(Math.random() * chosenSet.length);
    setMathFact(chosenSet[factIndex]);
  }

  useEffect (() => {
    selectFact();
  }, [])

  return (
    <>
        <h1 className="math-fact">
          {mathFact.factor1} x {mathFact.factor2} = 
        </h1>
        <div>
          <input 
            className="user-input" 
            type='text' 
            size="1"
            maxLength="3"
            onKeyDown={handleKeyDown}
            onChange={e => setResponse(e.target.value)}
            value={response}
          />
        </div>
        <span 
          className="marking"        
        >{mark}</span>
   </>
  )
}

export default App
