import React, { Component } from 'react';
import styled from 'styled-components'
import Icon from './HomePageComponents/Icon';
import HeaderUnderlined from './HomePageComponents/HeaderUnderlined';
import img from '../../assets/idea.png';
import lineChart from '../../assets/line-chart.png';
import clock from '../../assets/hourglass.png';
import paint from '../../assets/paint-brush.png';
import ContactForm from './ContactForm';
import Footer from './Footer';

import Profile from './Profile';

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  padding-top: 1px;
  margin-top: -1px;
  padding-bottom: 20px;
`

const IconsDiv = styled.div`
  display: flex;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 90px;
  margin-bottom: 50px;
 @media only screen and (max-width: 600px) {
   flex-direction: column;
   width: 100%;
 }
`

const Background = styled.div`
  position: relative;
  background: url(${require('../../assets/forest.jpg')});
  background-position: center;
  background-size: cover;     
 
`

const BackgroundTint = styled.div`
 width: 100%;
 height: 100%;
 padding-bottom: 90px; 
 background-color: rgba(0, 0, 0, 0.4);
`

const Comment = styled.p`
 color: #b2b2b2;
`



class Services extends Component {
  render() {
    return (
      <Wrapper>

 
        <Background>
          <BackgroundTint>
            <HeaderUnderlined>My Services</HeaderUnderlined>
            <Comment>Let's create together</Comment>
            <IconsDiv>
              <Icon headText="Intuitive" src={img}>Strong preference for easy to use, intuitive UX/UI.  The simpler the better.</Icon>
              <Icon headText="SEO" src={lineChart}>Search Enginge Optimized for maximum traffic.  Bring your website to the top of Google Search.</Icon>
              <Icon headText="Design" src={paint}>Built with clean and Intuitve design, never have your users get confused again.</Icon>
              <Icon headText="Fast" src={clock}>Built to load in milliseconds with no down time.  Speed is everything.</Icon>
            </IconsDiv>
          </BackgroundTint>
        </Background>

        <ContactForm />

        <Footer />

      </Wrapper>
    );
  }
}

export default Services;
