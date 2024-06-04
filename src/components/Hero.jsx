import React, {useEffect} from 'react'
import AOS from 'aos'
import styled from 'styled-components';
import 'aos/dist/aos.css'

const ScrollText = styled.p`
  color: white;

`

const Scroll = styled.div`
  position: absolute;
  top: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ArrowDown = styled.i`
  color: white;
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color);
`

const HeroImg = styled.img`
  width: 50%;
  padding: 0 2rem;
`

const TextContainer = styled.div`
  text-align: center;
  color: white;
`

const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: 5px;
  color: var(--highlight-color);
  font-family: 'Abril Fatface', cursive;
`

function Hero(props) {
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[]);
  
  return (
    <Container>
        {props.yesImg &&
          <HeroImg alt=""/>
        }
        <TextContainer>
          <Title data-aos="fade-up">{props.title}</Title>
          <p data-aos="fade-up">
            {props.text}
          </p>
        </TextContainer>
        <Scroll data-aos="fade-up">
          <ScrollText>Scroll down</ScrollText>
          <ArrowDown className='fa-solid fa-arrow-down'/>
        </Scroll>
    </Container>
  )
}
export default Hero