import React, { useState } from 'react'
import Headroom from 'react-headroom'
import styled, { keyframes } from 'styled-components'
import Hamburger from 'hamburger-react'
import { fadeIn, fadeOut } from 'react-animations'
import Toggle from '../Theme/toggler'

import {
    greeting,
    workExperiences,
    skillsSection,
    educationInfo,
    projects,
    blogSection,
    contactInfo,
  } from '../portfolio'; 

const Header = (props) => {

  const [menu, setMenu] = useState(false)
  const [animation, setAnimation] = useState(false)

  const handleClick = () => {
    if (menu === false) {
      setMenu(true)
      setAnimation(true)
    } else if (menu === true) {
      setAnimation(false)
      setTimeout(() => {
        setMenu(false)
      }, 500)
    }
  }
  
    return (
      <Headroom>
          <NavBar>
              <div style={{padding: 7}}>
                <span> &lt;</span>
                <Name >{greeting.username}</Name>
                <span>/&gt;</span>
              </div>
              <Hamburger size={20} duration={0.6} distance="lg" 
                         /*color='#fff'*/ rounded label="Show menu"
                         toggled={animation} toggle={handleClick} 
                         />
                <NavList show={menu}
                         animate={animation}
                         >
                    <li>{skillsSection.title}</li>
                    <li>{educationInfo.title}</li>
                    <li>{workExperiences.title}</li>
                    <li>{projects.titleName}</li>
                    <li>{blogSection.title}</li>
                    <li>{contactInfo.titleName}</li>
                    <li> 
                      <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
                    </li>
                </NavList>
            </NavBar>
        </Headroom>
    )
}

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    color: grey;
    align-items: center;
    font-size: 1.4rem;
  }
`
const Name =  styled.h1`
  font-family: 'Great Vibes', cursive;
  margin: 0 0.5rem;
  color: ${({ theme }) => theme.yeahBaby};
`
const NavList = styled.ul`
  animation: 1s ${props => props.animate === true ? fadeInAnimation : fadeOutAnimation};
  position: absolute;
  top: 2rem;
  width: 100%;
  height: 95vh;
  display: ${props => props.show === true ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #0a0a0a;
  li {
    list-style: none;
    cursor: pointer;
    &:hover {
      color: orange;
    }
  }
`

export default Header