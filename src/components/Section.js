import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { Card } from "../components/card/card";
import swar from './swar.png';
import Header from './Header';
import vid from './vid.gif';


 function Section({title,description,leftBtnText,rightbtnText,backgroundImg,downarrow}) {
   return (
     // bg={backgroundImg}
     <Wrap style={{ background: "#00132e" }}>
       <Header />
       <Fade bottom>
           <ItemText>
            <h1 class="JsGRdQ">THE TVS SCHOOL</h1>
           <img className='swarnotsav' src={swar} alt="main" />

         </ItemText>
         
         </Fade>
       <Button>
         <Fade bottom>
       {/* <div class="vid" style={{color:"#00132E",paddingtop:"0px"}}>
              <img src={vid} alt="wait until the page loads" />
           </div> */}
           <CardContainer active={"true"}>
            <a style={{cursor:"pointer"}} href='/events'><Card title={"Verseny'22"} date={1} des={"Learn More...."} /></a> 
           <Separator />
           <Card title={"INTERSCHOOL"} date={2} des={"Learn More...."} />
           <Separator />
             <Card title={"MARATHON RUN"} date={3} des={"Learn More...."} />
           </CardContainer>

             <CardContainer active={"true"}>
            <a style={{cursor:"pointer"}} href='/events'><Card title={"CARNIVAL"} date={1} des={"Learn More...."} /></a> 
           <Separator />
           <a style={{cursor:"pointer"}} href='/events'><Card title={"GOLDEN JUBILEE"} date={2} des={"Learn More...."} /></a>
         </CardContainer>
         </Fade>
          
         {downarrow &&
           <Downarrow src="/images/down-arrow.svg" />
           }
           
         </Button>
       </Wrap>
   )
 }
 
export default Section
 
const Wrap = styled.div`
  width: 100vw;
  height: 100vh; 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/images/model-3.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical
   align-items: center; //horizaontal
   background-image: ${props => `url("/images/${props.bg}")`}
  `

const ItemText = styled.div`
  z-index: -1;
  padding-top: 30vh;
  text-align: center;

  .JsGRdQ {
    font-size: 70px;
  }

  .swarnotsav{
    width: 400px
  }

  h1 {
    color: rgb(244,202,71);
    fontweight: 400;
    fontstyle: fantasy;
    text-decoration: none;
  }

    @media (max-width:768px) {
    .swarnotsav {
        max-width: 400px;
        max-height: 300px;
        padding-top: 19vh;
  
    }
  }


`

const ButtonGroup = styled.div`
   display: flex;
   margin-bottom: 30px;
   @media (max-width: 768px) {
     flex-direction: column;
   }

`

const LeftButton = styled.div`
  background-color: rgba(23,26,32,0.8);
  height: 40px;
  width: 256px;
  color: white; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 1;
  text-transform: uppercase;
  font-size: 12px;
 font-weight: 600;
  cursor: pointer;
  margin: 8px;
` 

const RightButton = styled(LeftButton)`
  color: black;
  background: white;
  opacity: 0.65;
   
`

const Downarrow = styled.img`
   height: 40px;
   animation: animateDown infinite 1.5s;
   overflow-x: hidden;
`

const Button = styled.div`
 
`

const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00132E;
  overflow: hidden;
  margintop: 200px;
`;

const Separator = styled.span`
  margin-left: 30px;
  margin-right: 30px;
`;


