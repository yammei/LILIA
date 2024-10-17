'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

interface IFrameProps {
    src: string;
}

const Iframe = styled.iframe<{ width: string; height: string }>`
    border: none;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;

export const IFrame: React.FC<IFrameProps> = ({ src }) => {
    const [iframeWidth, setIframeWidth] = useState('500px');
    const [iframeHeight, setIframeHeight] = useState('300px');

    const handleLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
        const iframe = e.target as HTMLIFrameElement;
        if (iframe && iframe.contentWindow) {
            const iframeBody = iframe.contentWindow.document.body;
            setIframeHeight(iframeBody.scrollHeight + 'px');
            setIframeWidth(iframeBody.scrollWidth + 'px');
        }
    };

    return (
        <Iframe
            src={src}
            width={iframeWidth}
            height={iframeHeight}
            onLoad={handleLoad}
            style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
        />
    );
};
