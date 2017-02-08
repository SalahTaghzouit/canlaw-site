import styled from 'styled-components';


const H3 = styled.h3`
  max-width: 800px;
  letter-spacing: 1px;
  word-spacing: 3px;
  text-align: left;
  line-height: 40px;
  margin-top: 30px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  
  @media all and (max-width: 400px) {
    letter-spacing: 1px;
    word-spacing: 3px;
    line-height: 30px;
  }
`;

export default H3;
