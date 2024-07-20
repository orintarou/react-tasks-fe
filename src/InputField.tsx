// src/components/InputField.tsx
import React, { useState } from 'react';
import styled from '@emotion/styled';

const InputContainer = styled.div({
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
});

const Input = styled.input({
  display: 'flex',
  padding: '10px',
  fontSize: '1em',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
  maxWidth: '300px',
});

const Button = styled.button({
  display: 'flex'
});

interface InputFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, onAdd, placeholder }) => {
  return (
    <InputContainer>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Button onClick={onAdd}>Add</Button>
    </InputContainer>
  );
};

export default InputField;
