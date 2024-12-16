'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface TypedV2Props {
  texts: string[];
}

export const TypedV2: React.FC<TypedV2Props> = ({ texts }) => {
  const [typedText, setTypedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < texts.length) {
      typeText();
    }
  }, [currentIndex, texts]);

  const typeText = () => {
    let index = 0;
    setTypedText('');

    const typingInterval = setInterval(() => {
      if (index < texts.length) {
        setTypedText((prev) => prev + texts[index]);
        index++;
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  };

  return (
    <Container>
      <TypedText>{typedText}</TypedText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TypedText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  color: rgb(250, 250, 250);
  white-space: pre-wrap; /* Preserve spaces and line breaks */
`;
