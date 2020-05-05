import React, { useState } from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 0.5rem;
    margin-top: 3rem;
`;

const Content = styled.div`
    overflow: hidden;
    height: ${ props => props.show ? props.height + 'px' : '0px' };
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #554971;
    transition: height 0.3s;
`;

const DataEntryMethod = ({ name, children, height }) => {
    const [ expandedState, setExpandedState ] = useState(false);

    return(
        <div>
            <StyledDiv onClick={ () => setExpandedState(!expandedState) }>
                { name }
            </StyledDiv>
            <Content show={ expandedState } height={ height }>
                { children }
            </Content>
        </div>
    )
}

export default DataEntryMethod;