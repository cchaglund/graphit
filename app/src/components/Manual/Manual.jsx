import React, { useState } from 'react';
import InputRow from './InputRow';
import { withRouter } from "react-router-dom";
import styled from '@emotion/styled';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const SubmitButton = styled.button`
    align-self: flex-end;
    background-color: #8AC6D0;
    color: black;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
`;

const Manual = ({ history, adjustHeight }) => {
    const [ fields, setFields ] = useState({});

    const submitHandler = () => {
        history.push('/graph', fields)
    }

    const saveFields = (label, value) => {
        setFields( prevState => {
            return { ...prevState, [label]: value }
        })
    }

    return(
        <StyledDiv>
            <InputRow
                key={ 'first' }
                label={ '' }
                value={ '' }
                saveFields={ (label, value) => saveFields(label, value) }
                adjustHeight={adjustHeight} />
            { Object.keys(fields).map( field => {
                return (
                <InputRow
                    key={ field }
                    label={ field }
                    value={ fields[field].value }
                    saveFields={ (label, value) => saveFields(label, value) }
                    adjustHeight={adjustHeight} />
                )
            })}
            <SubmitButton
                onClick={ () => submitHandler() }>
                Submit
            </SubmitButton>
        </StyledDiv>
    );
}

export default withRouter(Manual);