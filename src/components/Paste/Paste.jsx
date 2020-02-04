import React from 'react';
import styled from '@emotion/styled';
import { withRouter } from "react-router-dom";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledButton = styled.button`
    align-self: flex-end;
`;

const Paste = ({ history }) => {
    const clickHandler = () => {
        console.log('hej')
        history.push('/graph')
    }

    return(
        <StyledDiv>
            <textarea cols="100" rows="20" value="jasonbason">
                Paste your json or csv here
            </textarea>
            <StyledButton
                onClick={ () => clickHandler() }>
                    Submit
            </StyledButton>
        </StyledDiv>
    );
}

export default withRouter(Paste);