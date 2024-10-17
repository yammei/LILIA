'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from './themes';
import { Cherry_Bomb_One } from '@next/font/google'; // Good Font List: Poppins, Baloo_2, Cherry_Bomb_One
import Image from 'next/image';

const customFont = Cherry_Bomb_One({
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
            <WindowTopBarExit onClick={closeWindow}><p style={{marginLeft: '7px'}}>X</p></WindowTopBarExit>
            <WindowContainer>
                <WindowTopBar>
                    <WindowTopBarTitle>─── ⋆⋅ {windowName} ⋅⋆ ───</WindowTopBarTitle>
                </WindowTopBar>
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
    margin-top: 50px;
    padding: 20px;
    background-color: rgba(25, 25, 25, .75);
    border: 5px solid white;
    border-radius: 20px;
    overflow: scroll;
    z-index: 998;
`;

const WindowTopBar = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 250px;
    max-width: 1000px;
    height: 30px;
    width: 100%;
    margin-top: -20px;
    margin-left: -20px;
    background-color: rgb(250, 250, 250);
`;

const WindowTopBarTitle = styled.p`
    color: rgb(50, 50, 50);
    font-size: 12pt;
    margin-top: 2px;
`;

const WindowTopBarExit = styled.div`
    scale: 1.1;
    cursor: pointer;
    color: rgb(50, 50, 50);
    position: absolute;
    height: 30px;
    width: 30px;
    top: -10px;
    right: -10px;
    background-color: rgb(250, 250, 250);
    border: 2px solid rgb(25, 25, 25);
    border-radius: 999px;
    box-shadow: 2.5px 2.5px 1px rgba(25, 25, 25, .25);
    transform: rotate(20deg);
    z-index: 999;

    transition:
        background-color 0.1s ease-in-out,
        filter 0.25s ease-in-out,
        transform 0.25s ease-in-out,
        border 0.1s ease-in-out;

    &:hover {
        color: rgb(250, 250, 250);
        transform: scale(1.125) rotate(110deg);
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
    margin-top: 30px;
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