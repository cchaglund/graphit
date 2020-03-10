import React from 'react'
import DataEntryMethod from '../components/DataEntryMethod';
import Import from '../components/Import/Import';
import Paste from '../components/Paste/Paste';
import Manual from '../components/Manual/Manual';
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
                name="Upload file (JSON or CSV)"
                height={100}>
                    <Import />
            </DataEntryMethod>
            <DataEntryMethod
                key="paste"
                name="Paste in raw data"
                height={300}>
                    <Paste />
            </DataEntryMethod>
            <DataEntryMethod 
                key="manual"
                name="Enter data manually"
                height={200}>
                    <Manual />
            </DataEntryMethod>
        </StyledMain>
    )
}

export default Home;