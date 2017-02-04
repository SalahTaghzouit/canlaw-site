import { css } from 'styled-components';

const inputStyles = css`
  box-sizing: border-box;
  padding-bottom: 10px;
  transition: none;
  background: transparent;
  width: 100%;
  color: ${(props) => props.theme.primary};
  float: left;
  font-size: 16px;
  font-weight: 500;
  word-spacing: 2.5px;
  text-align: left;
  outline: none;

  border: none;
  border-bottom: 2px solid #191919;
 
  ::placeholder {
    color: ${(props) => props.theme.lightGray};
    font-family: 'Raileway', sans-serif;
  }
  
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.lightGray};
    font-family: 'Raileway', sans-serif;
  }
  :-moz-placeholder           {
    color: ${(props) => props.theme.lightGray};
    font-family: 'Raileway', sans-serif;
  }
  ::-moz-placeholder          {
    color: ${(props) => props.theme.lightGray};
    font-family: 'Raileway', sans-serif;
  }
  :-ms-input-placeholder      {
    color: ${(props) => props.theme.lightGray};
    font-family: 'Raileway', sans-serif;
  } 
   
  &:focus {
    outline: none;
  }
  
  &:required, &:invalid {
    box-shadow: none;
  }
`;

export default inputStyles;
