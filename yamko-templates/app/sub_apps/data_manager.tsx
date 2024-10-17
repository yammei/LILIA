'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from '@/app/themes';
import {
  BentoDish,
  BentoBoxContainer,
  Button,
  ButtonText,
  Input,
  Text,
  Link,
  CheckBox,
  CustomTable,
  H2,
  Chart
 } from '@/app/essentials';
 import { Inter } from '@next/font/google';

 const customFont = Inter({
     weight: '400',
     subsets: ['latin'],
 });

const themes = colorThemes();

export const DataManager = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
      <DataManagerContainer className={customFont.className}>

        <BentoBoxContainer>
          <BentoDish VerticalScale={1.5} HorizontalScale={1}>
            <H2>Login Form</H2>
            <Input PlaceHolder='Username' Type='text'></Input>
            <Input PlaceHolder='Password' Type='password'></Input>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
              <CheckBox InputType='checkbox'/>
              <Text style={{fontSize: '10pt', marginLeft: '7.5px', marginRight: 'auto'}}>Remember Me</Text>
            </div>
            <Link style={{fontSize: '10pt', marginBottom: '0px'}}>Forgot Username/Password?</Link>
            <Button><ButtonText>Login</ButtonText></Button>
          </BentoDish>
          <BentoDish VerticalScale={1.5} HorizontalScale={2}>
            <H2>Data Table</H2>
            <CustomTable/>
          </BentoDish>
        </BentoBoxContainer>

        {/* <BentoBoxContainer>
          <BentoDish VerticalScale={1.5} HorizontalScale={2}>
            <H2>Data Chart</H2>
            <Chart/>
          </BentoDish>
        </BentoBoxContainer> */}

      </DataManagerContainer>
    </ThemeProvider>
  );


};

const DataManagerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 1080px;
  width: 1920px;
  margin: 0px auto;
  background-color: ${(props) => props.theme.background};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  overflow: hidden;
  z-index: 999;
`;

const Title = styled.p`
  font-size: 25pt;
`;


const ProjectContainer = styled.div`
  height: 500px;
  width: 500px;
  background-color: rgb(250, 250, 250);
  border-radius: 25px;
`;