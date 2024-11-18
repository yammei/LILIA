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

export const Message = () => {
    return (
        <AboutMeContainer>
            <AboutMeTextContainer>
                <AboutMeBox className={customFont.className}>
                    <AboutMeText>
                        hi! i'm mei. welcome to my web-desktop!
                    </AboutMeText>
                </AboutMeBox>
            </AboutMeTextContainer>
        </AboutMeContainer>
    );
};

const AboutMeContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    height: fit-content;
    width: fit-content;
    margin-top: 1vw;
    z-index: 999;
`;

const AboutMeTextContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    z-index: 1;
`;

const AboutMeBox = styled.div`
    width: 27vw;
    margin-left: 0;
    padding: .5vw;
    background-color: rgb(181, 137, 201);
    background: linear-gradient(
        to bottom,
        #b25c8f 0%,
        #4a47a5 100%
    );
    outline: .25vw solid rgb(250, 250, 250);
    border-radius: 99999px;
    box-shadow: .5vw .5vw 2.5px rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

const AboutMeText = styled.p`
    color: rgb(250, 250, 250);
    font-size: 1.25vw;
    text-align: center;
    height: fit-content;
    width: fit-content;
    margin: auto;
    /* background-color: red; */
`;