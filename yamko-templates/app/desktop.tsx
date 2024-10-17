
'use client';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import backgroundIMG from '@/images/clouds.png';
import yammeiIMG from '@/images/yammei.png';
import descriptionIMG from '@/images/wings.png';

// Components
import { Message } from './message';
import { PFP } from './pfp';
import { Window } from './window';
import { Folder } from './folder';
import { DataManager } from './sub_apps/data_manager';
import { IFrame } from './iframe';

const PageBackground = () => {

    const pages = {
        page0: {
            name: 'Data Management',
        },
        page1: {
            name: 'Example Restaurant',
            src: '/restaurant.html',
        },
        page2: {
            name: 'Empty Folder',
            src: '/404.html',
        },
        page3: {
            name: 'Empty Folder',
            src: '/404.html',
        },
        page4: {
            name: 'Empty Folder',
            src: '/404.html',
        },
    };

    const [activeWindow, setActiveWindow] = useState(-1);
    const [backgroundPosition, setBackgroundPosition] = useState({ x: 960, y: 540 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();

        const xPosB = ((e.clientX - rect.left) / rect.width) * 1920;
        const yPosB = ((e.clientY - rect.top) / rect.height) * 1080;

        setBackgroundPosition({ x: xPosB, y: yPosB });
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
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

    const switchSubApplications = (subAppID: number) => {
        setActiveWindow(subAppID);
        console.log(`Switching to Sub Application ID: ${subAppID}`);
    };

    const displaySubApplication = () => {
        switch (activeWindow) {
            case 0:
                return <Window windowName={pages.page0.name} subAppSwitcher={switchSubApplications}><DataManager /></Window>;
            case 1:
                return <Window windowName={pages.page1.name} subAppSwitcher={switchSubApplications}><IFrame src={pages.page1.src} /></Window>;
            case 2:
                return <Window windowName={pages.page2.name} subAppSwitcher={switchSubApplications}><IFrame src={pages.page2.src} /></Window>;
            case 3:
                return <Window windowName={pages.page3.name} subAppSwitcher={switchSubApplications}><IFrame src={pages.page3.src} /></Window>;
            case 4:
                return <Window windowName={pages.page4.name} subAppSwitcher={switchSubApplications}><IFrame src={pages.page4.src} /></Window>;
            default:
                return <></>;
        }
    };

    return (
        <Container ref={containerRef}>
            <PageForegroundIMG x={backgroundPosition.x / parallaxStrength.midground} y={backgroundPosition.y / parallaxStrength.midground * x2y} />
            <PageMidgroundIMG x={backgroundPosition.x / parallaxStrength.foreground} y={backgroundPosition.y / 25} />

            <MessageContainer style={{ zIndex: '1' }} x={backgroundPosition.x / parallaxStrength.ninthlevelofhellground} y={backgroundPosition.y / parallaxStrength.ninthlevelofhellground * x2y}>
                <PFP />
            </MessageContainer>
            <MessageContainer style={{ zIndex: '0' }} x={backgroundPosition.x / parallaxStrength.ninthlevelofhellground} y={backgroundPosition.y / parallaxStrength.ninthlevelofhellground * x2y}>
                <Message />
            </MessageContainer>

            {displaySubApplication()}

            <FolderContainer>
                <Folder folderName={pages.page0.name} subAppID={0} subAppSwitcher={switchSubApplications} activeSubApp={activeWindow} />
                <Folder folderName={pages.page1.name} subAppID={1} subAppSwitcher={switchSubApplications} activeSubApp={activeWindow} />
                <Folder folderName={pages.page2.name} subAppID={2} subAppSwitcher={switchSubApplications} activeSubApp={activeWindow} />
                <Folder folderName={pages.page3.name} subAppID={3} subAppSwitcher={switchSubApplications} activeSubApp={activeWindow} />
                <Folder folderName={pages.page4.name} subAppID={4} subAppSwitcher={switchSubApplications} activeSubApp={activeWindow} />
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
    margin-left: calc((1920px / 2) - (500px / 2) + 15px);
    transform: ${({ x, y }) => `translate(${x}%, ${y}%)`};
    z-index: 2;
`;

const FolderContainer = styled.div`
    position: absolute;
    top: 75px;
    left: 25px;
    /* margin-top: 75px;
    margin-left: 25px; */
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

interface StyledIframeProps {
    src: string;
    width?: string;
    height?: string;
}

export default PageBackground;
