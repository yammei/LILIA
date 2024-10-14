'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backgroundIMG from '@/images/exBG.png';
import foregroundIMG from '@/images/transRain.gif'

const PageBackground = () => {
    const [backgroundPosition, setBackgroundPosition] = useState({ x: 50, y: 50 });
    const [foregroundPosition, setForegroundPosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: MouseEvent) => {
        const xPosB = (e.clientX / window.innerWidth) * 2;
        const yPosB = (e.clientY / window.innerHeight) * 2;
        const xPosF = (e.clientX / window.innerWidth) * 200;
        const yPosF = (e.clientY / window.innerHeight) * 2;
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
            <PageForegroundIMG style={{foregroundPosition: `${foregroundPosition.x}% ${foregroundPosition.y}%`,}}/>
            <PageBackgroundIMG style={{backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,}}/>
        </div>

    );
};

const PageBackgroundIMG = styled.div`
  position: absolute;
  scale: 1.2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundIMG.src});
  background-size: auto;
  background-repeat: no-repeat;
  filter: brightness(0.75);
  z-index: -1;
  transition: background-position 0.05s ease-out;
`;
const PageForegroundIMG = styled.div`
  position: absolute;
  scale: 1.2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${foregroundIMG.src});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  transition: background-position 0.05s ease-out;
`;

export default PageBackground;
