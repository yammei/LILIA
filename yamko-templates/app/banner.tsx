'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import bannerImage from '@/images/banner.jpg';


export const Banner = () => {


    return (
        <BannerContainer>
            <BannerIMG/>
        </BannerContainer>
    );
};

const BannerContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 70px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    background-color: red;
    border-radius: 40px;
    overflow: hidden;
`;

const BannerIMG = styled.div`
    scale: 1.1;
    width: 100%;
    height: 400px;
    margin-top: -20px;
    margin-left: -50px;
    background-color: pink;
    background-image: url(${bannerImage.src});
    background-size: cover;
    background-repeat: no-repeat;
`;