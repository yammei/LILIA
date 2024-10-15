'use client';

import fopen from '@/images/FOLDER_OPENED.png';
import fclose from '@/images/FOLDER_CLOSED.png';
import { Cherry_Bomb_One } from '@next/font/google'; // Good Font List: Poppins, Baloo_2, Cherry_Bomb_One

import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const customFont = Cherry_Bomb_One({
    weight: '400',
    subsets: ['latin'],
});

interface FolderProps {
    folderName: string;
}

export const Folder: React.FC<FolderProps> = ({ folderName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currIcon, setCurrIcon] = useState(fclose);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleClick = () => {
        setIsTransitioning(true);

        setTimeout(() => {
            setIsOpen(!isOpen);
            setCurrIcon(isOpen ? fclose : fopen);

            setIsTransitioning(false);
        }, 150);
    };

    if (!isMounted) {
        return null;
    }

    return (
        <FolderContainer className={customFont.className}>
            <FolderIMG onClick={handleClick} icon={currIcon} isTransitioning={isTransitioning} />
            <FolderText>{folderName}</FolderText>
        </FolderContainer>
    );
};

const FolderContainer = styled.div`
    scale: .75;
    height: fit-content;
    width: fit-content;
    margin-bottom: -10px;
    /* background-color: red; */
`;

const fadeOutScaleDown = keyframes`
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0.75);
    }
`;

const fadeInScaleUp = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.75);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

interface FolderIMGProps {
    icon: any;
    isTransitioning: boolean;
}

const FolderIMG = styled.div<FolderIMGProps>`
    cursor: pointer;
    height: 100px;
    width: auto;
    aspect-ratio: 1;
    background-image: ${({ icon }) => `url(${icon.src})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 20px;
    margin-bottom: 10px;
    ${({ isTransitioning }) =>
        isTransitioning
            ? css`
                  animation: ${fadeOutScaleDown} 0.15s forwards;
              `
            : css`
                  animation: ${fadeInScaleUp} 0.15s forwards;
              `}
`;

const FolderText = styled.p`
    color: rgb(250, 250, 250);
    font-size: 14pt;
    text-align: center;
    line-height: 1.1;
    max-height: 50px;
    height: fit-content;
    width: 125px;
    margin-top: -5px;
    margin-left: 5px;
`;