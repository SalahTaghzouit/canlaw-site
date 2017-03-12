import styled from 'styled-components';

const Li = styled.li`
  position: relative;
  padding: 10px 0;
  
  &:not(:last-child):before {
    content: "";
    position: absolute;
    width: 90%;
    height: 1px;
    bottom: 0px;
    left: 5%;
    background-color: ${(props) => props.theme.lightestGray};
    transition: all 0.2s ease-in-out 0s;
  }
  
  ${(props) => props.active && `
    background: ${props.theme.lightestAccent};
  `}
  
  &:hover, &:active, &:focus {
    background: ${(props) => props.theme.lightestAccent};
    outline: none;
  }
`;

export default Li;
