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
    cursor: pointer;
    width: 100%;
    height: auto;
    margin-top: 70px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 40px;
    box-shadow: 5px 7.5px 1px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    &:hover {
        filter: brightness(.95);
    }
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