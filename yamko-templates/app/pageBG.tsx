'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backgroundIMG from '@/images/clouds.png';
import yammeiIMG from '@/images/yammei.png'
import descriptionIMG from '@/images/wings.png'
import { AboutMe } from './about';

const PageBackground = () => {
    const [backgroundPosition, setBackgroundPosition] = useState({ x: 50, y: 50 });
    const [foregroundPosition, setForegroundPosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: MouseEvent) => {
        const xPosB = (e.clientX / window.innerWidth) * 2;
        const yPosB = (e.clientY / window.innerHeight) * 2;
        const xPosF = (e.clientX / window.innerWidth) * 2;
        const yPosF = (e.clientY / window.innerHeight) * 10;
        setBackgroundPosition({ x: xPosB, y: yPosB });
        setForegroundPosition({ x: xPosF, y: yPosF });

    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div style={{position: 'absolute'}}>
            <PageForegroundIMG style={{backgroundPosition: `${foregroundPosition.x}% ${foregroundPosition.y}%`,}}/>
            <PageMidgroundIMG style={{backgroundPosition: `${foregroundPosition.x}% ${foregroundPosition.y}%`,}}/>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '750px',
                height: '150px',
                marginTop: '500px',
                marginLeft: `${(1920/2)-(750/2)+35}px`,
                transform: `translate(${foregroundPosition.x}%, ${foregroundPosition.y}%)`,
                zIndex: 2,
                overflow: 'hidden',
                }}>
                <AboutMe/>
            </div>
            <PageBackgroundIMG style={{backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,}}/>
        </div>

    );
};

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
const PageForegroundIMG = styled.div`
  position: absolute;
  scale: .6;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin-top: -50px;
  margin-left: 175px;
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
  margin-left: 285px;
  background-image: url(${descriptionIMG.src});
  background-size: auto;
  background-repeat: no-repeat;
  z-index: 1;
  transition: background-position 0.05s ease-out;
`;

export default PageBackground;
