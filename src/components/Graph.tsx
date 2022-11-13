import { useContext, useEffect, useRef } from 'react';
import Card from './UI/Card';
import DiceDataContext from '../store/dice-data.context';
import diceDataToDataSet from '../helpers/dice-data-to-data-set';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Graph = () => {
  const chartRef = useRef<any>();
  const diceData = useContext(DiceDataContext);
  const chartData = diceDataToDataSet(diceData);

  useEffect(() => {
    const chart = chartRef.current;
    chart?.update();

    return () => {
      chart?.destroy();
    };
  }, [diceData]);

  return (
    <Card>
      <ChartContainer>
        <LineChart width={600} height={300} data={chartData}>
          <CartesianGrid stroke="#1d3557" />
          <Line type="monotone" dataKey="value" stroke="#e63946" dot={false} />
          <XAxis dataKey="name" stroke="#1d3557" />
          <YAxis stroke="#1d3557" />
        </LineChart>
      </ChartContainer>
    </Card>
  );
};

export default Graph;
