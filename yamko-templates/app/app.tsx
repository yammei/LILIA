'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Components
import { Message } from './message';
import { Window } from './window';
import { Folder } from './folder';
import { DataManager } from './sub_apps/data_manager';
import { IFrame } from './iframe';

const App = () => {

    const pages = {
        page0: {
            name: 'backend',
        },
        page1: {
            name: 'frontend',
            src: '/frontend.html',
        },
        page2: {
            name: 'resume',
            src: '/resume.html',
        },
        page3: {
            name: 'contacts',
            src: '/contacts.html',
        },
        page4: {
            name: 'In Dev...',
            src: '/404.html',
        },
    };

    const [activeWindow, setActiveWindow] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const switchSubApplications = (subAppID: number) => {
        setActiveWindow(subAppID);
        console.log(`Switching to Sub Application ID: ${subAppID}`);
    };

    const displaySubApplication = () => {
        switch (activeWindow) {
            case 0:
                return <Window windowName={pages.page0.name} subAppSwitcher={switchSubApplications}><DataManager /></Window>;
            case 1:
                return <Window windowName={pages.page1.name} subAppSwitcher={switchSubApplications}><IFrame src={pages.page1.src} /></Window>;
            case 2:
                return <Window windowName={pages.page2.name} subAppSwitcher={switchSubApplications}><IFrame src={pages.page2.src} /></Window>;
            case 3:
                return <Window windowName={pages.page3.name} subAppSwitcher={switchSubApplications}><IFrame src={pages.page3.src} /></Window>;
            case 4:
                return <Window windowName={pages.page4.name} subAppSwitcher={switchSubApplications}><IFrame src={pages.page4.src} /></Window>;
            default:
                return <></>;
        }
    };

    useEffect(() => {
        const handlePageLoad = () => {
          console.log('Page fully loaded!');
        };
        setActiveWindow(1);

        window.addEventListener('load', handlePageLoad);
            return () => {
          window.removeEventListener('load', handlePageLoad);
        };
    }, [setActiveWindow]);

    return (
        <Container ref={containerRef}>

            <FolderContainer>
                <FolderOrganizer>
                    <Folder folderName={pages.page0.name} subAppID={0} subAppSwitcher={switchSubApplications} activeSubApp={activeWindow} />
                    <Folder folderName={pages.page1.name} subAppID={1} subAppSwitcher={switchSubApplications} activeSubApp={activeWindow} />
                    <Folder folderName={pages.page2.name} subAppID={2} subAppSwitcher={switchSubApplications} activeSubApp={activeWindow} />
                    <Folder folderName={pages.page3.name} subAppID={3} subAppSwitcher={switchSubApplications} activeSubApp={activeWindow} />
                </FolderOrganizer>
            </FolderContainer>

                {displaySubApplication()}

            <div style={{height: '100px'}}></div>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    width: fit-content;
    margin: 20px auto;
    margin-top: 50px;
    // background-color: beige;
`;

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
    z-index: 1;
`;

const FolderContainer = styled.div`
    display: flex;
    align-items: center;
    height: fit-content;
    width: 100%;
    margin: 5px auto;
    margin-top: 10px;
    margin-bottom: 50px;
    padding: 10px 0px;
    background: linear-gradient(to top, #093c4c5f, #0d767656 90%, #1267839d);
    // border-radius: 10px 10px 40px 40px;
    border: 1px solid #8cfffffe;
    border-top: 10px solid #8cfffffe;
    box-shadow: 5px 7.5px 1px rgba(0, 0, 0, 0.1);
    z-index: 1;
`;

const FolderOrganizer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    height: fit-content;
    width: fit-content;
    margin: auto;
`;

const SubApplicationContainer = styled.div`
    width: fit-content;
    margin-left: 40px;
    // background-color: yellow;

    z-index: 999;
`;

const Row1 = styled.div`
    display: flex;
    // top: 200px;
    // left: 200px;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    // background-color: red;
    border-radius: 50px;
`;

const Row2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    width: fit-content;
    // background-color: red;
`;

export default App;
