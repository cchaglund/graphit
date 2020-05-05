import React from 'react';
import { withRouter } from "react-router-dom";
import styled from '@emotion/styled';

const StyledButton = styled.div`
    background-color: #8AC6D0;
    color: black;
    padding: 10px 20px;
    border-radius: 5px;
`;

const Import = ({ history}) => {
    const readFile = (e) => {
        const file = e.target.files[0]

        const reader = new FileReader();
        reader.onload = function fileReadCompleted() {
            const parsedData = JSON.parse(reader.result)
            history.push('/graph', parsedData)
        };
        reader.readAsText(file);
    }

    return(
        <StyledButton>
            <input name="file" type="file" onChange={event => readFile(event)}/>
        </StyledButton>
    );
}

export default withRouter(Import);