import styled from 'styled-components';

const Label = styled.button`
  cursor: pointer;
  display: block;
  margin-right: 10px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  padding: 5px 10px;
  white-space: nowrap;
  outline: none;
  
  &:active {
    outline: none;
  }
`;

export default Label;
