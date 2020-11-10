import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100vw;
`;

const StyledFooterContent = styled.div`
    margin: 0 auto;
    max-width: 50%;
    border-top: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        margin: 8px 24px;
        &:first-of-type {
            margin-top: 20px;
        }
        &:last-of-type {
            margin-bottom: 20px;
        }
    }
`;

const Footer = () => (
    <StyledFooter>
        <StyledFooterContent>
            <p>This was created for a code assessment for Richard Boothe by AffiniPay</p>
            <p>The User Interface was designed with React and the behavior was tested with Jest and Enzyme.</p>
        </StyledFooterContent>
    </StyledFooter>
);

export default Footer;
