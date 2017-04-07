import styled from 'styled-components';
import BaseButton from 'canlaw-components/components/Button';


const CTA = styled(BaseButton)`
  background: ${(props) => props.theme.accent};
  font-size: 1.3em;
  font-weight: 400;
  padding: 7px 13px;
  border: none;
  height: auto;
  border-radius: 3px;
  
  &:hover {
    background: ${(props) => props.theme.accentLighter};
  }
`;

export default CTA;
