import styled from 'styled-components';
import { Row } from 'hedron';

const Wrapper = styled(Row)`
  position: relative;
  font-size: 1.8em;
  min-width: 80%;
  padding-bottom: 15px;
  text-align: left;
  justify-content: center;
  font-weight: 600;
  
  &:before {
    content: "";
    position: absolute;
    width: 50%;
    height: 2px;
    bottom: 0px;
    left: 25%;
    background-color: ${(props) => props.theme.searchUnderlineColor};
    transition: all 0.2s ease-in-out 0s;
  }
`;

export default Wrapper;
