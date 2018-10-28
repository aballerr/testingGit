import React, { Component } from 'react';
import styled from 'styled-components';

const color = '#48494D';

const HeaderDiv = styled.div`
display: inline-block;
margin-left: auto;
margin-right: auto;
margin-top: 75px;

`
const UnderLine = styled.div`
  height: 2px;
  width: 55%;
  background-color: rgba(0, 0, 0, 0);

  margin: 0;
  padding: 0;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
`
const StyledHeader = styled.h1`
 margin: 0;

 color: white;
`


class HeaderUnderlined extends Component {


  

  render() {
    return (
      <HeaderDiv>
          <StyledHeader>{this.props.children}</StyledHeader>
  
      </HeaderDiv>
    );
  }
}

export default HeaderUnderlined;
