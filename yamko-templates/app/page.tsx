'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from './themes';
import Image from 'next/image';
import backgroundIMG from '@/images/exBG.png'

// Components
import NavBar from './navigation_bar/navbar';
import PageBackground from './pageBG';

const themes = colorThemes();

const Page = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
      <PageContainer>
        <NavBar/>
        HELLOOOO OWRLD
        <PageBackground/>
      </PageContainer>
    </ThemeProvider>
  );


};

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 1080px;
  height: fit-content;
  width: 1920px;
  margin: 0px auto;
  /* background-color: ${(props) => props.theme.background}; */
  overflow: hidden;
`;

export default Page;