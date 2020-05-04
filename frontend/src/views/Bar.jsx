import React, { useState } from 'react';
import BarChart from '../components/BarChart';
import styled from '@emotion/styled';

const StyledRow = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    padding: 2rem;
    width: 25%;
`; 

const StyledInput = styled.input`
    width: 100%;
    max-width: 250px;
    color: black;
    padding: 10px;
    border-radius: 5px;
    border: none;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Bar = ({ fields, width, charCount }) => {
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
                backgroundColor={backgroundColor || 'fff'}
                textColor={textColor || '000'}
                barsColor={barsColor || '000'} />
            <StyledDiv>
                <StyledRow width={width}>
                    <p>Header</p>
                    <StyledInput type="text" placeholder="Title" key="title" value={ title }
                        onChange={ titleChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <p>Background color</p>
                    <StyledInput type="text" placeholder="Hex value" key="background" value={ backgroundColor }
                        onChange={ backgroundColorChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <p>Text color</p>
                    <StyledInput type="text" placeholder="Hex value" key="textColor" value={ textColor }
                        onChange={ textColorChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <p>Bar colors</p>
                    <StyledInput type="text" placeholder="Hex value" key="barsColor" value={ barsColor }
                        onChange={ barsColorChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <p>Padding between bars</p>
                    <StyledInput type="number" placeholder="Pixel value" key="padding" value={ padding }
                        onChange={ paddingChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <p>Bar thickness</p>
                    <StyledInput type="number" placeholder="Pixel value" key="thickness" value={ barThickness }
                        onChange={ barThicknessChangeHandler }/>
                </StyledRow>
            </StyledDiv>
        </>
    );
}

export default Bar;