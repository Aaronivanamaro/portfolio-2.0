import React from 'react'
import emoji from 'react-easy-emoji'
// import Lottie from 'react-lottie';
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
// import { fadeIn, fadeOut } from 'react-animations'
import {
    greeting,
    socialMediaLinks,
    contactInfo
  } from '../portfolio'; 
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const Greeting = () => {

    return (

        <GreetingContainer>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <h2>{greeting.title}</h2>
              <WaveEmoji>{emoji("👋")}</WaveEmoji>
            </div>
            <p>{greeting.subTitle}</p>
            <Links>
              <a href={socialMediaLinks.github}>
                <FontAwesomeIcon icon={faGithub} className="contact-icons"/>
              </a>
              <a href={socialMediaLinks.linkedin}>
                <FontAwesomeIcon icon={faLinkedinIn} className="contact-icons"/>
              </a>
              <a href={socialMediaLinks.gmail}>
                <FontAwesomeIcon icon={faGoogle} className="contact-icons"/>
              </a>
            </Links>
            <Contact>
              <a href={contactInfo.number}>
                <p>Contact Me</p>
                <FontAwesomeIcon icon={faWhatsapp} className="contact-icons"/>                
              </a>
              <a href={greeting.resumeLink}>
                <p>See My Resume</p>
                <FontAwesomeIcon icon={faFileDownload} className="contact-icons"/>
              </a>
            </Contact>
        </GreetingContainer>
    )

}

const waveEmojiAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(12deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(9deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const GreetingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column; 
  margin: 3rem 1.5rem; 
  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
  p {
    font-size: 1.05rem;
    text-align: center;
  }
  .contact-icons {
    font-size: 2rem;
  }
`
const WaveEmoji = styled.div`
  font-size: 2rem;
  margin-left: 0.5rem;
  animation: ${waveEmojiAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
`
const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  a {
    width: 50px;
    height: 50px;
    background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    svg {
      width: 30px;
      height: 30px;
      path {
        fill: black;
      }
    }
  }
`
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: violet;
    border-radius: 10px;
    height: 45px;
    padding: 0 10px;
    p, svg {
      margin: 0.5rem;
      color: black;
    }
  }
`

export default Greeting