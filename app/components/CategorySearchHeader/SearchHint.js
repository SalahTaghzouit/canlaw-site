import styled from 'styled-components';

const SearchHint = styled.div`
  float: left;
  text-align: left;
  self-justify: left;
  color: ${(props) => props.theme.lightGray};
  @media all and (max-width: 768px) {
    width: 100%;
    float: none;
    text-align: center;
  }
`;

export default SearchHint;
