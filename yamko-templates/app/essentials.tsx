'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from './themes';

const themes = colorThemes();

export const Text = styled.p`
    color: ${(props) => props.theme.text};
`;

export const Link = styled.a`
    cursor: pointer;
    color: ${(props) => props.theme.text};
    &:hover {
        filter: brightness(.75);
    }
`;

export const BentoBox = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
      <BentoBoxContainer>
        
      </BentoBoxContainer>
    </ThemeProvider>
  );


};

export const BentoBoxContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
    grid-gap: 20px;
    min-height: 250px;
    min-width: 250px;
    height: fit-content;
    width: 1920px;
    margin: 0px auto;
    padding: 20px;
    // background-color: ${(props) => props.theme.bentoBG};
    border-radius: 20px;
    overflow: hidden;
`;

interface BentoDishProps {
    VerticalScale: number;
    children?: React.ReactNode;
}

export const BentoDish: React.FC<BentoDishProps> = ({ VerticalScale, children }) => {
    return (
        <BentoDishContainer style={{height: `${250*VerticalScale}px`}}>
            {children}
        </BentoDishContainer>
    );
};

const BentoDishContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 250px;
    min-width: 250px;
    width: 250px;
    padding: 20px;
    background-color: ${(props) => props.theme.bentoBG};
    // background-color: red;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 25px;
    min-width: 50px;
    height: 35px;
    width: fit-content;
    margin: 20px auto;
    padding: 0px 20px;
    background-color: ${(props) => props.theme.trim};
    box-shadow: 2px 4px 0px rgba(0, 0, 0, 0.5);
    border-radius: 999px;
    &:hover {
        filter: brightness(.8);
    }
    &:active {
        margin-top: 21px;
        filter: brightness(.6);
        box-shadow: 2px 3px 0px rgba(0, 0, 0, 0.5);
    }
`;

export const ButtonText = styled.p`
    color: ${(props) => props.theme.text};
    font-size: 12pt;
    font-weight: 600;
`;

interface InputProps {
    PlaceHolder: string;
    Type: string;
}
export const Input: React.FC<InputProps> = ({ PlaceHolder, Type }) => {

    return (
        <div style={{position: 'relative', marginTop: '30px', marginBottom: '10px'}}>
            <InputText>{PlaceHolder}</InputText>
            <InputContainer placeholder={''} type={Type}/>
        </div>
    );

};

const InputContainer = styled.input`
    color: ${(props) => props.theme.text};
    text-align: center;
    min-height: 25px;
    min-width: 50px;
    height: 40px;
    width: 200px;
    background-color: ${(props) => props.theme.input};
    border-bottom: 2px solid ${(props) => props.theme.trim};
    border-radius: 3px;
    box-shadow: inset 1.5px 3px 0px rgba(0, 0, 0, 0.5);
    &::placeholder {
        position: absolute;
        color: ${(props) => props.theme.text};
        font-size: 10pt;
        text-align: left;
        margin-top: -5px;
        margin-left: 10px;
        opacity: .5;
    }
    &:focus {
        outline: none;
        background-color: ${(props) => props.theme.input};
    }
`;
const InputText = styled.p`
    position: absolute;
    color: ${(props) => props.theme.text};
    font-size: 10pt;
    text-align: left;
    top: -20px;
    opacity: .5;
`;

export const CheckBox = styled.input`
    height: 10px;
    width: auto;
    margin-top: 4px;
    margin-right: 7.5px;
`;