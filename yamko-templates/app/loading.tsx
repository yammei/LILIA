'use client';

import React from 'react';
import styled from 'styled-components';
import { Inter } from '@next/font/google';

const customFont = Inter({
    weight: '400',
    subsets: ['latin'],
});
export default function Loading() {
    return (
        <LoadingContainer>
            {/* hi */}
            <p className={customFont.className} style={{display: 'inline-block', height: 'fit-content', width: 'fit-content', color: 'rgb(100, 100, 100)', fontSize: '12pt', margin: 'auto'}}>Loading...</p>
        </LoadingContainer>
    );
};

const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    width: 900px;
    background-color: red;
    z-index: -1;
`;