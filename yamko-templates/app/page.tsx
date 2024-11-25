'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from './themes';

// Components
import NavBar from './navigation_bar/navbar';
import App from './app';
import background from '@/images/grad.jpg';

const themes = colorThemes();

const Page = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Body>
      <NavBar/>
      <App/>
      <BackgroundImage/>
    </Body>

  );


};

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 100vw;
  // background-color: rgb(225, 225, 225);
  background-color: transparent; 
`;
const BackgroundImage = styled.div`
  position: fixed;
  scale: 5;
  top: 0px;
  left: 500px;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  background-image: url(${background.src});
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(1) sepia(1) contrast(.75) hue-rotate(180deg) blur(30px);
  z-index: -1;
`;

export default Page;