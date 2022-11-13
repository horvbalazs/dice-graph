import { FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import DiceData from '../types/DiceData';
import Button from './UI/Button';
import Card from './UI/Card';
import Input from './UI/Input';

const DetailsWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Label = styled.div`
  margin-bottom: 2px;
`;

export interface DiceDetailsProps {
  setDiceData: (value: DiceData) => void;
}

const DiceDetails = (props: DiceDetailsProps) => {
  const [disabled, setDisabled] = useState(true);
  const [result, setResult] = useState<string | null>(null);
  const quantityInput = useRef<HTMLInputElement>(null);
  const sidesInput = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    const quantity = parseInt(quantityInput.current?.value as string);
    const sides = parseInt(sidesInput.current?.value as string);
    const isDisabled = isNaN(quantity) || isNaN(sides);
    setDisabled(isDisabled);
    setResult(isDisabled ? null : `${quantity}d${sides}`);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.setDiceData({
      quantity: parseInt(quantityInput.current?.value as string),
      sides: parseInt(sidesInput.current?.value as string),
    });
  };

  return (
    <Card>
      <DetailsWrapper onChange={handleChange} onSubmit={handleSubmit}>
        <label htmlFor="dd-quantity">
          <Label>Number of dices</Label>
          <Input
            id="dd-quantity"
            type="number"
            ref={quantityInput}
            min={1}
            max={10}
          />
        </label>
        <label htmlFor="dd-quantity">
          <Label>Sides of one die</Label>
          <Input
            id="dd-sides"
            type="number"
            ref={sidesInput}
            min={2}
            max={100}
          />
        </label>
        <Button type="submit" disabled={disabled}>
          {result ? `Calculate for ${result}!` : 'Invalid input.'}
        </Button>
      </DetailsWrapper>
    </Card>
  );
};

export default DiceDetails;
