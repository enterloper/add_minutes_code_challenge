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
        <p>This was created for a code assessment by Richard Boothe for AffiniPay</p>
        <p>In consdiration of the requirements of this challenge, modern libraries were not considered as traditional HTML and JavaScript would suffice.</p>
    </StyledFooter>
);

export default Footer;
