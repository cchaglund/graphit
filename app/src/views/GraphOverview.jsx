import React, { useState, useRef } from 'react'
import { withRouter } from "react-router-dom";
import Bar from './Bar';
import styled from '@emotion/styled';

const winWidth = window.innerWidth;
const width = winWidth * 0.75;

const StyledHeader = styled.p`
    font-size: 25px;
    margin-bottom: 4rem;
`;

const StyledRow = styled.div`
    margin: auto;
    width: ${ width}px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    padding: 1rem;
`;

const StyledParagraph = styled.p`
    padding-bottom: 1rem;
`;

const StyledModalContainer = styled.div`
    display: ${ props => props.showCodeModal ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`;

const StyledModalBG = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: white;
    opacity: 0.5;
`;

const StyledModal = styled.div`
    position: fixed;
    width: 500px;
    height: auto;
    padding: 2rem;
    top: 30%;
    left: 50%;
    margin-top: -100px; /* Negative half of height. */
    margin-left: -250px; /* Negative half of width. */
    background-color: #36213e;
`;

const StyledTextArea = styled.textarea`
    height: 100%;
    width: 100%;
`;

const StyledButton = styled.div`
    background-color: #8AC6D0;
    color: black;
    padding: 10px 20px;
    border-radius: 5px;
    align-self: flex-end;
    margin-bottom: 1rem;
    margin-top: 2rem;
    cursor: pointer;
`;


const GraphOverview = ({ location }) => {
    const [ exportChart, setExportChart ] = useState(false);
    const [ showCodeModal, setShowCodeModal ] = useState(false);
    const [ exportedCode, setExportedCode ] = useState(false);

    const textAreaRef = useRef();

    const selectCode = () => {
        textAreaRef.current.select()
    }

    const prepareExport = () => {
        const cloned = document.getElementById('barchart').cloneNode(true)

        const chartExport = document.getElementById('chartForExport')
        chartExport.innerHTML = cloned.innerHTML

        const rects = chartExport.getElementsByTagName('rect')

        Object.keys(rects).forEach(key => {
            const widthAtAnimEnd = rects[key].width.baseVal.valueAsString
            rects[key].innerHTML = `
                <animate attributeType="CSS" attributeName="width" from="0" to="${widthAtAnimEnd}" dur="1s" />
            `
        })

        const textArea = document.getElementById('textArea')
        textArea.value = chartExport.innerHTML
        setShowCodeModal(true)
        setExportedCode(chartExport.innerHTML)
        selectCode()
        textArea.select()
        document.execCommand('copy')
    }

    const fields = location.state

    let charCount = 0;
    Object.keys(fields).forEach( key => {
        if (key.length > charCount) charCount = key.length;
    });

    return (
        <>
            <StyledRow>
                <StyledHeader>Chart styling</StyledHeader>
                <div id='bar'>
                    <Bar 
                        fields={fields} 
                        width={width} 
                        charCount={charCount} />
                </div>
                <StyledButton onClick={() => {
                    prepareExport()
                }}>
                    EXPORT
                </StyledButton>
                <p style={{marginLeft: 'auto'}}>(Click export when you're done)</p>
            </StyledRow>
            <StyledModalContainer showCodeModal={showCodeModal}>
                <StyledModalBG onClick={() => {
                    setShowCodeModal(false)
                    setExportChart(false)
                }} />
                <StyledModal onClick={(e) => {
                    e.stopPropagation()
                    selectCode()
                }}>
                    <StyledParagraph>Svg code copied to clipboard!</StyledParagraph>
                    <StyledTextArea ref={textAreaRef} rows="20" value={exportedCode} readOnly onFocus={() => textAreaRef.current.select()}></StyledTextArea>
                </StyledModal>
            </StyledModalContainer>
        </>
    )
}

export default withRouter(GraphOverview);