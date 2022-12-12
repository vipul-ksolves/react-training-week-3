import * as React from "react";

const InputText = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

const ForwardRef = () => {
  const ref = React.useRef();

  function focus() {
    ref.current.focus();
  }

  return (
    <div className="App">
      <InputText ref={ref} placeholder="my input" />
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default ForwardRef;
