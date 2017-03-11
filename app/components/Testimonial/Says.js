import styled from 'styled-components';

const Says = styled.blockquote`
  font-size: 30px;
  font-style: italic;
  text-align: center;
  font-weight: 400;
  &:before {
    content: '"';
  }
  &:after {
    content: '"';
  }
  
  @media all and (max-width: 400px) {
    font-size: 22px;
  }
`;

export default Says;
