import React, { Component } from 'react';
import styled from 'styled-components';
import Services from './Services';
import Profile from './Profile';
import Footer from './Footer';
import ContactForm from './ContactForm';



const Wrapper = styled.section`
  height:  100vh;
  background: url(${require('../../assets/laptop.jpg')});
  background-position: center;
  background-size: cover;         
  text-align: center;
`;



const Shadow = styled.section`
  height: 100vh;
  background-color: rgba(0,0,0,0.3);
`;

const Header = styled.h1`
  margin-top: 0;
  font-size: 2.5em;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Bottom = styled.section`
  position: absolute;
  left: 50%;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%);
`;

const Text = styled.p`
  color: rgba(255, 255, 255, 1.0);
  font-size: 18px;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
`;

const Glyph = styled.i`
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
`

const Title = styled.h1`
  padding: 0;
  margin: 0;
`;

const Green = styled.span`
color: #3abfa7;
`

const Link = styled.a.attrs({
  href: '#about'
})`
  text-decoration: none;
  color: white;
`


class HomePage extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Shadow>
            <Header>Hi, I'm <Green>Alex</Green>.  I Design and Develop websites.</Header>
          </Shadow>
          <Bottom><Link><Glyph className="fas fa-chevron-down" /></Link></Bottom>
        </Wrapper>

        <Profile />
        <Services />

      </div>
    );
  }
}

export default HomePage;
