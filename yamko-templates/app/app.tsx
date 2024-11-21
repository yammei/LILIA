
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
            name: 'Backend',
        },
        page1: {
            name: 'Frontend',
            src: '/frontend.html',
        },
        page2: {
            name: 'Resume',
            src: '/resume.html',
        },
        page3: {
            name: 'Contacts',
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

    return (
        <Container ref={containerRef}>

            <MessageContainer style={{ zIndex: '1' }}>
                <Message />
            </MessageContainer>

            <FolderContainer>
                <FolderOrganizer>
                    <Folder folderName={pages.page0.name} subAppID={0} subAppSwitcher={switchSubApplications} activeSubApp={activeWindow} />
                    <Folder folderName={pages.page1.name} subAppID={1} subAppSwitcher={switchSubApplications} activeSubApp={activeWindow} />
                    <Folder folderName={pages.page2.name} subAppID={2} subAppSwitcher={switchSubApplications} activeSubApp={activeWindow} />
                    <Folder folderName={pages.page3.name} subAppID={3} subAppSwitcher={switchSubApplications} activeSubApp={activeWindow} />
                </FolderOrganizer>
            </FolderContainer>

            <SubApplicationContainer>
                {displaySubApplication()}
            </SubApplicationContainer>

            <div style={{height: '100px'}}></div>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: row;
    height: 100%;
    width: fit-content;
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
    width: 450px;
    margin: 10px auto;
    padding: 20px;
    background-color: rgb(250, 250, 250);
    border-radius: 20px;
    // box-shadow: 5px 10px 1px rgba(0, 0, 0, 0.25);
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
    z-index: 999;
`;

export default App;
