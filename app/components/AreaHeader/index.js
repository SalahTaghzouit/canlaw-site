import styled from 'styled-components';
import H1 from 'canlaw-components/components/H1';
import bg from './h1-bg.png';

const Heading = styled(H1)`
    background: url(${bg}) no-repeat scroll center bottom rgba(0, 0, 0, 0);
    padding-bottom: 30px;
    text-transform: uppercase;
    margin-bottom: 40px;
`;

export default Heading;
