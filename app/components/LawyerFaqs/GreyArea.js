/**
 * Created by juliusting on 28/03/2017.
 */

import styled from 'styled-components';

const GreyArea = styled.section`
  border-top: 1px solid ${(props) => props.theme.nearWhiteBorder};
  background-color: ${(props) => props.theme.nearWhite};
  padding-top: 3%;
  padding-right: 10%;
  padding-left: 10%;
  
`;

export default GreyArea;
