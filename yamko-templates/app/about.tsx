'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from './themes';
import { Cherry_Bomb_One } from '@next/font/google'; // Good Font List: Poppins, Baloo_2, Cherry_Bomb_One
import Image from 'next/image';
import mei from '@/images/mei.png'

const customFont = Cherry_Bomb_One({
    weight: '400',
    subsets: ['latin'],
});

export const AboutMe = () => {
    return (
        <AboutMeContainer>
            <ProfilePicture/>
            <AboutMeText className={customFont.className}>Hi! I'm Mei, a Santa Clara-Based Software Engineer with experience building data management tools for enterprise systems. Feel free to use some of them below!</AboutMeText>
            <AboutMeTextTail/>
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

const ProfilePicture = styled.div`
    width: 75px;
    height: 75px;
    background-image: url(${mei.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgb(181, 137, 201);
    border: 2px solid rgb(250, 250, 250);
    border-radius: 999px;
    box-shadow: 7.5px 10px 5px rgba(0, 0, 0, 0.25);
`;

const AboutMeText = styled.p`
    color: rgb(25, 25, 25);
    font-size: 12pt;
    text-align: left;
    width: 500px;
    /* margin-top: 25px; */
    margin-left: 25px;
    padding: 15px 20px;
    background-color: rgb(225, 225, 225);
    border-radius: 15px;
    box-shadow: 7.5px 10px 5px rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

const AboutMeTextTail = styled.div`
    scale: .75;
    position: absolute;
    height: 0px;
    width: 0px;
    /* margin-top: 25px; */
    margin-left: 70px;
    border-top: 100px solid rgb(225, 225, 225);
    border-left: 100px solid transparent;
    border-radius: 2px;
    z-index: 0;
`;