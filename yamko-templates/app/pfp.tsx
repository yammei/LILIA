import mei from '@/images/mei.png'

import styled from 'styled-components';

export const PFP = () => {
    return (
        <ProfilePicture/>
    );
};

const ProfilePicture = styled.div`
    width: 75px;
    height: 75px;
    background-image: url(${mei.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: yellow;
    border: 5px solid rgb(250, 250, 250);
    border-radius: 999px;
    box-shadow: 7.5px 10px 5px rgba(0, 0, 0, 0.25);

    margin-top: -40px;
    margin-left: -50px;
    transform: rotate(30deg);
    z-index: 2;
    overflow: hidden;
`;
