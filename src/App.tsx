import React from 'react';
import styled from '@emotion/styled/macro';
import { ThemeProvider } from '@emotion/react';
import logo from './logo.svg';
import './App.css';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
    };
  }
}

const light = {
  colors: {
    primary: 'green'
  }
};

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`;

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Container>
            <div>Hola</div>
          </Container>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
