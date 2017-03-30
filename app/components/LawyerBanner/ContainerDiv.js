/**
 * Created by juliusting on 28/03/2017.
 */
import styled from 'styled-components';
import bg from './banner.jpg';

const ContainerDiv = styled.div`
  background: url(${bg}) center;
  background-size: cover;
  background-position-y: 40%;
  background-position-x: 40%;
  opacity: 1;
  position: relative;
  padding: 40px 0px 50px 0px;
`;

export default ContainerDiv;
