import styled from 'styled-components';
import icon from '../assets/d20.svg';
import Card from './UI/Card';

const Icon = styled.img`
  width: 50px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Header = () => {
  return (
    <Card>
      <Icon alt="dice-icon" src={icon} />
      <Title>Dice Graph</Title>
    </Card>
  );
};

export default Header;
