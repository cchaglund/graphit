import React, { useState } from 'react';
import BarChart from '../components/BarChart';
import styled from '@emotion/styled';

    const StyledRow = styled.div`
        margin: auto;
        width: ${props => props.width}px;
        display: flex;
        flex-direction: column;
        align-items: space-between;
        padding: 1rem;
    `;  

const Bar = ({ fields, width, charCount, exportChart }) => {
    const [ title, setTitle ] = useState();
    const [ barsColor, setBarsColor ] = useState();
    const [ padding, setPadding ] = useState();
    const [ barThickness, setBarThickness ] = useState();
    const [ backgroundColor, setBackgroundColor ] = useState();
    const [ textColor, setTextColor ] = useState();

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
        setBarThickness(parseInt(value))
    }

    return(
        <>
            <BarChart
                fields={fields}
                title={title}
                padding={padding || 25}
                width={width}
                labelCharLength={charCount}
                barThickness={barThickness || 20}
                backgroundColor={backgroundColor || '000000'}
                textColor={textColor || 'FA8072'}
                barsColor={barsColor || 'FA8072'}
                exportChart={exportChart}/>
            <div>
                <StyledRow width={width}>
                    <h5>Header</h5>
                    <input type="text" placeholder="Title" key="title" value={ title }
                        onChange={ titleChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <h5>Graph background color</h5>
                    <input type="text" placeholder="Hex value" value={ backgroundColor }
                        onChange={ backgroundColorChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <h5>Text color</h5>
                    <input type="text" placeholder="Hex value" value={ textColor }
                        onChange={ textColorChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <h5>Bar colors</h5>
                    <input type="text" placeholder="Hex value" value={ barsColor }
                        onChange={ barsColorChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <h5>Padding between bars</h5>
                    <input type="number" placeholder="Pixel value" value={ padding }
                        onChange={ paddingChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <h5>Bar thickness</h5>
                    <input type="number" placeholder="Pixel value" value={ barThickness }
                        onChange={ barThicknessChangeHandler }/>
                </StyledRow>
            </div>
        </>
    );
}

export default Bar;