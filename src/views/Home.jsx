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
                name="Upload file (JSON or CSV)">
                    Content
            </DataEntryMethod>
            <DataEntryMethod
                key="paste"
                name="Paste in raw data">
                    Content!!
            </DataEntryMethod>
            <DataEntryMethod 
                key="manual"
                name="Enter data manually">
                    Content!!!
                    <h1>some text</h1>
                    <p>MORE TEXT</p>
                    <h1>YEHAW</h1>
                    <h1>YEHAW</h1>
                    <h1>YEHAW</h1>
            </DataEntryMethod>
        </StyledMain>
    )
}

export default Home;