import BaseImg from 'canlaw-components/components/Img';
import styled from 'styled-components';

const Img = styled(BaseImg)`
  height: 200px;
  border-radius: 50%;
  border-width: 3px;
  border-color: ${(props) => props.theme.accent};
  border-style: solid;
`;

export default Img;
