import styled from 'styled-components';
import BaseButton from 'canlaw-components/components/Button';

const Button = styled(BaseButton)`
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.accent};
  font-size: 18px;
  font-weight: 400;
  padding: 10px 15px;
  border: none;
  height: auto;
  width: 25%;
  border-radius: 3px;
    
  &:hover {
    background: ${(props) => props.theme.accentLighter};
  }
`;

export default Button;
