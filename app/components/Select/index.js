import styled from 'styled-components';
import { Creatable } from 'react-select';

// import BaseSelect from 'react-select';
import './scss/default.scss';

const Select = styled(Creatable)`
  text-align: left;
  ${(props) => props.hasErrors && `border-color: ${props.theme.danger}!important;`}
`;

export default Select;
