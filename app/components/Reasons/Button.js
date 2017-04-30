import BaseButton from 'canlaw-components/components/Button';
import styled from 'styled-components';

const Button = styled(BaseButton)`
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
