import styled from 'styled-components';
import { Column } from 'hedron';

const SearchColumn = styled(Column)`
  padding-left: 20px!important;
  position: relative;
  cursor: text;
  background: #FFF;
  color: #000;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.primary};
  text-align: center;
`;

export default SearchColumn;
