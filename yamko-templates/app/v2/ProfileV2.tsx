import React, { useEffect, useState } from 'react';
import may from '@/images/the_may.png';
import styled from 'styled-components';

export const ProfileV2 = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            const normalizedX = (clientX / innerWidth) * 2 - 1;
            const normalizedY = (clientY / innerHeight) * 2 - 1;

            const maxRotateX = 15;
            const maxRotateY = 15;

            setRotation({
                x: normalizedY * maxRotateX,
                y: normalizedX * maxRotateY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <ProfilePicture rotateX={rotation.x} rotateY={rotation.y} />;
};

const ProfilePicture = styled.div<{ rotateX: number; rotateY: number }>`
    scale: 0.65;
    height: 550px;
    width: 400px;
    margin-top: 00px;
    margin-left: 575px;
    background-image: url(${may.src});
    background-repeat: no-repeat;
    object-fit: contain;
    transform: perspective(1000px) rotateX(${({ rotateX }) => rotateX * -1}deg) rotateY(${({ rotateY }) => rotateY}deg);
    transition: transform 0.1s ease-out;
    z-index: 999;
`;
