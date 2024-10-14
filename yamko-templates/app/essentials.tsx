'use client';

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colorThemes } from './themes';

const themes = colorThemes();

export const H2 = styled.p`
    color: ${(props) => props.theme.dark1TXT};
    font-size: 15pt;
    margin-left: 0px;
    margin-bottom: 10px;
`;

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
    display: flex;
    flex-direction: row;
    grid-gap: 20px;
    min-height: 250px;
    min-width: 250px;
    max-height: 500px;
    height: fit-content;
    width: 1920px;
    margin: 0px auto;
    padding: 20px;
    // background-color: ${(props) => props.theme.bentoBG};
    border-radius: 20px;
    overflow: hidden;
    z-index: 999;
    overflow: hidden;
`;

interface BentoDishProps {
    VerticalScale: number;
    HorizontalScale: number;
    children?: React.ReactNode;
}

export const BentoDish: React.FC<BentoDishProps> = ({ VerticalScale, HorizontalScale, children }) => {
    return (
        <BentoDishContainer style={{height: `${250*VerticalScale}px`, width: `${250*HorizontalScale}px`}}>
            {children}
        </BentoDishContainer>
    );
};

const BentoDishContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 250px;
    min-width: 250px;
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
    width: 210px; // (container_size - vertical_padding) = 250 - (2 * 20) = 210
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

interface CheckBoxProps {
    InputType: 'checkbox',
}

export const CheckBox: React.FC<CheckBoxProps> = ({ InputType }) => {

    return (
        <CheckBoxActual type={InputType}></CheckBoxActual>
    );
};

const CheckBoxActual = styled.input`
    height: 12px;
    width: 12px;
    margin-top: 4px;
    background-color: rgba(250, 250, 250, 1);
    border-radius: 2px;
    &::before {
        accent-color: rgb(250, 250, 250);
    }
    &::after {
        accent-color: ${(props) => props.theme.trim};
    }
`;

export const CustomTable = () => {

    const [prForm, setPrForm] = useState({
        title: '',
        body: '',
        head: '',
        base: ''
      });

      const tableList = [
        {repo: 'yamko_1', status: 'completed', version: '0.1.0'},
        {repo: 'yamko_2', status: 'failed', version: '1.1.0'},
        {repo: 'yamko_3', status: 'in progress', version: '2.1.0'},
        {repo: 'yamko_4', status: 'completed', version: '3.1.0'},
        {repo: 'yamko_5', status: 'completed', version: '4.1.0'},
        {repo: 'yamko_6', status: 'completed', version: '5.1.0'},
        {repo: 'yamko_7', status: 'failed', version: '6.1.0'},
        {repo: 'yamko_8', status: 'in progress', version: '7.1.0'},
        {repo: 'yamko_9', status: 'completed', version: '8.1.0'},
        {repo: 'yamko_10', status: 'completed', version: '9.1.0'},
    ];

    const submitPullRequest = async () => {
        console.log(`REACHED FUNCTION: submitPullRequest().`);
        const response = await fetch('http://localhost:3001/pull-request', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: prForm }),
        });
        const result = await response.json();
    };

    const updateTextBoxes = (event: any) => {
        const { name, value } = event.target;
        setPrForm((prevValues) => ({
          ...prevValues,
          [name]: value
        }));
    };

    return (
        <Table>
            <THead>
                <TR style={{cursor: 'auto', backgroundColor: themes.dark.tableTitle}}>
                    <TableSpacing/>
                    <TH>Repository</TH>
                    <TH>Status</TH>
                    <TH>Version</TH>
                </TR>
            </THead>
            <TBody>
                {tableList.map((tableList, index) => (
                    <TR key={index}>
                        <TableSpacing/>
                        <TD>{tableList.repo}</TD>
                        <TD>{tableList.status}</TD>
                        <TD>{tableList.version}</TD>
                    </TR>
                ))}
            </TBody>
        </Table>
    );
};

const Table = styled.table`
    display: block;
    border-collapse: collapse;
    table-layout: fixed;
    height: 200px;
    width: fit-content;
    margin: 20px auto;
    border-radius: 5px;
    background-color: rgba(25, 25, 25, .5);
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const THead = styled.thead`
    position: sticky;
    top: 0;
    height: 25px;
    margin: 0px 50px;
    background-color: ${(props) => props.theme.tableTitle};
`;

const TBody = styled.tbody`
    margin: 0px 50px;
    background-color: ${(props) => props.theme.tableRow};
`;

const TR = styled.tr`
    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.trim};
    }
`;

const TH = styled.th`
    color: rgb(225, 225, 225);
    font-size: 10pt;
    text-align: left;
    width: 150px;
`;

const TD = styled.td`
    color: rgb(200, 200, 200);
    font-size: 10pt;
    text-align: left;
    width: 150px;
`;

const TableSpacing = styled.div`
    width: 10px;
`;

// CHART ___________________________________________________________________________________

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const generateRandomStockPrices = (numPoints: number) => {
  return Array.from({ length: numPoints }, () => Math.floor(Math.random() * 100) + 50);
};

export const Chart: React.FC = () => {
  const months = Array.from({ length: 20 }, (_, i) => `Month ${i + 1}`);
  const stockPrices = generateRandomStockPrices(20);

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Stock Price (USD)',
        data: stockPrices,
        fill: false,
        borderColor: themes.dark.secondaryTrim,
        tension: 0.1,
        pointBackgroundColor: themes.dark.trim,
        pointBorderColor: themes.dark.trim,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
          display: true,
          labels: {
            color: themes.dark.dark1TXT,
            font: {
              size: 12,
            },
            boxWidth: 25,
            boxHeight: 1,
          },
          position: 'top',
        },
        tooltip: {
          titleFont: {
            size: 14,
          },
          bodyFont: {
            size: 12,
          },
          callbacks: {
            label: function (context: any) {
              return `Price: $${context.raw}`;
            },
          },
        },
      },
    scales: {
      x: {
        title: {
            color: themes.dark.dark1TXT,
            display: true,
            text: 'Date',
        },
        ticks: {
            color: themes.dark.dark2TXT,
            font: {
                size: 10,
            },
        },
        grid: {
            color: 'rgba(250, 250, 250, .25)',
        },
      },
      y: {
        title: {
            color: themes.dark.dark1TXT,
            display: true,
            text: 'Stock Price (USD)',
        },
        ticks: {
            color: themes.dark.dark2TXT,
            font: {
                size: 10,
            },
        },
        grid: {
            color: 'rgba(250, 250, 250, .25)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '460px', height: '210px' }}>
      <Line data={data} options={options} />
    </div>
  );
};