import React from 'react'
import styled from 'styled-components';
import { useEffect, useState,  } from 'react'



interface InputProps {
  type: string
  placeholder?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid gray;
  font-size: 16px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: green;
    box-shadow: 0 0 4px green;
  }
`

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
  )
}

export default Input
