import React from 'react'
import DataEntryMethod from '../components/DataEntryMethod';
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
            <DataEntryMethod
                key="import"
                name="Import"/>
            <DataEntryMethod
                key="paste"
                name="Paste"/>
            <DataEntryMethod 
                key="manual"
                name="Manual"/>
        </StyledMain>
    )
}

export default Home;