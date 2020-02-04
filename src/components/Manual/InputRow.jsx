import React, { useState } from 'react';
import styled from '@emotion/styled';

const StyledRow = styled.div`
    width: 27rem;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

const InputRow = ({ saveFields, label, value }) => {
    const [ labelState, setLabelState ] = useState(label);
    const [ valueState, setValueState ] = useState(value);

    const labelChangeHandler = (e) => {
        console.log(e.target.value)
        setLabelState(e.target.value)
    }

    const valueChangeHandler = (e) => {
        console.log(e.target.value)
        setValueState(e.target.value)
    }

    return(
        <StyledRow>
            <input type="text" placeholder="Label" value={ labelState }
                onChange={ labelChangeHandler }/>
            <input type="text" placeholder="Value" value={ valueState }
                onChange={ valueChangeHandler }/>
            <button
                onClick={ () => saveFields( labelState, valueState ) }>Add this data</button>
        </StyledRow>
    );
}

export default InputRow;