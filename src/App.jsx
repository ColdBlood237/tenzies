import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(allNewDice());

  const dieElements = dice.map((die) => <Die value={die} />);

  function allNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 6 + 1));
    }
    return arr;
  }

  return (
    <main>
      <div className="container">{dieElements}</div>
    </main>
  );
}

export default App;
