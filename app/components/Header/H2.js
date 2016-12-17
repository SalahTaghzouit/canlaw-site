import styled from 'styled-components';


const H2 = styled.h2`
  max-width: 600px;
  letter-spacing: 1px;
  word-spacing: 8px;
  text-align: left;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2.5em;
  
  @media all and (max-width: 400px) {
    width: 100%;
    font-size: 20px;
  }
`;

export default H2;
