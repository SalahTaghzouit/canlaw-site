import styled from 'styled-components';

const Content = styled.p`
  line-height: 20px;
  text-align: left;
  color: ${(props) => props.theme.lightGray};
  font-size: 0.9rem;
  margin-top: 15px;
  font-weight: 500;
`;

export default Content;
