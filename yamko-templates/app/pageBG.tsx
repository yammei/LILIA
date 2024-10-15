'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backgroundIMG from '@/images/clouds.png';
import yammeiIMG from '@/images/yammei.png' // https://www.textstudio.com/logo/bubble-style-3d-text-155
import descriptionIMG from '@/images/wings.png'

// Components
import { Message } from './message';
import { PFP } from './pfp';
import { Folder } from './folder';

const PageBackground = () => {
    const [backgroundPosition, setBackgroundPosition] = useState({ x: 1920/2, y: 1080/2 });

    const handleMouseMove = (e: MouseEvent) => {
        const xPosB = (e.clientX / window.innerWidth) * 2;
        const yPosB = (e.clientY / window.innerHeight) * 2;
        setBackgroundPosition({ x: xPosB, y: yPosB });
        console.log(`x: ${e.clientX}, y: ${e.clientY}`);
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Container>
            <PageForegroundIMG style={{backgroundPosition: `${backgroundPosition.x*2}% ${backgroundPosition.y*5}%`}}/>
            <PageMidgroundIMG style={{backgroundPosition: `${backgroundPosition.x*2}% ${backgroundPosition.y*5}%`}}/>

            <MessageContainer style={{zIndex: '1'}} foregroundX={backgroundPosition.x*2} foregroundY={backgroundPosition.y*5}>
                <PFP/>
            </MessageContainer>
            <MessageContainer style={{zIndex: '0'}} foregroundX={backgroundPosition.x*1} foregroundY={backgroundPosition.y*1}>
                <Message/>
            </MessageContainer>

            <FolderContainer>
                <Folder folderName='Data Management'/>
                <Folder folderName='ETL Systems'/>
                <Folder folderName='Application UI'/>
            </FolderContainer>

            <PageBackgroundIMG style={{backgroundPosition: `${backgroundPosition.x*1}% ${backgroundPosition.y*1}%`}}/>
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
`;

interface AboutMeContainerProps {
    foregroundX: number;
    foregroundY: number;
}

const MessageContainer = styled.div<AboutMeContainerProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 750px;
    height: 150px;
    margin-top: 525px;
    margin-left: calc((1920px / 2) - (500px / 2) + 0px);
    transform: ${({ foregroundX, foregroundY }) => `translate(${foregroundX}%, ${foregroundY}%)`};
    z-index: 2;
`;

const PageBackgroundIMG = styled.div`
  position: absolute;
  scale: 1.1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin-top: -200px;
  background-image: url(${backgroundIMG.src});
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(0.45) blur(40px);
  z-index: -1;
  transition: background-position 0.05s ease-out;
`;

const FolderContainer = styled.div`
    margin-top: 75px;
    margin-left: 25px;
`;

const PageForegroundIMG = styled.div`
  position: absolute;
  scale: .6;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin-top: -50px;
  margin-left: 125px;
  background-image: url(${yammeiIMG.src});
  background-size: auto;
  background-repeat: no-repeat;
  z-index: 1;
  transition: background-position 0.05s ease-out;
`;

const PageMidgroundIMG = styled.div`
  position: absolute;
  scale: .75;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin-top: 95px;
  margin-left: 250px;
  background-image: url(${descriptionIMG.src});
  background-size: auto;
  background-repeat: no-repeat;
  z-index: 1;
  transition: background-position 0.05s ease-out;
`;

export default PageBackground;
