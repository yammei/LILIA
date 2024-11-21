'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from './themes';

// Components
import NavBar from './navigation_bar/navbar';
import App from './app';

const themes = colorThemes();

const Page = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Body>
        {/* <NavBar/> */}
        <App/>
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
  background-color: rgb(225, 225, 225);
`;

export default Page;