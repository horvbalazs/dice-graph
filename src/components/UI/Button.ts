import styled from 'styled-components';

const Button = styled.button`
  background-color: #e63946;
  color: unset;
  padding: 10px;
  border: none;
  box-shadow: 0 3px #6a1319;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #d1323d;
  }

  &:active {
    box-shadow: 0 1px #6a1319;
    transform: translateY(2px);
  }

  &:disabled {
    background-color: #aaa;
    box-shadow: 0 3px #666;
    pointer-events: none;
  }

  &:focus-visible {
    outline: none;
    background-color: #d1323d;
  }
`;

export default Button;
