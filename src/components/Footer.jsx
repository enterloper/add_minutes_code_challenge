import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100vw;
    font-family: "Avenir Next", "Helvetica Neue", Arial, sans serif;
    font-size: 10px;
`;

const StyledFooterContent = styled.div`
    margin: 0 auto;
    max-width: 50%;
    border-top: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    > p {
        margin: 4px 24px;
        &:first-of-type {
            margin-top: 20px;
        }
        &:last-of-type {
            margin-bottom: 20px;
        }
    }
    
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const Footer = () => (
    <StyledFooter>
        <StyledFooterContent>
            <p>This was created for a code assessment for AffiniPay by <a href="https://github.com/enterloper/affinipay_code_challenge" target="_blank" rel="noreferrer">Richard Boothe</a></p>
            <p>The User Interface was designed with React and the behavior was tested with Jest and Enzyme.</p>
        </StyledFooterContent>
    </StyledFooter>
);

export default Footer;
