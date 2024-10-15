'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import backgroundIMG from '@/images/clouds.png';
import yammeiIMG from '@/images/yammei.png';
import descriptionIMG from '@/images/wings.png';

// Components
import { Message } from './message';
import { PFP } from './pfp';
import { Folder } from './folder';

const PageBackground = () => {
    const [backgroundPosition, setBackgroundPosition] = useState({ x: 960, y: 540 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();

        // Calculate mouse position relative to the parent container
        const xPosB = ((e.clientX - rect.left) / rect.width) * 1920;
        const yPosB = ((e.clientY - rect.top) / rect.height) * 1080;

        setBackgroundPosition({ x: xPosB, y: yPosB });
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            // Add mousemove event listener to the parent container
            container.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    const x2y = 5;
    const parallaxStrength = {
        foreground: 175,
        midground: 250,
        background: 500,
        ninthlevelofhellground: 666,
    }

    return (
        <Container ref={containerRef}>
            <PageForegroundIMG x={backgroundPosition.x / parallaxStrength.midground} y={backgroundPosition.y / parallaxStrength.midground * x2y} />
            <PageMidgroundIMG x={backgroundPosition.x / parallaxStrength.foreground} y={backgroundPosition.y / 25} />

            <MessageContainer style={{ zIndex: '1' }} x={backgroundPosition.x / parallaxStrength.midground} y={backgroundPosition.y / parallaxStrength.midground * x2y}>
                <PFP />
            </MessageContainer>
            <MessageContainer style={{ zIndex: '0' }} x={backgroundPosition.x / parallaxStrength.background} y={backgroundPosition.y / parallaxStrength.background * x2y}>
                <Message />
            </MessageContainer>

            <FolderContainer>
                <Folder folderName="Data Management" />
                <Folder folderName="ETL Systems" />
                <Folder folderName="Application UI" />
            </FolderContainer>

            <PageBackgroundIMG style={{ backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y / 100}%` }} />
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 1920px;
    height: 1080px;
    overflow: hidden;
`;

interface AboutMeContainerProps {
    x: number;
    y: number;
}

const MessageContainer = styled.div<AboutMeContainerProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 750px;
    height: 150px;
    margin-top: 525px;
    margin-left: calc((1920px / 2) - (500px / 2) + 10px);
    transform: ${({ x, y }) => `translate(${x}%, ${y}%)`};
    z-index: 2;
`;

const FolderContainer = styled.div`
    margin-top: 75px;
    margin-left: 25px;
`;

const PageBackgroundIMG = styled.div`
    position: absolute;
    scale: 1.5;
    top: 0;
    left: 0;
    width: 1920px;
    height: 1080px;
    margin-top: -200px;
    background-image: url(${backgroundIMG.src});
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(0.45) blur(40px);
    z-index: -1;
    transition: background-position 0.05s ease-out;
`;

const PageForegroundIMG = styled.div<AboutMeContainerProps>`
  position: absolute;
  scale: 1.1;
  top: 0;
  left: 0;
  width: 500px;
  height: 160px;
  margin-top: 300px;
  margin-left: 725px;
  background-image: url(${yammeiIMG.src});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  transform: ${({ x, y }) => `translate(${x}px, ${y}px)`}; /* Use transform instead of background-position */
  transition: transform 0.05s ease-out;
`;

const PageMidgroundIMG = styled.div<AboutMeContainerProps>`
  position: absolute;
  scale: 1.1;
  top: 0;
  left: 0;
  width: 650px;
  height: 125px;
  margin-top: 325px;
  margin-left: 650px;
  background-image: url(${descriptionIMG.src});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  transform: ${({ x, y }) => `translate(${x}px, ${y}px)`}; /* Use transform instead of background-position */
  transition: transform 0.05s ease-out;
`;

export default PageBackground;
