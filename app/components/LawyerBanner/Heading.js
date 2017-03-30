import styled from 'styled-components';
import AreaHeader from '../AreaHeader';
import bg from '../AreaHeader/h1-bg-white.png';

const Heading = styled(AreaHeader)`
  background: url(${bg}) no-repeat scroll center bottom rgba(0, 0, 0, 0);
  font-weight: bold;
  font-size: 1.8em;
  color: white;
`;

export default Heading;
