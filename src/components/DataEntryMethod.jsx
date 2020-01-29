import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import * as d3 from "d3";
// import { Link } from "react-router-dom";
import Rectangle from './Rectangle'

var winWidth = window.innerWidth;
// var winHeight = window.innerHeight;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 0.5rem;
`;

const Content = styled.div`
    overflow: hidden;
    height: ${ props => props.show ? '400px' : '0px' };
    width: 100vw;
    display: block;
    background-color: #575757;
    transition: height 0.3s;
`;

const DataEntryMethod = ({ name, children }) => {
    const [ expandedState, setExpandedState ] = useState(false);

    return(
        <div>
            <StyledDiv onClick={ () => setExpandedState(!expandedState) }>
                {name}
            </StyledDiv>
            <Content show={ expandedState }>
                {children}
            </Content>
            {/* <Rectangle
                show={ expandedState }
                width={ winWidth }
                height={ expandedState ? 200 : 0 } /> */}
        </div>
    )
}

export default DataEntryMethod;