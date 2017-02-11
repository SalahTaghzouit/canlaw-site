import styled from 'styled-components';

const Li = styled.li`
  margin-top: 10px;
  display: block;
  &:before { 
    content: counters(item, ".") " "; 
    counter-increment: item;
  }
`;

export default Li;
