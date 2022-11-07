import React from 'react'
import styled from 'styled-components'

function Section(props){
  
  return (
   <Wrap bgImage={props.backgroundImg}>
    <Itemtext>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </Itemtext>
    <Buttons>
    <ButtonGroup>
      <LeftButton>
        {props.leftBtntext}
      </LeftButton>
      {props.rightBtntext &&
      <RightButton>
      {props.rightBtntext}
      </RightButton>
      
      }
      
    </ButtonGroup>
    <DownArrow src="/images/down-arrow.svg"></DownArrow>

    </Buttons>
   

   </Wrap>
  )
}

export default Section
const Wrap = styled.div`
width:100%;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url('/images/model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props =>`url("/images/${props.bgImage}")`};


`
const Itemtext = styled.div`
padding-top:15vh;


`
const Buttons = styled.div``;
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media (max-width:768px){
  flex-diraction:column;
}


`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white; 
display:flex;
align-items:center;
justify-content:center;
border-radius:100px;
opacity:0.85px;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;


`
const RightButton = styled(LeftButton)`
background-color:rgba(255,255,255, 0.65);
color:black;

`
const DownArrow = styled.img`
height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;

`