/**
 * Created by juliusting on 28/03/2017.
 */

import styled from 'styled-components';
import BaseButton from 'canlaw-components/components/Button';


const A = styled(BaseButton)`
  background: ${(props) => props.theme.accent};
  border: none;
  height: auto;
  border-radius: 3px;
`;

export default A;
