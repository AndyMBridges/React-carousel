import React from 'react';
import styled from 'styled-components';
import LoadingIcon from '../images/loading.svg';

const LoadingImage = styled.img`
    margin: 0 auto;
`;

export const Loading = () => {

    return <LoadingImage src={LoadingIcon} alt='Loading' />;

};
