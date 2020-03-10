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
`;

const Manual = ({ history }) => {
    const [ fields, setFields ] = useState(
        { 

        }
    );

    const submitHandler = () => {
        history.push('/graph', fields)
    }

    const saveFields = (label, value) => {
        console.log(fields)
        setFields( prevState => {
            return { ...prevState, [label]: value }
        })
    }

    return(
        <StyledDiv>
            <InputRow
                key={ 'asdf' }
                label={ '' }
                value={ '' }
                saveFields={ (label, value) => saveFields(label, value) }/>
            { Object.keys(fields).map( field => {
                return (
                <InputRow
                    key={ field }
                    label={ field }
                    value={ fields[field].value }
                    saveFields={ (label, value) => saveFields(label, value) }/>
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