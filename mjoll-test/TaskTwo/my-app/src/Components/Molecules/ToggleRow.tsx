import React from 'react';
import styled from 'styled-components';

const ToggleRow: React.FC<{ text: string; }> = ({ text }) => {
    return (
        <RowContainer>
            <Text>{text}</Text>
            <Switch className="switch">
                <input type="checkbox" />
                <span className="slider round" />
            </Switch>
        </RowContainer>
    )
}

export default ToggleRow

const Switch = styled.label`
    margin: 4px 0;
`;

const Text = styled.span`
    padding: 8px 0 0 0;
`;

const RowContainer = styled.div`
    background-color: #282c34;
    width: 94%;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px 0 16px;
    font-size: 16px;
    height: 34px;
`;
