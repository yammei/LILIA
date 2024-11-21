'use client';

import fopen from '@/images/FOLDER_OPENED.png';
import fclose from '@/images/FOLDER_CLOSED.png';
import { Inter } from '@next/font/google'; // Good Font List: Poppins, Baloo_2, Inter

import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const customFont = Inter({
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
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 75px;
    margin: 10px;
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
    width: 50px;
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
    display: inline-block;
    color: rgb(50, 50, 50);
    font-size: 8pt;
    text-align: center;
    line-height: 1.1;
    top: 50px;
    height: fit-content;
    max-width: 5vw;
    margin: auto;
    // background-color: cyan;
`;