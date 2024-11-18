'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from './themes';
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
 } from './essentials';


// Components
import NavBar from './navigation_bar/navbar';
import PageBackground from './desktop';

const themes = colorThemes();

const Page = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Body>
      <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
        <PageContainer>
          {/* <NavBar/> */}

          {/* <BentoBoxContainer style={{display: 'none'}}>
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
            <BentoDish VerticalScale={1.5} HorizontalScale={2}>
              <H2>Data Chart</H2>
              <Chart/>
            </BentoDish>
          </BentoBoxContainer> */}

          <PageBackground/>
        </PageContainer>
      </ThemeProvider>
    </Body>
  );


};

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 0px;
  height: 100vh;
  width: 95vw;
`;

const PageContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  object-fit: cover;
  height: fit-content;
  width: fit-content;
  background-color: ${(props) => props.theme.background};
  overflow: hidden;
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

export default Page;