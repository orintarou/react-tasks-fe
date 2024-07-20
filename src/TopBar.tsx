// src/components/TopBar.tsx
import React from 'react';
import styled from '@emotion/styled';

// Styled components
const TopBarContainer = styled.div({
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: '#333',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  overflow: 'hidden'
});

const ScrollContainer = styled.div({
  display: 'flex',
  whiteSpace: 'nowrap',
  animation: 'scroll-left 20s linear infinite',
  '@keyframes scroll-left': {
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(-100%)' }
  }
});

const Item = styled.div({
  padding: '0 20px',
  fontSize: '16px'
});

// Define the ListItemType interface
interface TopBarType {
  id: number;
  note: string;
}

// Define the ListProps interface
interface TopBarProps {
  items: TopBarType[];
}

const TopBar: React.FC<TopBarProps> = ({ items }) => {
  return (
    <TopBarContainer>
      <ScrollContainer>
        {items.map((item, index) => (
          <Item key={index}>{item.note}</Item>
        ))}
      </ScrollContainer>
    </TopBarContainer>
  );
};

export default TopBar;
