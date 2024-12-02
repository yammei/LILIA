
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
            
            <Column1>
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
            </Column1>

            <Column2>
                <SubApplicationContainer>
                    {displaySubApplication()}
                </SubApplicationContainer>
            </Column2>

            <div style={{height: '100px'}}></div>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: fit-content;
    width: 1000px;
    margin: 20px auto;
    // background-color: yellow;
`;

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
    margin-top: 0px;
    z-index: 1;
`;

const FolderContainer = styled.div`
    display: flex;
    align-items: center;
    height: fit-content;
    width: 400px;
    margin: 5px auto;
    margin-top: 10px;
    padding: 5px;
    background-color: rgb(250, 250, 250);
    border-radius: 10px 10px 40px 40px;
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
    width: calc(100% - 40px);
    margin-left: 40px;
    z-index: 999;
`;

const Column1 = styled.div`
    display: flex;
    // top: 200px;
    // left: 200px;
    flex-direction: column;
    height: fit-content;
    width: fit-content;
    // background-color: red;
    border-radius: 50px;
`;

const Column2 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    // background-color: cyan;
    border-radius: 50px;
`;

export default App;
