import React, { useState } from 'react';
import styled from '@emotion/styled';

const StyledRow = styled.div`
    width: 40rem;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

const StyledInput = styled.input`
    width: 100%;
    margin: 10px;
    color: black;
    padding: 10px;
    border-radius: 5px;
    border: none;
`;

const StyledButton = styled.button`
    background-color: #8AC6D0;
    color: black;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 10px;
    border: none;
`;

const InputRow = ({ saveFields, label, value, adjustHeight }) => {
    const [ labelState, setLabelState ] = useState(label);
    const [ valueState, setValueState ] = useState(value);

    const labelChangeHandler = (e) => {
        setLabelState(e.target.value)
    }

    const valueChangeHandler = (e) => {
        setValueState(e.target.value)
    }

    const handleClick = () => {
        saveFields( labelState, valueState )
        adjustHeight()
    }

    return(
        <StyledRow>
            <StyledInput type="text" placeholder="Label" value={ labelState }
                onChange={ labelChangeHandler }/>
            <StyledInput type="text" placeholder="Value" value={ valueState }
                onChange={ valueChangeHandler }/>
            <StyledButton
                onClick={ () => handleClick() }>Add</StyledButton>
        </StyledRow>
    );
}

export default InputRow;