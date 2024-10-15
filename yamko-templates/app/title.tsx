'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import yammei from '@/images/yammei.png'


const PageBackground = () => {
    const [foregroundPosition, setForegroundPosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: MouseEvent) => {
        const xPosF = (e.clientX / window.innerWidth) * 2;
        const yPosF = (e.clientY / window.innerHeight) * 10;
        setForegroundPosition({ x: xPosF, y: yPosF });

    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <PageForegroundIMG style={{backgroundPosition: `${foregroundPosition.x}% ${foregroundPosition.y}%`,}}/>
    );
};

const PageForegroundIMG = styled.div`
  position: absolute;
  scale: 1.2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin-top: 300px;
  margin-left: 500px;
  background-image: url(${yammei.src});
  background-size: auto;
  background-repeat: no-repeat;
  z-index: 1;
  transition: background-position 0.05s ease-out;
`;

export default PageBackground;
