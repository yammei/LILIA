'use client';

import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Components
import NavBar from './navigation_bar/navbar';
import App from './app';
import { Banner } from './banner';
import { Footer } from './footer';
import Loading from './loading';

import background from '@/images/grad.jpg';

const Page = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);


  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div>
      <Body>
        <NavBar/>
        <Banner/>
        <App/>
        <BackgroundImage/>
      </Body>
      <Footer/>
    </div>
  );


};

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: fit-content;
  margin: auto;
  // background-color: rgb(225, 225, 225);
  background-color: transparent; 
  // background-color: red;
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
  filter: brightness(1) sepia(1) contrast(.75) hue-rotate(170deg) blur(30px);
  z-index: -1;
`;

export default Page;