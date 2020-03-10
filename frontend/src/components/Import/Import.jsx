import React from 'react';
import { withRouter } from "react-router-dom";

const Import = ({ history}) => {
    
    const clickHandler = () => {
        console.log('hej')
        history.push('/graph')
    }

    return(
        <button
            onClick={ () => clickHandler() }>
            Import
        </button>
    );
}

export default withRouter(Import);