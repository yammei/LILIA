'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from './themes';
import { Inter } from '@next/font/google'; // Good Font List: Poppins, Baloo_2, Cherry_Bomb_One
import mei from '@/images/mei_anim.png';


const customFont = Inter({
    weight: '400',
    subsets: ['latin'],
});

export const Message = () => {
    return (
        <AboutMeContainer className={customFont.className}>
            <ProfilePicture/>
            <ProfileStatus>
                <p style={{fontSize: '10pt', margin: 'auto'}}>💻</p>
            </ProfileStatus>
            <AboutMeText>
                Hello! I'm <b>Mei Zhang</b>.
            </AboutMeText>
            <DescriptionText>
                Full-Stack Engineer | Santa Clara, CA<br></br>
                <a style={{color: 'rgb(12, 76, 215)'}} href="mailto:meizhang.dev@gmail.com">meizhang.dev@gmail.com</a><br></br>
                CS B.Sc. @ CSUS 23'
            </DescriptionText>
        </AboutMeContainer>
    );
};

const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 250px;
    height: fit-content;
    width: 450px;
    padding: 20px;
    background-color: rgb(250, 250, 250);
    border-radius: 20px;
    // box-shadow: 5px 10px 1px rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

const ProfilePicture = styled.div`
    width: 75px;
    height: 75px;
    margin: 10px auto;
    background-color: rgb(255, 204, 0);
    background-image: url(${mei.src});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 999px;
    overflow: hidden;
`;
const ProfileStatus = styled.div`
    display: flex;
    height: 30px;
    width: 30px;
    margin-top: -${30 + 8}px;
    margin-right: -${(75/2) + (30/2)}px;
    margin-bottom: 10px;
    background-color: rgb(240, 240, 240);
    border: 2px solid rgb(250, 250, 250);
    border-radius: 999px;
    overflow: hidden;
`;

const AboutMeText = styled.p`
    color: rgb(25, 25, 25);
    font-size: 15pt;
    text-align: center;
    height: fit-content;
    width: fit-content;
    margin: 10px auto;
`;

const DescriptionText = styled.p`
    color: rgb(50, 50, 50);
    font-size: 10pt;
    text-align: center;
    height: fit-content;
    width: fit-content;
    margin: 10px auto;
    margin-top: 0px;
`;