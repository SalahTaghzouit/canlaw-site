import styled from 'styled-components';

const Li = styled.li`
    
  &:hover {
    background: ${(props) => props.theme.lightestAccent};
  }
`;

export default Li;
