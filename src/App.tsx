import { useState } from 'react';
import './App.css';
import DiceDetails from './components/DiceDetails';
import Header from './components/Header';
import DiceData from './types/DiceData';
import DiceDataContext from './store/dice-data.context';
import Graph from './components/Graph';

function App() {
  const [diceData, setDiceData] = useState<DiceData>({
    quantity: undefined,
    sides: undefined,
  });

  const handleSetDiceData = (value: DiceData) => {
    setDiceData(value);
  };

  return (
    <div className="App">
      <Header />
      <DiceDataContext.Provider value={diceData}>
        <DiceDetails setDiceData={handleSetDiceData} />
        <Graph />
      </DiceDataContext.Provider>
    </div>
  );
}

export default App;
