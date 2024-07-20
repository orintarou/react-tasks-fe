// src/App.tsx
import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import TopBar from './TopBar';
import List from './List';


let items_left = [
  {"id": 0, "note": "left_one"},
  {"id": 1, "note": "left_two"},
  {"id": 2, "note": "left_three"},
  {"id": 3, "note": "left_four"},
]

let items_right = [
  {"id": 4, "note": "right_one"},
  {"id": 5, "note": "right_two"},
  {"id": 6, "note": "right_three"},
  {"id": 7, "note": "right_four"},
]

let items_combined = items_left.concat(items_right);


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
  return (
    <div className="container">
      <TopBar items={items_combined}/>
      <Left>
        <List items={items_left} />
      </Left>
      <Right>
        <List items={items_right} />
      </Right>
    </div>
  );
}

export default App;
