import styled from 'styled-components';

const Ul = styled.ul`
  position: absolute;
  border-radius: 3px;
  min-width: 50%;
  list-style: none;
  padding: 10px;
  background: #FFF;
  margin: 0;
  top: 60px;
  
  ${(props) => props.visible ? `
    visibility: visible; /* shows sub-menu */
    opacity: 1;
    transform: translateY(0%);
    z-index: 1;
    transition-delay: 0s, 0s, 0.3s;
  ` : `
    visibility: hidden; /* hides sub-menu */
    opacity: 0;
    transform: translateY(-2em);
    z-index: -1;
    transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
  `}
`;

export default Ul;
