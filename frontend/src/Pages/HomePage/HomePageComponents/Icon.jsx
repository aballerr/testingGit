import React, { Component } from 'react';
import styled from 'styled-components';



const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 28%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    
  }

`

const Header = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 25px;
  color: white;
  margin-top: 10px;
`

const Text = styled.p`
  color: #e5e5e5;
  font-weight: 300;
  padding: 0;
  margin: 0;
  margin-top: 5px;
  color: #cccccc;
`

// const Img = styled.img.attrs({
//   src: `${img}`,
// })`
// width: 64px;
// height: 64px;
// margin-left: auto;
// margin-right: auto;
// `
const Img = styled.img`
width: 64px;
height: 64px;
margin-left: auto;
margin-right: auto;
background-color: rgba(255, 255, 255, 10);
padding: 50px;
border-radius: 50%;

 @media only screen and (max-width: 720px) {
   width: 30px;
   height: 30px;
  }
`



class Icon extends Component {


  render() {
    return (
      <IconDiv>

        <Img src={this.props.src}></Img>
        <Header>{this.props.headText}</Header>
        <Text>{this.props.children}</Text>
      </IconDiv>
    );
  }
}

export default Icon;
