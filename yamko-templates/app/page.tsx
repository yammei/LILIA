'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Inter } from '@next/font/google';
import { Syne_Mono } from '@next/font/google'; // orbitron > silkscreen > stalinist_one

// Components
import { NavBarV2 } from "./v2/NavBarV2";
import { TitleV2 } from "./v2/TitleV2";
import { GlobeV2 } from './v2/GlobeV2';
import { ProfileV2 } from './v2/ProfileV2';
import { Footer } from './footer';
import Loading from './loading';
import App from './app';

import bannerImage from '@/images/mei_os_banner.jpg';

const customFont = Inter({
  weight: '400',
  subsets: ['latin'],
});

const customFont1 = Syne_Mono({
  weight: '400',
  subsets: ['latin'],
});

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
        <Loading />
      </div>
    );
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Body className={customFont.className} style={{zIndex: '0'}}>
        <NavBarV2/>

        {/* <TitleV2 /> */}
        <BannerContainer>
          <BannerIMG>
            <div style={{marginTop: '200px', marginLeft: '-75px'}}>
              <div style={{position: 'absolute', marginTop: '125px', marginLeft: '250px'}}><GlobeV2/></div>
              <div style={{position: 'absolute', marginTop: '-50px', marginLeft: '00px'}}><ProfileV2/></div>
              <div style={{position: 'absolute', marginTop: '-250px', marginLeft: '200px'}}><GlobeV2/></div>
            </div>
          </BannerIMG>
        </BannerContainer>

        <AppContainer>
          <div 
            style={{
              position: 'fixed',
              top: '40vh',
              marginLeft: '400px',
              width: '75vh'
            }}
          >
            <SectionTitle className={customFont1.className}>informat:iON</SectionTitle>
            <div>
              <SubSectionTitle className={customFont1.className}>THE ESSENSE OF OUR VIRTUAL WORLD</SubSectionTitle>
              <SubSectionTitle className={customFont1.className}>THE ESSENSE OF OUR VIRTUAL WORLD</SubSectionTitle>
              <SubSectionTitle className={customFont1.className}>THE ESSENSE OF OUR VIRTUAL WORLD</SubSectionTitle>
              <SubSectionTitle className={customFont1.className}>THE ESSENSE OF OUR VIRTUAL WORLD</SubSectionTitle>
            </div>

          </div>
          <App/>
        </AppContainer>

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
  background-color: rgb(0, 0, 0);
  overflow: hidden;
  z-index: 0;
`;

const BannerContainer = styled.div`
  height: 100%;  
  width: 100%;
  overflow: hidden;
  z-index: 1;
`;

const BannerIMG = styled.div`
  position: relative;
  scale: 1.05;
  width: 100%;
  min-width: 1366px;
  max-width: 2560px;
  height: calc(100vw * (1080 / 1920));
  // background-color: pink;
  background-image: url(${bannerImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  will-change: transform;
  transition: transform .0167s ease-out;
  z-index: 0;
  overflow: hidden;
`;

const SectionTitle = styled.p`
  display: inline-block;
  color: #14919163;
  font-size: 60pt;
  font-weight: 500;
  height: fit-content;
  width: fit-content;
  margin: 0px 0px;
  transform: rotate(90deg);
`;
const SubSectionTitle = styled.p`
  display: inline-block;
  color: #1491913f;
  font-size: 20pt;
  font-weight: 500;
  height: fit-content;
  width: max-content;
  margin: 10px 0px;
  transform: rotate(90deg);
`;

const AppContainer = styled.div`
  position: relative;
  height: fit-content;  
  width: fit-content;
  z-index: 0;
`;

export default Page;
