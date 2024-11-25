'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from '@/app/themes';
import icon from '@/images/icon.png';


const themes = colorThemes();

const NavBar = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
      
      <NavBarContainer>
        <IconContainer onClick={scrollToTop}>
          <Icon className='icon' alt=''/>
          <NavBarLink style={{cursor: 'pointer', marginTop: '-9px', marginLeft: '-5px'}}>mei_os</NavBarLink>
        </IconContainer>
        {/* <NavBarLinksContainer>
          <NavBarLink href='/'>About</NavBarLink>
          <NavBarLink href='/'>Services</NavBarLink>
          <NavBarLink href='/'>Pricing</NavBarLink>
          <NavBarLink href='/'>Contact</NavBarLink>
        </NavBarLinksContainer> */}
      </NavBarContainer>
    </ThemeProvider>
  );
};

const NavBarContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  min-height: fit-content;
  height: fit-content;
  width: 100vw;
  margin: 0px auto;
  padding: 10px;
  background-color: rgb(250, 250, 250);
  // border-bottom: 2px solid rgb(200, 200, 200);
  box-shadow: 5px 0px 10px rgba(0, 0, 0, .1);
  z-index: 9999;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;  
  width: fit-content;
  margin: auto auto;
  // background-color: red;
  &:hover .icon {
    transition: transform .25s ease-in-out;
    transform: rotate(180deg);
  }
`;

const Icon = styled.img`
  cursor: pointer;
  height: 15px;
  width: 15px;
  background-color: rgb(250, 250, 250);
  background-image: url(${icon.src});
  background-size: cover;
  background-repeat: no-repeat;
  margin: auto;
  padding: 8px;

`;

const NavBarLinksContainer = styled.div`
  height: fit-content;
  width: min-content;
  margin: auto;
  margin-right: 20px;
  /* background-color: cyan; */
`;

const NavBarLink = styled.a`
  color: rgb(100, 100, 100);
  font-size: 9pt;
  margin: auto 10px;
  padding: 10px;
  &:hover {
    color: rgb(25, 25, 25);
  }
  /* background-color: red; */
`;

export default NavBar;