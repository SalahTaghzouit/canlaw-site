import styled from 'styled-components';
import header from './header.jpg';

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 150px;
  padding-top: 70px;
  background: url(${header}) no-repeat;
  background-size: cover;
  background-position-y: 40%;
  color: #FFF;
`;

export default Wrapper;
