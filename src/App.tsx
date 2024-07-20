// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import styled from '@emotion/styled';
import TopBar from './TopBar';
import List from './List';
import InputField from './InputField';

const Left = styled.div({
  display: 'flex',
  flexDirection: 'column',
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
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  width: '50%',
  right: 0,
  top: 0,
  bottom: 0,
  padding: '20px'
});

const HeaderContainer = styled.div({
  textAlign: 'center',
  fontFamily: 'sans-serif',
  padding: '15px 20px',
  color: '#fff',
  fontSize: '2em',
  position: 'fixed',
  width: '100%',
  top: '60px', // Positioned below the top bar
  zIndex: 1, // Ensure it's above other elements
});

const Name = styled.div({
  marginTop: '20px', // Space between the list and the name
  fontSize: '1.2em', // Font size for the name
});

let items_left = [
  {"id": 0, "note": "left_one", "user": "Kuma"},
  {"id": 1, "note": "left_two", "user": "Kuma"},
  {"id": 2, "note": "left_three", "user": "Kuma"},
  {"id": 3, "note": "left_four", "user": "Kuma"},
]

let items_right = [
  {"id": 4, "note": "right_one", "user": "Pran"},
  {"id": 5, "note": "right_two", "user": "Pran"},
  {"id": 6, "note": "right_three", "user": "Pran"},
  {"id": 7, "note": "right_four", "user": "Pran"},
]


const App = () => {
  const [leftItems, setLeftItems] = useState(items_left);
  const [rightItems, setRightItems] = useState(items_right);
  const [newLeftItem, setNewLeftItem] = useState('');
  const [newRightItem, setNewRightItem] = useState('');


  const handleLeftInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewLeftItem(event.target.value);
  };

  const handleRightInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewRightItem(event.target.value);
  };

  const handleAddLeftItem = () => {
    if (newLeftItem.trim() === '') return;
    setLeftItems([...leftItems, { id: Date.now(), note: newLeftItem, user: 'Kuma' }]);
    setNewLeftItem('');
  };

  const handleAddRightItem = () => {
    if (newRightItem.trim() === '') return;
    setRightItems([...rightItems, { id: Date.now(), note: newRightItem, user: 'Pran' }]);
    setNewRightItem('');
  };

  let items_combined = leftItems.concat(rightItems);

  return (
    <div className="container">
      <TopBar items={items_combined}/>
      <HeaderContainer>Shared To-Do List</HeaderContainer>
      <Left>
        <InputField
          value={newLeftItem}
          onChange={handleLeftInputChange}
          onAdd={handleAddLeftItem}
          placeholder="Add new item to the left list..."
        />
        <List items={leftItems} />
        <Name className={'left_user'}>Kuma</Name>
      </Left>
      <Right>
        <InputField
          value={newRightItem}
          onChange={handleRightInputChange}
          onAdd={handleAddRightItem}
          placeholder="Add new item to the right list..."
        />
        <List items={rightItems} />
        <Name className={'right_user'}>Pran</Name>
      </Right>
    </div>
  );
}

export default App;
