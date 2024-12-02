'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from './themes';
import { Inter } from '@next/font/google'; // Good Font List: Poppins, Baloo_2, Cherry_Bomb_One
import mei from '@/images/meipfp.jpg';


const customFont = Inter({
    weight: '400',
    subsets: ['latin'],
});

export const Message = () => {
    return (
        <AboutMeContainer className={customFont.className}>
            <ProfilePicture/>
            <ProfileStatus>
                <p style={{fontSize: '10pt', margin: 'auto'}}>🌙</p>
            </ProfileStatus>
            <AboutMeText>
                hi, i'm <b>may</b>.
            </AboutMeText>
            <DescriptionText>
                Full-Stack Engineer | Santa Clara, CA<br></br>
                <a style={{color: 'rgb(12, 76, 215)'}} href="mailto:meizhang.dev@gmail.com">meizhang.dev@gmail.com</a><br></br>
                <span style={{fontSize: '9pt', display: 'inline-block', marginTop: '10px', color: 'rgb(75, 75, 75)'}}><i>"Build a world you envison."</i></span>
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
    width: 400px;
    padding: 20px 20px;
    background-color: rgb(250, 250, 250);
    border-radius: 40px;
    box-shadow: 5px 7.5px 1px rgba(0, 0, 0, 0.1);
    z-index: 1;
`;

const ProfilePicture = styled.div`
    width: 75px;
    height: 75px;
    margin: 10px auto;
    background-color: rgb(255, 231, 133);
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
    background-color: rgb(119, 163, 217);
    border: 2.5px solid rgb(250, 250, 250);
    border-radius: 999px;
    overflow: hidden;
`;

const AboutMeText = styled.p`
    color: rgb(25, 25, 25);
    font-size: 17pt;
    text-align: center;
    height: fit-content;
    width: fit-content;
    margin: 5px auto;
`;

const DescriptionText = styled.p`
    color: rgb(50, 50, 50);
    font-size: 10pt;
    text-align: center;
    line-height: 1.4;
    height: fit-content;
    width: fit-content;
    margin: 10px auto;
    margin-top: 0px;
`;