import styled from 'styled-components';
import BaseGrayArea from '../../components/GrayArea';

const GrayArea = styled(BaseGrayArea)`
  padding: 20px 0 40px;
  background-color: ${(props) => props.theme.nearWhite};
`;

export default GrayArea;
