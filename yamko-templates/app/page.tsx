'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import { NavBarV2 } from "./v2/NavBarV2";
import { TitleV2 } from "./v2/TitleV2";
import { GlobeV2 } from './v2/GlobeV2';
import { Footer } from './footer';
import Loading from './loading';
import App from './app';

import bannerImage from '@/images/mei_os_banner.jpg';

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Body>
        <NavBarV2 />
        {/* <TitleV2 /> */}
        <BannerIMG mouseX={mousePosition.x} mouseY={mousePosition.y}>
          <Globe mouseX={mousePosition.x*7.5} mouseY={mousePosition.y*7.5}><GlobeV2/></Globe>
        </BannerIMG>
        <App/>
      </Body>
      <Footer />
    </div>
  );
};

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 100vw;
  margin: auto;
  background-color: rgb(0, 0, 0);
  overflow: hidden;
`;

interface BannerIMGProps {
  mouseX: number;
  mouseY: number;
}
const BannerIMG = styled.div<BannerIMGProps>`
  position: relative;
  scale: 1.05;
  width: 100%;
  height: calc(100vw * (1080 / 1920));
  // background-color: pink;
  background-image: url(${bannerImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  will-change: transform;
  transition: transform 0.1s ease-out;
  transform: translate(${(props) => props.mouseX}px, ${(props) => props.mouseY}px);
  z-index: 0;
`;

interface GlobeProps {
  mouseX: number;
  mouseY: number;
}
const Globe = styled.div<GlobeProps>`
  position: absolute;
  will-change: transform;
  transition: transform 0.1s ease-out;
  transform: translate(${(props) => props.mouseX}px, ${(props) => props.mouseY}px);
  z-index: 999;
`;


export default Page;
