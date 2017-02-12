import styled from 'styled-components';
import BaseSelect from 'react-select';
import './scss/default.scss';

const Select = styled(BaseSelect)`
  text-align: left;
  ${(props) => props.hasErrors && `border-color: ${props.theme.danger}!important;`}
`;

export default Select;
