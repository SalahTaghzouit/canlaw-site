import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 50px;
  border-style: solid;
  border-width: 3px;
  border-color: ${(props) => props.theme.lightestGray};
  border-radius: 10%;
  height: 310px;
`;

export default Wrapper;
