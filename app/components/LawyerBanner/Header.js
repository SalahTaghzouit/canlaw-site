import styled from 'styled-components';
import AreaHeader from '../AreaHeader';
import bg from '../AreaHeader/h1-bg-white.png';

const Header = styled(AreaHeader)`
  background: url(${bg}) no-repeat scroll center bottom rgba(0, 0, 0, 0);
  font-weight: bold;
  font-size: 36px;
  color: white;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Header;
