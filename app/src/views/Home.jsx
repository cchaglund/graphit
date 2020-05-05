import React, {useState} from 'react'
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
    padding-bottom: 5rem;
`;

const Home = () => {
    const [ manualHeight, setManualHeight] = useState(200)

    const adjustHeight = () => {
        const increment = 81
        setManualHeight(manualHeight + increment)
    }

    return (
        <StyledMain>
            <DataEntryMethod
                key="import"
                name="Upload JSON"
                height={100}>
                    <Import />
            </DataEntryMethod>
            <DataEntryMethod
                key="paste"
                name="Paste in JSON data"
                height={330}>
                    <Paste />
            </DataEntryMethod>
            <DataEntryMethod 
                key="manual"
                name="Enter data manually"
                height={manualHeight}>
                    <Manual adjustHeight={adjustHeight}/>
            </DataEntryMethod>
        </StyledMain>
    )
}

export default Home;