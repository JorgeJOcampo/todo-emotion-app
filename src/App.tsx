import React from 'react';
import styled from '@emotion/styled/macro';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles, light } from './styles/styles';
import logo from './logo.svg';
import './App.css';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`;

const App = (): JSX.Element => {
  return (
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
  );
};

export default (): JSX.Element => (
  <ThemeProvider theme={light}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
