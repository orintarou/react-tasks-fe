// src/components/List.tsx
import React from 'react';
import styled from '@emotion/styled';

const ListContainer = styled.div({
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  backgroundColor: '#fff'
});

const ListItem = styled.div({
  padding: '10px',
  borderBottom: '1px solid #eee'
});

interface ListProps {
  items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ListContainer>
  );
};

export default List;
