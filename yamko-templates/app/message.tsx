'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from './themes';
import { Inter } from '@next/font/google'; // Good Font List: Poppins, Baloo_2, Cherry_Bomb_One
import mei from '@/images/mei.jpg';


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
                <b>May Zhang</b><br/>
            </AboutMeText>
            <p style={{color: 'rgb(100, 100, 100)', fontSize: '8pt', marginTop: '-5px', marginBottom: '10px'}}>@yammei</p>
            <DescriptionText>
                Santa Clara-based Software Engineer with experience building scalable applications.<br/>
                {/* <a style={{color: 'rgb(12, 76, 215)'}} href="mailto:meizhang.dev@gmail.com">meizhang.dev@gmail.com</a><br></br> */}
                <span style={{fontSize: '9pt', display: 'inline-block', marginTop: '8px', color: 'rgb(100, 100, 100)'}}><i>"What is it that drives you this far?"<br/>-Hatsune Miku</i></span>
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
    border-radius: 40px 40px 10px 10px;
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
    color: rgb(50, 50, 50);
    font-size: 15pt;
    text-align: center;
    height: fit-content;
    width: fit-content;
    margin: 5px auto;
    margin-top: 0px;
`;

const DescriptionText = styled.p`
    color: rgb(50, 50, 50);
    font-size: 10pt;
    text-align: center;
    line-height: 1.4;
    height: fit-content;
    width: fit-content;
    max-width: 75%;
    margin: 10px auto;
    margin-top: 0px;
`;