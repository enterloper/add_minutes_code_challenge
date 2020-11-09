import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background-color: red;
    width: 100vw;
`;

const Footer = () => (
    <StyledFooter>
        <p>This was created for a code assessment for Richard Boothe by AffiniPay</p>
        <p>The interface was designed with React and tested with React Testing Library.</p>
    </StyledFooter>
);

export default Footer;
