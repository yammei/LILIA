'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Syne_Mono } from '@next/font/google';
import { Text } from '../essentials';
import { TypedV2 } from './TypedV2';

const customFont = Syne_Mono({
    weight: '400',
    subsets: ['latin'],
});

export const TitleV2 = () => {

    const texts: string[] = [
        'kecmwkecm mei',
        'wedckomwc mei mei',
        'weicmwiec mei mei mei',
    ];

    return (
        <TitleContainer className={customFont.className} >
            <TextContainer>
                <Text2>mei_os loaded ...</Text2>
                <Text1>hi im may</Text1>
                <Text2>who are you?</Text2>
                <TypedV2 texts={texts}/>
            </TextContainer>
        </TitleContainer>
    );

};

const TitleContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vw * (1080 / 1920));
    width: 100vw;
    mix-blend-mode: difference;
    background-color: red;
    z-index: 2;
`;
const TextContainer = styled.div`
    height: fit-content;
    width: fit-content;
    margin: auto;
`;
const Text1 = styled.p`
    color: rgb(250, 250, 250);
    font-size: 45pt;
`;
const Text2 = styled.p`
    color: rgb(250, 250, 250);
    font-size: 25pt;
`;