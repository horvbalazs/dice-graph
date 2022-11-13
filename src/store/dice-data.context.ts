import React from 'react';
import DiceData from '../types/DiceData';

const DiceDataContext = React.createContext<DiceData>({
  quantity: undefined,
  sides: undefined,
});

export default DiceDataContext;
