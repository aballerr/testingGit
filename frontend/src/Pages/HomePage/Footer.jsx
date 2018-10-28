import React, { Component } from "react";

import styled from "styled-components";

// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 1px;
  background-color: black;
  border-top: 1px solid lightgray;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 50px;
`;

const IconsDiv = styled.div`
  display: flex;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`;
const FootHeader = styled.h3`
  color: rgba(255, 255, 255, 0.85);
`;

const Icon = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 10px;
  margin-right: 10px;
  color: white;
  text-align: center;

  &:hover {
    color: black;
    background-color: white;
    transition: background-color 1s ease-out, color;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <FootHeader>Want to connect? Find me at the following.</FootHeader>
        <IconsDiv>
          <a href="https://www.linkedin.com/in/alex-ball-72b545b4/">
            <Icon>
              <i className="fab fa-linkedin-in" />
            </Icon>
          </a>
          <a href="mailto:aball9423@gmail.com">
            <Icon>
              <i className="far fa-envelope" />
            </Icon>
          </a>
          <a href="https://www.instagram.com/aballerrr/">
            <Icon>
              <i className="fab fa-instagram" />
            </Icon>
          </a>
          <a href="https://github.com/aballerr">
            <Icon>
              <i className="fab fa-github" />
            </Icon>
          </a>
          <a href="https://www.npmjs.com/~aballer">
            <Icon>
              <i className="fab fa-npm" />
            </Icon>
          </a>
        </IconsDiv>
      </Wrapper>
    );
  }
}

export default Footer;
