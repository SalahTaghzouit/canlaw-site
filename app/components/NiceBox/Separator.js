import styled from 'styled-components';

const Separator = styled.div`
  height: 1px;
  background: ${(props) => props.theme.secondary} none repeat;
  margin-top: 30px;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  margin-left: 25px;
  
  ${(props) => props.hover ? `
    width: 70px;
  ` : `
    width: 40px;
  `}
  
  @media all and (max-width: 450px) {
    display: none;
  }
`;

export default Separator;
