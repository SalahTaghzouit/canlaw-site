import styled from 'styled-components';

const Hr = styled.hr`
  width: 40px;
  border-top: 1px solid ${(props) => props.theme.gray};
  margin-top: 30px;
  transition: all 0.4s;
  margin-left: 0;
`;

export default Hr;
