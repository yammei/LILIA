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
                        Hi! I'm Mei, a Santa Clara-Based Software Engineer.
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
    margin: auto;
    padding: 20px;
    /* border: 2px solid white;
    border-radius: 10px; */
    z-index: 999;
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