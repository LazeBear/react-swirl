import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactSwirl } from '../src';
import { Theme } from '../src/interface';
// import styled from 'styled-components';

const images = [
  'https://images.unsplash.com/photo-1572005241776-980772977b0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1572889834817-10568c34a399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1571627912808-5183884c6b8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1574572383277-0e42906ee073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1574463738523-28c65be8b7b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1574540382124-1f4b5d503c41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
];

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'black',
      }}
    >
      <ReactSwirl theme={Theme.LIGHT}>
        {images.map((i, idx) => {
          return <img src={i} alt="image" key={idx}></img>;
        })}
      </ReactSwirl>
    </div>
  );
};

// const Container = styled.div`
//   width: 100%;
// `;

ReactDOM.render(<App />, document.getElementById('root'));
