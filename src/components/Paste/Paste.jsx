import React, { useState } from 'react';
import styled from '@emotion/styled';
import { withRouter } from "react-router-dom";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledButton = styled.button`
    align-self: flex-end;
    background-color: #8AC6D0;
    color: black;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 10px;
    border: none;
`;

const StyledTextarea = styled.textarea`
    color: black;
    padding: 10px;
    border-radius: 5px;
    border: none;
`;

const Paste = ({ history }) => {
    const [ pastedData, setPastedData ] = useState();

    const clickHandler = () => {
        const parsedData = JSON.parse(pastedData)
        history.push('/graph', parsedData)
    }

    const changeHandler = (e) => {
        setPastedData(e.target.value)
    }

    return(
        <StyledDiv>
            <StyledTextarea cols="100" placeholder="Paste your JSON here" rows="14" onChange={ changeHandler }>
                {pastedData}
            </StyledTextarea>
            <StyledButton
                onClick={ () => clickHandler() }>
                    Submit
            </StyledButton>
        </StyledDiv>
    );
}

export default withRouter(Paste);