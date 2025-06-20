import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";

function App() {

    function handleChange(newValue, inputIdentifier) {
        setUserInput(prevState => {
            return {
                ...prevState,
                [inputIdentifier]: +newValue,
            }
        })
    }

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const isValidInput = userInput.duration >= 1;

  return (
      <>
        <Header />
        <UserInput onChange={handleChange} userInputValue={userInput} />
          {isValidInput ? <Results input={userInput} /> : <p className='center'>Please insert a duration</p>}
      </>

  )
}

export default App
