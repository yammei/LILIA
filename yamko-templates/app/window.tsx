'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from './themes';
import { Silkscreen } from '@next/font/google'; // Good Font List: Poppins, Baloo_2, Cherry_Bomb_One
import { Cherry_Bomb_One } from '@next/font/google'; // Good Font List: Poppins, Baloo_2, Cherry_Bomb_One
import Image from 'next/image';

const customFont = Silkscreen({
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
        <div className={customFont.className} 
            style={{
                position: 'relative',   
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: 'fit-content',
                width: 'fit-content',
                margin: '0px auto',
                borderRadius: '0px',
                // backgroundColor: 'green',
                overflow: 'hidden',
            }}
        >
            <WindowTopBar>
                <WindowTopBarTitle className={customFont.className}>
                    <span style={{display: 'inline-block', marginLeft: 'auto', marginRight: '10px', fontSize: '10pt', color: 'rgb(200, 200, 200)'}}>{"attention: { "}</span>
                    {windowName}
                    <span style={{display: 'inline-block', marginLeft: '10px', marginRight: 'auto', fontSize: '10pt', color: 'rgb(200, 200, 200)'}}>{" } has been selected."}</span> 
                </WindowTopBarTitle>
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
    height: fit-content;
    width: 100%;
    margin-top: 50px;
    padding: 20px;
    // background-color: rgba(250, 250, 250, 1);
    background: linear-gradient(to top, #093c4c5f, #086262a1 90%, #126783bb);
    border: 1px solid #8cfffffe;
    border-top: 10px solid #8cfffffe;
    overflow-x: hidden;
    overflow-y: scroll;
    z-index: 998;

    &::-webkit-scrollbar {
        height: 50px;
        width: 10px;
    }

    &::-webkit-scrollbar-track {
    background: #e0e0e0;
    }

    &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .25);
    border-radius: 10px;
    border: 2px solid white;
    }

    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: rgb(200, 200, 200) rgba(0, 0, 0, 0);
`;

const WindowTopBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 250px;
    max-width: 1000px;
    height: 50px;
    width: 100%;
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0px 0px 0px 0px;
    border-top: 1px solid #8cfffffe;
    border-left: 5px solid #8cfffffe;
    border-bottom: 1px solid #8cfffffe;
    background: linear-gradient(to left, #093c4c5f, #197c7c85 75%, #1c97c1c0);
    overflow: hidden;
    z-index: 1000;
    transition: filter .25s ease-in-out;

    &:hover {
        filter: brightness(1.5);
    }
`;

const WindowTopBarTitle = styled.p`
    display: inline-block;
    color: rgb(250, 250, 250);
    font-size: 10pt;
    font-weight: 600;
    margin: auto;
    padding: 3px 20px;
    // background-color: rgb(119, 163, 217);
    border-radius: 999px;
`;

const WindowTopBarExit = styled.div`
    scale: .5;
    cursor: pointer;
    color: rgb(200, 200, 200);
    position: absolute;
    height: 30px;
    width: 30px;
    top: 12px;
    right: 15px;
    background-color: rgb(200, 200, 200);
    border: 2px solid rgb(200, 200, 200);
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, .25);
    border-radius: 999px;
    transform: rotate(0deg);
    z-index: 1001;

    transition:
        background-color 0.1s ease-in-out,
        filter 0.25s ease-in-out,
        transform 0.25s ease-in-out,
        border 0.1s ease-in-out,
        scale .15s ease-in-out
    ;

    &:hover {
        scale: .75;
        color: rgb(250, 250, 250);
        transform: scale(1) rotate(90deg);
        filter: brightness(1.2);
        background-color: #dc4760;
        border: 2px solid rgb(250, 250, 250);
        box-shadow: none;
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
    margin: 0px auto;
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