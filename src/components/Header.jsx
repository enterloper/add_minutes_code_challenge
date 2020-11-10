import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    padding-top: 40px;
    display: flex;
    justify-content: center;
`;

const Header = () => (
    <HeaderContainer>
        <a href="https://affinipay.com" target="_blank" rel="noreferrer">
            <img src="../../public/affinipay-logo.svg" alt="Affinipay Logo TM" />
        </a>
    </HeaderContainer>
);

export default Header;