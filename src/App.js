import { useState } from "react";
import "./App.css";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

function App() {
  const [counter, setCounter] = useState(0);

  const minusCounter = () => {
    return setCounter(counter - 1);
  };

  const addCounter = () => {
    return setCounter(counter + 1);
  };

  let counterStyle = {
    backgroundColor: " rgb(0, 89, 255)",
  };

  if (counter <= 5) {
    counterStyle = {
      backgroundColor: "red",
    };
  }
  if (counter >= 100) {
    counterStyle = {
      backgroundColor: "green",
    };
  }

  return (
    <div className="App">
      <div className="AppContainer">
        <div onClick={minusCounter}>
          <RemoveIcon fontSize="large" className="Btn " />
        </div>

        <div className="CounterBox" style={counterStyle}>
          <span className="Counter">{counter}</span>
        </div>
        <div onClick={addCounter}>
          <AddIcon fontSize="large" className="Btn " />
        </div>
      </div>
    </div>
  );
}

export default App;
