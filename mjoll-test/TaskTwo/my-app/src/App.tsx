import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleRow from './Components/Molecules/ToggleRow';
import TextRow from './Components/Molecules/TextRow';
import { toggleRowTexts } from './constants/text';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {toggleRowTexts.map((r, i) => 
          <Row key={r.name + i}>
            <ToggleRow text={r.name} key={r.name + i}/>
            <TextRow text={r.description} key={r.description + i}/>
          </Row>
        )}
      </header>
    </div>
  );
}

export default App;

const Row = styled.div`
  width: 100%;
  > * {
    margin: auto;
  }
`;
