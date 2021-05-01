import React from 'react';
import styled from '@emotion/styled/macro';
import { ThemeProvider } from '@emotion/react';
import Card from './components/Card';
import { GlobalStyles, light } from './styles/styles';
import './App.css';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 900px) {
    justify-content: center;
    & > div:first-child {
      margin: 60px 20px 30px 20px;
    }
    & > div {
      margin: 30px 20px;
    }
    & > div:last-child {
      margin: 30px 20px 60px 20px;
    }
  }

  @media only screen and (min-width: 901px) {
    & > div {
      margin: 20px 20px;
    }
  }
`;

const App = (): JSX.Element => {
  const todos = [
    'Ir al lavadero',
    'Comprar monster',
    'Regar las plantas',
    'Tengo ganas de romper esta fucking card',
    'Hola bb',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  ];
  return (
    <div className="App">
      <Container>
        {todos.map((todo) => (
          <Card title={todo} />
        ))}
      </Container>
    </div>
  );
};

export default (): JSX.Element => (
  <ThemeProvider theme={light}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
