import styled from 'styled-components';
import WhiteArea from '../WhiteArea';

const GrayArea = styled(WhiteArea)`
  background-color: ${(props) => props.theme.nearWhite};
`;

export default GrayArea;
