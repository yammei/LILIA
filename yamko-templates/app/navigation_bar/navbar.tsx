'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from '@/app/themes';

const themes = colorThemes();

const NavBar = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
      <NavBarContainer>
      <NavBarLink href='/'>yammeiOS</NavBarLink>
        <NavBarLinksContainer>
            <NavBarLink href='/'>About</NavBarLink>
            <NavBarLink href='/'>Services</NavBarLink>
            <NavBarLink href='/'>Pricing</NavBarLink>
            <NavBarLink href='/'>Contact</NavBarLink>
        </NavBarLinksContainer>
      </NavBarContainer>
    </ThemeProvider>
  );


};

const NavBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 50px;
    height: fit-content;
    width: 1920px;
    margin: 0px auto;
    padding: 10px;
    background: linear-gradient(
        to bottom,
        ${(props) => props.theme.navbarBG} 0%,
        ${(props) => props.theme.navbarBG.replace(/\.25\)/, '.0)')} 100%
    );
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`;

const NavBarLinksContainer = styled.div`
    height: fit-content;
    width: min-content;
    margin: auto;
    margin-right: 20px;
    /* background-color: cyan; */
`;

const NavBarLink = styled.a`
    color: ${(props) => props.theme.text};
    margin: auto 10px;
    padding: 10px;
    &:hover {
        color: ${(props) => props.theme.textHovered};
    }
    /* background-color: red; */
`;

const NavBarLinkText = styled.p`
`;

export default NavBar;