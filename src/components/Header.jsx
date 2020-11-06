import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
`;
const Header = () => (
    <HeaderContainer>
        <img src="../../public/affinipay-logo.svg" alt="Affinipay Logo TM" />
    </HeaderContainer>
);

export default Header;