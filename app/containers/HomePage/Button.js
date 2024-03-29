import styled from 'styled-components';
import BaseButton from 'canlaw-components/components/Button';

const Button = styled(BaseButton)`
  background: ${(props) => props.theme.accent};
  font-size: 24px;
  font-weight: 400;
  padding: 10px 15px;
  border: none;
  height: auto;
  border-radius: 3px;
  
  &:hover {
    background: ${(props) => props.theme.accentLighter};
  }
`;

export default Button;
