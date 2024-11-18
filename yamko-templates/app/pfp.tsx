import mei from '@/images/mei.png'

import styled from 'styled-components';

export const PFP = () => {
    return (
        <ProfilePicture/>
    );
};

const ProfilePicture = styled.div`
    width: 4vw;
    height: 4vw;
    background-image: url(${mei.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: yellow;
    border: .25vw solid rgb(250, 250, 250);
    border-radius: 999999px;
    box-shadow: .25vw .25vw 2.5px rgba(0, 0, 0, 0.25);

    margin-top: -1vw;
    margin-left: -2.5vw;
    transform: rotate(30deg);
    z-index: 2;
    overflow: hidden;
`;
