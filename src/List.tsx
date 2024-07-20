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

// Define the ListItemType interface
interface ListItemType {
  id: number;
  note: string;
}

// Define the ListProps interface
interface ListProps {
  items: ListItemType[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ListContainer>
      {items.map((item) => (
        <ListItem key={item.id}>{item.note}</ListItem>
      ))}
    </ListContainer>
  );
};

export default List;
