'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from '@/app/themes';
import {
  BentoDish,
  BentoBoxContainer,
  Button,
  ButtonText,
  Input,
  Text,
  Link,
  CheckBox,
  CustomTable,
  H2,
  Chart
} from '@/app/essentials';
import BrainTumorClassifier from '@/app/cnn_showcase';
import { Inter } from '@next/font/google';

const customFont = Inter({
  weight: '400',
  subsets: ['latin'],
});

const themes = colorThemes();

export const DataManager = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
      <DataManagerContainer className={customFont.className}>

        <BentoBoxContainer>
          <BentoDish VerticalScale={2} HorizontalScale={2}>
            <H2>Brain Tumor MRI Classification</H2>
            <p style={{color: 'rgb(225, 225, 225)', fontSize: '8pt'}}>
            An image classification model for identifying types of brain tumors.<br/>
            Select an MRI scan below to classify.
            </p>
            <BrainTumorClassifier/>
            <p style={{color: 'rgb(225, 225, 225)', fontSize: '6pt'}}>
              Model Info:<br/>
              Convolutional neural network using PyTorch
              <sup>[<a href='https://docs.pytorch.org/docs/stable/nn.functional.html#convolution-functions' target='_blank' style={{color: 'lightblue'}}>ref</a>]</sup>.
              <br/>
              Data available at Kaggle by Masoud Nickparvar
              <sup>[<a href='https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset' target='_blank' style={{color: 'lightblue'}}>ref</a>]</sup>.
              <br/>
              Labels: Glioma, Meningioma, Pituitary, No Tumor<br/>
              Batch Size: 32 | Learning Rate: 0.001 | Epochs: 10<br/>
              Accuracy: 95.73%
            </p>
            </BentoDish>
        </BentoBoxContainer>

        <BentoBoxContainer>
          <BentoDish VerticalScale={1.75} HorizontalScale={2}>
            <H2>Investment Inferencing</H2>
            <p style={{color: 'rgb(225, 225, 225)', fontSize: '8pt'}}>
            [Discontinued Support] An auto-regressive model for short-term predictions. <br/>
            Currently Observing: Palo Alto Networks (PANW).
            </p>
            <Chart/>
            <p style={{color: 'rgb(225, 225, 225)', fontSize: '6pt'}}>
              Model Info:<br/>
              Simple ARIMAX using statsmodels library
              <sup>[<a href='https://www.statsmodels.org/dev/examples/notebooks/generated/statespace_sarimax_faq.html' target='_blank' style={{color: 'lightblue'}}>ref</a>]</sup>.
              Data retrieved using yfinance
              <sup>[<a href='https://pypi.org/project/yfinance/' target='_blank' style={{color: 'lightblue'}}>ref</a>]</sup>.
              <br/>
              Comovement Analysis Timeframe: 120mo. | Training Data Timeframe: 2mo. <br/>
              Exogenous Variables: High, Low, EMA-26, Trade Volume | Exog. Left-Shift: 1 day<br/>
              Endogenous Variable: PANW Closing Price.<br/>
              ACF (p): 1 | ADF (d): 1 | PACF (q): 1<br/>
              MAE: 2.6135 | RMSE: 3.1307
            </p>
          </BentoDish>
        </BentoBoxContainer>

        <BentoBoxContainer>
          {/* <BentoDish VerticalScale={1.5} HorizontalScale={1}>
            <H2>Login Form</H2>
            <Input PlaceHolder='Username' Type='text'></Input>
            <Input PlaceHolder='Password' Type='password'></Input>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
              <CheckBox InputType='checkbox'/>
              <Text style={{fontSize: '10pt', marginLeft: '7.5px', marginRight: 'auto'}}>Remember Me</Text>
            </div>
            <Link style={{fontSize: '10pt', marginBottom: '0px'}}>Forgot Username/Password?</Link>
            <Button><ButtonText>Login</ButtonText></Button>
          </BentoDish> */}

          <BentoDish VerticalScale={1.5} HorizontalScale={2}>
            <H2>Latest Repository Commits</H2>
            <p style={{color: 'rgb(225, 225, 225)', fontSize: '8pt'}}>
              Tracks repository commits for implemented features.<br/>
              Currently Tracking: LILIA, ARIA, WHIRL_2, brain_tumor<br/>
              _classification.
            </p>
            <CustomTable/>
            <p style={{color: 'rgb(225, 225, 225)', fontSize: '6pt'}}>
              Feature Info:<br/>
              Requests data using GitHub API
              If data does not load, I've hit my rate limit.
              <sup>[<a href='https://docs.github.com/en/rest?apiVersion=2022-11-28' target='_blank' style={{color: 'lightblue'}}>ref</a>]</sup>.
            </p>
          </BentoDish>
        </BentoBoxContainer>



      </DataManagerContainer>
    </ThemeProvider>
  );

};

const DataManagerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: fit-content;
  margin: 0px auto;
  // background-color: ${(props) => props.theme.background};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  overflow: scroll;
  z-index: 999;
`;

const Title = styled.p`
  font-size: 25pt;
`;

const ProjectContainer = styled.div`
  height: 500px;
  width: 500px;
  background-color: rgb(250, 250, 250);
  border-radius: 25px;
`;