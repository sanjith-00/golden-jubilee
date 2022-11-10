import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { Card } from "../components/card/card";
// import img1 from "./sj.png";
// import trivia from "./trivian.png";
// // import gq from "./gq.png";
// import mim from "./mim.png";
// import tc from "./tc.png";
// import pd from "./pd.png";
// import th from "./th.png";
import cm from "./images/cm.jpg";
import cs from "./images/cs.jpg";
import pd from "./images/pd.jpg";
import gq from "./images/11.jpg";
import tn from "./images/12.jpg";
import yt from "./images/9.jpg";
import aa from "./images/7.jpg";
import sf from "./images/6.jpg";
import sw from "./images/8.jpg";
import gd from "./images/4.jpg";
import mm from "./images/5.jpg";
import as from "./images/14.jpg";
import tc from "./images/13.jpg";
import sk from "./images/10.jpg";



function Event() {
    return (
        <div>
      <Con style={{ background: "#00132e" }}>
            <Header />

            <div style={{textAlign:"start",padding:"50px",marginTop:"20px"}}>
               <h1 style={{color:"white",textAlign:"start",marginTop:"100px"}}>Verseny Events - <span style={{color:"#F4CA47"}}>15</span></h1>
            </div>

            <div >
                 <CardContainer>
            <a href="/registration"><Card title={"General Quiz"} date={1} des={"Register..."}  ki={"Quiz Events will be based on Currents affairs, Arts ,Music ,Nations and all that matters."} imgUrl={gq} /></a>
           <Separator />
           <a href="/registration"><Card title={"Trivia Nights"} date={1} des={"Register..."} imgUrl={tn}  ki={ "Logical quiz: Written logical question paper will be given. The short listed participants will be selected for the second round."}  /></a>
           <Separator />
          <a href="/registration"><Card title={"Young Tycoons"} date={1} des={"Register..."} imgUrl={yt} ki={"Participants shall choose a product of their own and explain about their product and startup ideas to the judges. Participants may be questioned based on their product proposal."} /></a>
         </CardContainer>
                </div>
                
                  <div >
                 <CardContainer>
            <a href="/registration"><Card title={"Ad Act"} date={1} des={"Register..."} imgUrl={aa} ki={"Participants will be given a product image. They should use their creativity to convince the customers to buy them."} /></a>
           <Separator />
          <a href="/registration"><Card title={"Short Film"} date={1} des={"Register..."} imgUrl={sf} ki={"Theme : Self realisation"} /></a>
           <Separator />
          <a href="/registration"><Card title={"Clash Of Minds"} date={1} des={"Register..."} imgUrl={cm} ki={"Clash Of Minds ( Tamil Debate ), Clash of Minds (Debate) will be in the form of lot process.Schools will be competing for a single contradicting topic in Tamil."}  /></a>
         </CardContainer>
                </div>
                
                   <div >
                 <CardContainer>
           <a href="/registration"><Card title={"Story Writting"} date={1} des={"Register..."} imgUrl={sw} ki={"Participants can take 3 hints from a bowl and develop a story from those hints in either English or Tamil."} /></a>
           <Separator />
          <a href="/registration"><Card title={"Group Dance"} date={1} des={"Register..."} imgUrl={gd} ki={"The participants shall perform any type of dance styles like folk/classical/continental/dance representing any state."} /></a>
           <Separator />
         <a href="/registration"><Card title={"Creative Singing"} date={1} des={"Register..."} imgUrl={cs} ki={"Participants can sing creatively comprising of Beat Box, Own songs, Remix, etc by using their own creative equipments like Clinging of vessels, Cardboard boxes, Spoons, Forks,etc."} /></a>
         </CardContainer>
                </div>
                
                   <div >
                 <CardContainer>
           <a href="/registration"><Card title={"Mime"} date={1} des={"Register..."} imgUrl={mm} ki={"Theme : Any interesting incident in your school life."} /></a>
           <Separator />
          <a href="/registration"><Card title={"Perspective Drawing"} date={1} des={"Register..."} imgUrl={pd} ki={"Imagine and Draw on the spot."} /></a>
           <Separator />
           <a href="/registration"><Card title={"Treasure Hunt"} date={1} des={"Register..."} imgUrl={mm} ki={"The game leads the seekers through a set of clues that takes them from place to place to find a treasure. The ''seekers'' need to read each clue they find and figure out the next location."} /></a>
         </CardContainer>
                </div>
                
                <div >
                 <CardContainer>
           <a href="/registration"><Card title={"As You Like It"} date={1} des={"Register..."} imgUrl={as} ki={"Participants can exhibit their talents like Nail Art, Mehandi, Art from Waste, Calligraphy, Rubik’s cube solving, Juggling, Instrumental Music, Solo Singing, Vegetable Carving, Hairdo, Face painting,etc and can exhibit any unique talents along with the events mentioned."} /></a>
           <Separator />
           <a href="/registration"><Card title={"Skit"} date={1} des={"Register..."} imgUrl={sk} ki={"Theme : Solution for any social issue"} /></a>
           <Separator />
           <a href="/registration"><Card title={"Turn Coat"} date={1} des={"Register..."} imgUrl={tc} ki={"Turn Coat will be in the form of lot process. Schools will be competing for a single contradicting topic in English."} /></a>
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