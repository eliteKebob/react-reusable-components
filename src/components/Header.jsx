import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const StyledHeader = styled.header`
  background-color: brown;
  width: 100vw;
  height: 10vh;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  transition: 0.3s all;
`

const StyledBrand = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`

const StyledImage = styled.img`
  height: 9vh;
  margin-right: 1vw;
`

const NavLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const NavLink = styled.p`
  margin: 0 1vw;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Header = ({ brand, Logo, className }) => {
  const navigate = useNavigate()

  return (
    <StyledHeader className={className}>
      <StyledBrand onClick={() => navigate('/')}>
        <StyledImage src={Logo ? Logo : logo} />
        <h1>{brand ? brand : 'Brand'}</h1>
      </StyledBrand>
      <NavLinks>
        <NavLink onClick={() => navigate('/example')}>Example</NavLink>
        <NavLink onClick={() => navigate('/example')}>Example 2</NavLink>
        <NavLink onClick={() => navigate('/example')}>Example 3</NavLink>
      </NavLinks>
    </StyledHeader>
  )
}

export default Header
