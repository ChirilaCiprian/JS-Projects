import { useState } from "react";
function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const Ops = [".", "+", "=", "-", "/", "*"];

  const Calculate = () => {
    setCalc(eval(calc).toString());
  };
  const DeleteLast = () => {
    if (calc == "") return;
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  const UpdateCalc = (value) => {
    if (
      (Ops.includes(value) && calc === "") ||
      (Ops.includes(value) && Ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!Ops.includes(value)) setResult(eval(calc + value).toString());
  };
  const CreateDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++)
      digits.push(
        <button onClick={() => UpdateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    return digits;
  };
  return (
    <div className="App">
      <div className="Calculator">
        <div className="display">
          <span>{calc || "0"}</span>
        </div>
        <div className="operators">
          <button onClick={() => UpdateCalc("+")}>+</button>
          <button onClick={() => UpdateCalc("-")}>-</button>
          <button onClick={() => UpdateCalc("/")}>/</button>
          <button onClick={() => UpdateCalc("*")}>*</button>
          <button
            onClick={() => {
              DeleteLast();
            }}
          >
            DEL
          </button>
        </div>
        <div className="digits">
          {CreateDigits()}
          <button onClick={() => UpdateCalc("0")}>0</button>
          <button onClick={() => UpdateCalc(".")}>.</button>
          <button
            onClick={() => {
              Calculate();
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
