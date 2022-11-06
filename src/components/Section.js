import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import swar from './swar.png'
 function Section({title,description,leftBtnText,rightbtnText,backgroundImg,downarrow}) {
   return (
     // bg={backgroundImg}
     <Wrap style={{background:"#00132e"}}>
       <Fade bottom>
           <ItemText>
           {/* <h1 style={{ color: "#ebc04f",fontFamily:"mono"}}>{img}</h1> */}
           <img className='swarnotsav' src={swar}alt="main"/>
           <h1 className='word' style={{ color: "#f3cb44",fontSize:"xx-large",fontWeight:"bolder",fontFamily:"cursive",textAlign:"center"}}>{description}</h1>  
         </ItemText>
         </Fade>
       <Button>
         <Fade bottom>
           {/* <ButtonGroup>
               <LeftButton>
                   {leftBtnText}
           </LeftButton>
           {rightbtnText &&
             <RightButton>
               {rightbtnText}
             </RightButton>
           }
           </ButtonGroup> */}
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
  padding-top: 15vh;
  text-align: center;

  h1 {
    padding-right: 50px;

    @media (max-width:768px) {
      .word {
     
    }
  }
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