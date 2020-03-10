import React, { useState } from 'react';
import PieChart from '../components/PieChart';
import styled from '@emotion/styled';

const StyledRow = styled.div`
    margin: auto;
    width: ${props => props.width}px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    padding: 1rem;
`;  

const Pie = ({ fields, width, charCount }) => {
    const [ title, setTitle ] = useState();
    const [ slicesColor, setSliceColor ] = useState();
    const [ padding, setPadding ] = useState();
    const [ sectionRoundness, setSectionRoundness ] = useState();
    const [ backgroundColor, setBackgroundColor ] = useState();
    const [ textColor, setTextColor ] = useState();
    const [ innerRadius, setInnerRadius ] = useState();
    const [ outerRadius, setOuterRadius ] = useState();

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

    const sliceColorChangeHandler = (e) => {
        const color = e.target.value;
        setSliceColor(color)
    }

    const paddingChangeHandler = (e) => {
        const padd = e.target.value;
        setPadding(padd)
    }

    const titleChangeHandler = (e) => {
        const title = e.target.value;
        setTitle(title)
    }

    const sectionRoundnessChangeHandler = (e) => {
        const value = e.target.value;
        setSectionRoundness(parseInt(value))
    }

    const outerRadiusChangeHandler = (e) => {
        const value = e.target.value;
        setOuterRadius(parseInt(value))
    }

    const innerRadiusChangeHandler = (e) => {
        const value = e.target.value;
        setInnerRadius(parseInt(value))
    }

    return(
        <>
            <PieChart                 
                fields={fields}
                title={title}
                padding={padding || 0}
                innerRadius={innerRadius || 50}
                outerRadius={outerRadius || 100}
                width={width}
                labelCharLength={charCount}
                sectionRoundness={sectionRoundness || 5}
                backgroundColor={backgroundColor || '000000'}
                textColor={textColor || 'FA8072'}
                slicesColor={slicesColor || 'FA8072'}/>
            <div>
                <StyledRow width={width}>
                    <h5>Header</h5>
                    <input type="text" placeholder="Title" value={ title }
                        onChange={ titleChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <h5>Chart background color</h5>
                    <input type="text" placeholder="Hex value" value={ backgroundColor }
                        onChange={ backgroundColorChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <h5>Text color</h5>
                    <input type="text" placeholder="Hex value" value={ textColor }
                        onChange={ textColorChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <h5>Slice colors</h5>
                    <input type="text" placeholder="Hex value" value={ slicesColor }
                        onChange={ sliceColorChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <h5>Padding between slices</h5>
                    <input type="number" placeholder="Pixel value" value={ padding }
                        onChange={ paddingChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <h5>Section roundness</h5>
                    <input type="number" placeholder="Pixel value" value={ sectionRoundness }
                        onChange={ sectionRoundnessChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <h5>Circle outer radius size</h5>
                    <input type="number" placeholder="Pixel value" value={ outerRadius }
                        onChange={ outerRadiusChangeHandler }/>
                </StyledRow>
                <StyledRow width={width}>
                    <h5>Inner circle radius</h5>
                    <input type="number" placeholder="Pixel value" value={ innerRadius }
                        onChange={ innerRadiusChangeHandler }/>
                </StyledRow>
            </div>
        </>
    );
}

export default Pie;