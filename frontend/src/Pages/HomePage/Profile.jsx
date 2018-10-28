import React, { Component } from "react";
import ProfilePicture from "../../assets/myfaceCropped.JPG";
import FullBodyPicture from "../../assets/myface.JPG";
import bngMe from "../../assets/bngMe.jpg";
import Jeremy from "../../assets/jeremy.jpg";
import styled from "styled-components";

const color = "black";

const Wrapper = styled.div`
  display: flex;
  height: auto;
  background-color: #ffffff;
  padding: 80px 0;


  @media screen (max-width: 700px){
    padding: 0px;
  }
`;

const CenterDiv = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-left: 100px;
    margin-right: 100px;
    flex-direction: column;
  }
`;

const ProfileDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  text-align: left;
  max-width: 400px;
  width: auto;

  @media screen and (max-width: 700px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    text-align: center;

    height: auto;
  }
`;
const Title = styled.h3`
  color: #323232;
  font-size: 30px;
  padding: 0;
  margin: 0;
`;

const Paragraph = styled.p`
  color: #919194;
  padding: 0;
  margin: 0;
  line-height: 1.5;
  margin-top: 25px;
  letter-spacing: 1px;
`;

const Img = styled.img`
  height: 569px;
  width: 320px;
  margin-right: 100px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  @media only screen and (max-width: 700px) {
    /* width: 0;
   height: 0;*/
   height: 569px;
    width: 320px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
  }
`;

class Profile extends Component {
  render() {
    return (
      <Wrapper>
        <CenterDiv id="about">
          <Img src={bngMe} />
          <ProfileDiv>
            <Title>About me</Title>
            <Paragraph>
              My name is Alex Ball and I am a full time webdeveloper during the
              day and freelance web developer by night. I graduated with a
              degree in computer science Fall of 2016 from the University of
              Maryland, College park.
              <br />
              <br />I have a passion for building intuitive, beautiful and
              powerful websites. I enjoy taking a vision and building that
              vision into reality. My strong passion for business and voracious
              reading makes me a very capable individual. Let's link up and
              build you something beautiful.
            </Paragraph>
          </ProfileDiv>
        </CenterDiv>
      </Wrapper>
    );
  }
}

export default Profile;
