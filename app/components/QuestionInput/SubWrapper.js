import styled from 'styled-components';

const SubWrapper = styled.div`
  display: flex!important;
  align-items: center;
  padding: 0 10px;
  ${(props) => props.hasErrors && `border-color: ${props.theme.danger}!important;`}
`;

export default SubWrapper;
