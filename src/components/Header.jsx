import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    padding-top: 40px;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        padding-top: 20px;
    }
`;
const StyledImg = styled.img`
    height: 80px;
    @media (max-width: 768px) {
        height: 60px
    }
`;
const Header = () => (
    <HeaderContainer>
        <a href="https://affinipay.com" target="_blank" rel="noreferrer">
            <StyledImg src="../../public/affinipay-logo.svg" alt="Affinipay Logo TM" />
        </a>
    </HeaderContainer>
);

export default Header;