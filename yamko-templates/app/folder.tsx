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
    subAppID: number;
    subAppSwitcher: any;
    activeSubApp: number;
}

export const Folder: React.FC<FolderProps> = ({ folderName, subAppID, subAppSwitcher, activeSubApp }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currIcon, setCurrIcon] = useState(fclose);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (activeSubApp === -1) {
            setIsMounted(true);
        }
        if (activeSubApp !== subAppID) {
            console.log(`Closing Sub Application ID: ${subAppID}`);
            if ((isOpen && (activeSubApp !== subAppID)) || (!isOpen && activeSubApp === subAppID)) {
                setIsTransitioning(true);
                setTimeout(() => {
                    setIsOpen(false);
                    setCurrIcon(fclose);
                    setIsTransitioning(false);
                }, 150);
            }
        }
    }, [activeSubApp]);

    const handleClick = () => {
        if (!isOpen) {
            subAppSwitcher(subAppID);
        } else {
            subAppSwitcher(-1);
        }
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
    position: relative;
    height: fit-content;
    width: 5vw;
    margin-bottom: 4vw;
    // background-color: red;
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
    height: auto;
    width: 3.5vw;
    aspect-ratio: 1;
    // background-color: cyan;
    background-image: ${({ icon }) => `url(${icon.src})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: auto;
    margin-top: 0px;
    margin-bottom: .25vw;
    transition: filter 0.25s ease-in-out;

    &:hover {
        filter: brightness(1.2);
    }

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
    position: absolute;
    display: inline-block;
    color: rgb(250, 250, 250);
    font-size: 1vw;
    text-align: center;
    line-height: 1.1;
    top: 3.75vw;
    height: fit-content;
    width: 5vw;
    margin: auto;
    // background-color: cyan;
`;