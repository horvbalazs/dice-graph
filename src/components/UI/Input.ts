import styled from 'styled-components';

const Input = styled.input`
  background-color: #1d3557;
  color: unset;
  box-shadow: 0 0 0 1px #f1faee;
  border: none;
  border-radius: 5px;
  padding: 10px;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #a8dadc;
  }

  &.error {
    box-shadow: 0 0 0 1px #e63946;
  }
`;

export default Input;
