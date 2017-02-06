import styled from 'styled-components';

const inputInternalHeight = 34;
const Input = styled.input`
  background: none transparent;
  border: 0 none;
  width: 100%;
  box-shadow: none;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  outline: none;
  line-height: 14px;  /* For IE 8 compatibility */
  padding: ${(((inputInternalHeight - 14) / 2) - 2)}px 0 ${(((inputInternalHeight - 14) / 2) + 2)}px;  /* For IE 8 compatibility */
  -webkit-appearance: none;
`;

export default Input;
