import React from 'react'
import styled from '@emotion/styled';

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Home = () => {
    return (
        <StyledMain>
            <div>Import</div>
            <div>Paste</div>
            <div>Manual</div>
        </StyledMain>
    )
}

export default Home;