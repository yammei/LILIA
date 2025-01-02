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
                        <p style={{display: 'inline-block', color: 'rgb(250, 250, 250)', fontSize: '12pt', marginTop: '25px', marginBottom: '-10px'}}><b>May Zhang</b></p><br/>
                        <p style={{display: 'inline-block', color: 'rgb(225, 225, 225)', fontSize: '8pt', margin: '-12.5px 0px'}}>Software Developer - San Francisco, CA</p><br/>
                        <a style={{display: 'inline-block', color: 'rgb(82, 137, 255)', fontSize: '8pt', margin: '-12.5px 0px'}} href="mailto:meizhang.dev@gmail.com">meizhang.dev@gmail.com</a><br></br>
                    </BusinessCard>
                    <div style={{marginLeft: 'auto'}}></div>
                </Column1>
                <Column2>
                    <div style={{marginRight: 'auto'}}></div>
                    <Links>
                        <LinkText style={{color: 'rgb(250, 250, 250)', fontSize: '14pt', fontWeight: '600', marginTop: '25px'}}>Socials</LinkText>
                        <LinkText>Blog (In Dev.)</LinkText>
                        <LinkText>YouTube (In Dev.)</LinkText>
                        <LinkText>Discord (In Dev.)</LinkText>
                    </Links>
                    <Links>
                        <LinkText style={{color: 'rgb(250, 250, 250)', fontSize: '14pt', fontWeight: '600', marginTop: '25px'}}>Professional</LinkText>
                        <LinkText><a href='https://linkedin.com/in/mei-zh' target='_blank'>LinkedIn</a></LinkText>
                        <LinkText><a href='https://github.com/yammei' target='_blank'>Github</a></LinkText>
                    </Links>
                </Column2>
            </FooterContent>
            <p style={{display: 'inline-block', color: 'rgb(200, 200, 200)', fontSize: '6pt', margin: '10px auto'}}>Frontend: Next.js (TypeScript), Figma, Three.js | Backend: Node.js, GCP (Compute Engine) | Last Updated: 01/02/2024</p><br/>
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;    
    width: 100%;
    margin-top: 00px;
    padding: 50px 0px;
    background-color: rgb(25, 25, 25);
    z-index: 999;
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