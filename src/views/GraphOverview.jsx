import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import Rectangle from '../components/Rectangle';
import Graph from '../components/Graph';
import styled from '@emotion/styled';

const winWidth = window.innerWidth;
const width = winWidth * 0.75;
// var winHeight = window.innerHeight;

const StyledRow = styled.div`
    margin: auto;
    width: ${ width}px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    padding: 1rem;
`;

const GraphOverview = ({ location }) => {
    // const [ expandedState, setExpandedState ] = useState(false);
    const [ title, setTitle ] = useState();
    const [ barsColor, setBarsColor ] = useState();
    const [ padding, setPadding ] = useState();
    const [ barThickness, setBarThickness ] = useState();
    const [ backgroundColor, setBackgroundColor ] = useState();
    const [ textColor, setTextColor ] = useState();

    const fields = location.state

    const backgroundColorChangeHandler = (e) => {
        const color = e.target.value;
        setBackgroundColor(color)
    }
    // if (color.length === 6) {
    //         console.log('setting', color)
    //         setTextColor(e.target.value)
    //     }

    const textColorChangeHandler = (e) => {
        const color = e.target.value;
        setTextColor(color)
    }

    const barsColorChangeHandler = (e) => {
        const color = e.target.value;
        setBarsColor(color)
    }

    const paddingChangeHandler = (e) => {
        const padd = e.target.value;
        setPadding(padd)
    }

    const titleChangeHandler = (e) => {
        const title = e.target.value;
        setTitle(title)
    }

    const barThicknessChangeHandler = (e) => {
        const value = e.target.value;
        setBarThickness(value)
    }

    return (
        <StyledRow>
            <h3>Graph Overview</h3>
            <Graph 
                fields={fields}
                title={title}
                padding={padding || 25}
                width={width}
                barThickness={barThickness || 20}
                backgroundColor={backgroundColor || '000000'}
                textColor={textColor || 'FA8072'}
                barsColor={barsColor || 'FA8072'}/>
            {/* <Rectangle
                show={ true }
                width={ winWidth }
                height={ true ? 200 : 0 } /> */}
            <div>
                <StyledRow>
                    <h5>Header</h5>
                    <input type="text" placeholder="Title" value={ title }
                        onChange={ titleChangeHandler }/>
                </StyledRow>
                <StyledRow>
                    <h5>Graph background color</h5>
                    <input type="text" placeholder="Hex value" value={ backgroundColor }
                        onChange={ backgroundColorChangeHandler }/>
                </StyledRow>
                <StyledRow>
                    <h5>Text color</h5>
                    <input type="text" placeholder="Hex value" value={ textColor }
                        onChange={ textColorChangeHandler }/>
                </StyledRow>
                <StyledRow>
                    <h5>Bar colors</h5>
                    <input type="text" placeholder="Hex value" value={ barsColor }
                        onChange={ barsColorChangeHandler }/>
                </StyledRow>
                <StyledRow>
                    <h5>Padding between bars</h5>
                    <input type="text" placeholder="Pixel value" value={ padding }
                        onChange={ paddingChangeHandler }/>
                </StyledRow>
                <StyledRow>
                    <h5>Bar thickness</h5>
                    <input type="text" placeholder="Pixel value" value={ barThickness }
                        onChange={ barThicknessChangeHandler }/>
                </StyledRow>
            </div>
        </StyledRow>
    )
}

export default withRouter(GraphOverview);