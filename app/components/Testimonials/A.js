import styled from 'styled-components';
import BaseA from 'canlaw-components/components/A';

const A = styled(BaseA)`
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  outline: none;
  
  &:hover, &:active, &:focus {
    color: white;
  }
`;

export default A;
