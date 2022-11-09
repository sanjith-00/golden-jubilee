import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { Card } from "../components/card/card";
import img1 from "./sj.png";

function Event() {
    return (
        <div>
      <Con style={{ background: "#00132e" }}>
            <Header />

            {/* <div style={{backgroundColor:"gold",width:"800px"}}>
               <h1 style={{color:"white",}}>Verseny Events</h1>
            </div> */}

            <div >
                 <CardContainer>
            <a href="/registration"><Card title={"General Quiz"} date={1} des={"Register..."} /></a>
           <Separator />
           <a href="/registration"><Card title={"Trivia Nights"} date={1} des={"Register..."} /></a>
           <Separator />
          <a href="/registration"><Card title={"Young Tycoons"} date={1} des={"Register..."} /></a>
         </CardContainer>
                </div>
                
                  <div >
                 <CardContainer>
            <a href="/registration"><Card title={"Ad Act"} date={1} des={"Register..."} /></a>
           <Separator />
          <a href="/registration"><Card title={"Short Film"} date={1} des={"Register..."} imgUrl={img1} /></a>
           <Separator />
          <a href="/registration"><Card title={"Clash Of Minds"} date={1} des={"Register..."} /></a>
         </CardContainer>
                </div>
                
                   <div >
                 <CardContainer>
           <a href="/registration"><Card title={"Story Writting"} date={1} des={"Register..."} /></a>
           <Separator />
          <a href="/registration"><Card title={"Group Dance"} date={1} des={"Register..."} /></a>
           <Separator />
         <a href="/registration"><Card title={"Creative Singing"} date={1} des={"Register..."} /></a>
         </CardContainer>
                </div>
                
                   <div >
                 <CardContainer>
           <a href="/registration"><Card title={"Mime"} date={1} des={"Register..."} /></a>
           <Separator />
          <a href="/registration"><Card title={"Perspective Drawing"} date={1} des={"Register..."} /></a>
           <Separator />
           <a href="/registration"><Card title={"Treasure Hunt"} date={1} des={"Register..."} /></a>
         </CardContainer>
                </div>
                
                <div >
                 <CardContainer>
           <a href="/registration"><Card title={"As You Like It"} date={1} des={"Register..."} /></a>
           <Separator />
           <a href="/registration"><Card title={"Skit"} date={1} des={"Register..."} /></a>
           <Separator />
           <a href="/registration"><Card title={"Turn Coat"} date={1} des={"Register..."} /></a>
         </CardContainer>
                </div>
                
        </Con>
        </div>
    )
}

export default Event;


const Con = styled.div`
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