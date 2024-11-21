'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from './themes';
import { Inter } from '@next/font/google'; // Good Font List: Poppins, Baloo_2, Cherry_Bomb_One
import { Cherry_Bomb_One } from '@next/font/google'; // Good Font List: Poppins, Baloo_2, Cherry_Bomb_One
import Image from 'next/image';

const customFont = Inter({
    weight: '400',
    subsets: ['latin'],
});

const customFont1 = Cherry_Bomb_One({
    weight: '400',
    subsets: ['latin'],
});

interface WindowProps {
    children: React.ReactNode;
    windowName: string;
    subAppSwitcher: any;
}
export const Window: React.FC<WindowProps> = ({ children, windowName, subAppSwitcher }) => {

    const closeWindow = () => {
        subAppSwitcher(-1);
    };

    return (
        <div className={customFont.className} style={{position: 'relative', width: 'fit-content', margin: 'auto'}}>
            <WindowTopBarExit className={customFont1.className} onClick={closeWindow}><p style={{marginLeft: '7px'}}>X</p></WindowTopBarExit>
            <WindowTopBar>
                <WindowTopBarTitle>{windowName}</WindowTopBarTitle>
            </WindowTopBar>
            <WindowContainer>
                <WindowContent>
                    {children}
                </WindowContent>
            </WindowContainer>
        </div>

    );
};

const WindowContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    min-height: 250px;
    min-width: 250px;
    max-height: 800px;
    max-width: 1000px;
    height: fit-content;
    width: fit-content;
    margin: auto;
    margin-top: 60px;
    padding: 0px;
    background-color: rgba(250, 250, 250, 1);
    border: 5px solid rgb(250, 250, 250);
    border-radius: 0px 0px 20px 20px;
    overflow-x: hidden;
    overflow-y: scroll;
    z-index: 998;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
    background: #e0e0e0;
    }

    &::-webkit-scrollbar-thumb {
    background-color: rgb(0, 0, 0);
    border-radius: 10px;
    border: 2px solid white;
    }

    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, .5) rgba(0, 0, 0, 0);
`;

const WindowTopBar = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 250px;
    max-width: 1000px;
    height: 40px;
    width: 100%;
    margin-top: -40px;
    border-radius: 20px 20px 0px 0;
    border-top: 2px solid rgb(250, 250, 250);
    border-left: 2px solid rgb(250, 250, 250);
    border-right: 2px solid rgb(250, 250, 250);
    border-bottom: 1px solid rgb(250, 250, 250);
    background-color: rgb(50, 50, 50);
    z-index: 1000;
`;

const WindowTopBarTitle = styled.p`
    color: rgb(250, 250, 250);
    font-size: 10pt;
    font-weight: 600;
    margin: auto;
`;

const WindowTopBarExit = styled.div`
    scale: .75;
    cursor: pointer;
    color: rgb(50, 50, 50);
    position: absolute;
    height: 30px;
    width: 30px;
    top: -35px;
    right: 6px;
    background-color: rgb(250, 250, 250);
    border: 2px solid rgb(250, 250, 250);
    border-radius: 999px;
    transform: rotate(20deg);
    z-index: 1001;

    transition:
        background-color 0.1s ease-in-out,
        filter 0.25s ease-in-out,
        transform 0.25s ease-in-out,
        border 0.1s ease-in-out;

    &:hover {
        color: rgb(250, 250, 250);
        transform: scale(1) rotate(110deg);
        filter: brightness(1.2);
        background-color: red;
        border: 2px solid rgb(250, 250, 250);
    }
`;


const WindowContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    min-width: 250px;
    max-width: 1000px;
    height: fit-content;
    width: fit-content;
`;

const AboutMeTextContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    z-index: 1;
`;

const AboutMeBox = styled.div`
    width: 500px;
    margin-left: -25px;
    padding: 15px 20px;
    background-color: rgb(181, 137, 201);
    background: linear-gradient(
        to bottom,
        #b25c8f 0%,
        #4a47a5 100%
    );
    outline: 5px solid rgb(250, 250, 250);
    border-radius: 999px;
    box-shadow: 7.5px 10px 5px rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

const AboutMeText = styled.p`
    color: rgb(250, 250, 250);
    font-size: 14pt;
    text-align: left;
    height: fit-content;
    width: fit-content;
    margin: auto;
    /* background-color: red; */
`;