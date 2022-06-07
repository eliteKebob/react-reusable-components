import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: green;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 999px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    background-color: darkgreen;
  }
`

const TestButton = ({ text, className }) => {
  return <Button className={className}>{text}</Button>
}
export default TestButton
