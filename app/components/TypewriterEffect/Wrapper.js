import styled, { keyframes } from 'styled-components';

const blinkCaret = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
`;

const Wrapper = styled.span`
  font-family: 'Raleway', sans-serif;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .05em solid ${(props) => props.color ? props.color : '#FFF'}; /* The typwriter cursor */
  padding-right: 5px;
  white-space: nowrap; /* Keeps the content on a single line */
  animation: ${blinkCaret} .75s step-end infinite;
`;

export default Wrapper;
