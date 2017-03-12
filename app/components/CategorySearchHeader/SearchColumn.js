import styled from 'styled-components';
import { Column } from 'hedron';

const SearchColumn = styled(Column)`
  position: relative;
  cursor: text;
  background: #FFF;
  color: #000;
  border-radius: 5px;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  
  @media all and (max-width: 768px) {
    padding: 10px;
    font-size: 0.8em;
  }
`;

export default SearchColumn;
