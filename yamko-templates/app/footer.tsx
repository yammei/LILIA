import React from 'react';
import { Inter } from '@next/font/google';
import styled from 'styled-components';

const customFont = Inter({
    weight: '400',
    subsets: ['latin'],
});

export const Footer = () => {

    return (
        <FooterContainer className={customFont.className}>
            <FooterContent>
                <Column1>
                    <BusinessCard>
                        <p style={{display: 'inline-block', color: 'rgb(250, 250, 250)', fontSize: '12pt', marginTop: '25px', marginBottom: '-10px'}}>Mei (<b>May</b>) Zhang</p><br/>
                        <p style={{display: 'inline-block', color: 'rgb(225, 225, 225)', fontSize: '8pt', margin: '-12.5px 0px'}}>Software Engineer - Santa Clara, CA, USA</p><br/>
                        <a style={{display: 'inline-block', color: 'rgb(82, 137, 255)', fontSize: '8pt', margin: '-12.5px 0px'}} href="mailto:meizhang.dev@gmail.com">meizhang.dev@gmail.com</a><br></br>
                    </BusinessCard>
                    <div style={{marginLeft: 'auto'}}></div>
                </Column1>
                <Column2>
                    <div style={{marginRight: 'auto'}}></div>
                    <Links>
                        <LinkText style={{color: 'rgb(250, 250, 250)', fontSize: '14pt', fontWeight: '600', marginTop: '25px'}}>Personal (In Dev.)</LinkText>
                        <LinkText>Blog</LinkText>
                        <LinkText>YouTube</LinkText>
                        <LinkText>Discord</LinkText>
                    </Links>
                    <Links>
                        <LinkText style={{color: 'rgb(250, 250, 250)', fontSize: '14pt', fontWeight: '600', marginTop: '25px'}}>Professional (In Dev.)</LinkText>
                        <LinkText>My Services</LinkText>
                        <LinkText>Contact Me</LinkText>
                        <LinkText>Schedule Call</LinkText>
                    </Links>
                </Column2>
            </FooterContent>
            <p style={{display: 'inline-block', color: 'rgb(200, 200, 200)', fontSize: '6pt', margin: '10px auto'}}>Developed using Next.js | Hosted on Google Cloud Platform: Compute Engine | Last Updated: 12/2/2024</p><br/>
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;    
    width: 100%;
    margin-top: 50px;
    padding: 50px 0px;
    background-color: rgb(25, 25, 25);
`;
const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    height: 200px;
    width: 90%;
    // background-color: cyan;
`;
const Column1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 40%;
    height: 100%;
    width: 100%;
    // background-color: red;
    z-index: 999;
`;
const Column2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 60%;
    height: 100%;
    width: 100%;
    // background-color: yellow;
    z-index: 999;
`;
const BusinessCard = styled.div`
    display: flex;
    flex-direction: column;
    color: rgb(250, 250, 250);
    height: 100%;
    width: fit-content;
    margin: 0px auto;
    // background-color: green;
`;
const Links = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: fit-content;
    margin: 0px 20px;
    // background-color: blue;
`;
const LinkText = styled.p`
    color: rgb(200, 200, 200);
    font-size: 10pt;
    margin: 2.5px 0px;
    &:hover {
        cursor: pointer;
        color: rgb(250, 250, 250);
    }
`;