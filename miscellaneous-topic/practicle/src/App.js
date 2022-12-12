import * as React from "react";
import "./App.css";
import ForwardRef from "./ForwardRef";
import UncontrolledComp from "./UncontrolledComp";

const App = () => {
  // Creating textInputRef variable
  const textInputRef = React.createRef();

  const [textInput, setTextInput] = React.useState(" ");
  const func = React.useRef(0);

  React.useEffect(() => {
    func.current = func.current + 1;
  });
  // This method will be used to focus textInput
  // and give background color to textInput field
  const textInputFocusHandler = (element) => {
    // Focusing input element
    textInputRef.current.focus();

    // Giving background color to input element
    textInputRef.current.style.background = "green";
  };

  return (
    <div className="App">
      {/* Attaching ref variable using element's ref attribute */}
      <h1>{func.current}</h1>
      <input
        ref={textInputRef}
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        type="text"
      />
      {/* Attaching textInputFocusHandler method to button click */}

      <button onClick={textInputFocusHandler}>Focus</button>

      <div>
        <h1>Forward Ref</h1>
        <ForwardRef />
      </div>

      <div>
        <UncontrolledComp />
      </div>
    </div>
  );
};

export default App;
