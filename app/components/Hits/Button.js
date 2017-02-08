import styled from 'styled-components';

const Button = styled.button`
  color: #000;
  width: 100%
  cursor: pointer;
  outline: none;
  text-align: left;
  
  &:focus, &:hover, &:active   {
    outline: none;
   }
`;

export default Button;
