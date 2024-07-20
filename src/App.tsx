// src/App.tsx
import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import List from './List';

const Left = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  width: '50%',
  left: 0,
  top: 0,
  bottom: 0,
  padding: '20px'
});

const Right = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  width: '50%',
  right: 0,
  top: 0,
  bottom: 0,
  padding: '20px'
});

const App = () => {
  const leftItems = ['Task 1', 'Task 2', 'Task 3'];
  const rightItems = ['Task A', 'Task B', 'Task C'];

  return (
    <div className="container">
      <Left>
        <List items={leftItems} />
      </Left>
      <Right>
        <List items={rightItems} />
      </Right>
    </div>
  );
}

export default App;
