/* eslint-disable */
import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import { borderBottom } from '@mui/system';
import logo from './logo.png'




function Header() {
  const  [burgerStatus , setburgerStatus] = useState(false)
  const cars = useSelector(selectCars)
  function handle() {

  }
  return (
    <Container>
      {/* just add school logo alone */}
      <a href='/'>
        <img  style={{paddingTop:"5px",paddingLeft:"15px",cursor:"pointer"}} width='90px' height= '65px' className='logo' src={logo} alt="logo"/>
      </a>
      <Menu>
        {/* {cars && cars.map((car ,index) => (
          <a  key={index} href="/">{car}</a>
        ))} */}
        <a href="/">HOME</a>
        <a  href="/events">EVENTS</a>
        <a href="/registration">REGISTRATION</a>
        <a  href="/about us">ABOUT US</a>
        <SubMenu>
          {/* <a href="#">Shop</a>
        <a href="#">Account</a> */}
        </SubMenu>
      </Menu>

      <RightMenu>
        <CustomMenu onClick={()=>setburgerStatus(true)}/>
      </RightMenu>
      <BurgerNav style={{backgroundColor:"white"}} show={burgerStatus}>
        <CloseWrapper>
          <Close onClick={()=>setburgerStatus(false)} />
          </CloseWrapper>
        <li><a style={{ color: "black",fontSize:"large",borderBottom:"3px solid #f3cb44"}} href="/">Home</a></li>
        <li><a style={{color:"black",fontSize:"large",borderBottom:"3px solid #f3cb44"}} href="/events">Verseny-2022</a></li>
        <li><a style={{color:"black",fontSize:"large",borderBottom:"3px solid #f3cb44"}} href="/registration">Registration</a></li>
        <li><a style={{color:"black",fontSize:"large",borderBottom:"3px solid #f3cb44"}} href="/about us">About Us</a></li>
      </BurgerNav>
      </Container> 
   
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position:fixed;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex: 1; 
    margin-right: 120px;
   
  a {
     font-weight: 600;
      padding: 0 25px;
      padding-top: 8px;
      text-align: center;
      flex-wrap: nowrap;
      color:white;
      &:hover,&:active {
        color:#f3cb44;
      }
  }

  @media(max-width: 1200px){
    display:none;
  }

`

const RightMenu = styled.div`
display: flex;
align-items: center;
    a {
     font-weight: 600;
     margin-right: 25px;
     margin-left: 0;
     padding-left: 0;
  }
`

const CustomMenu = styled(MenuIcon)`
   cursor: pointer;
`

const SubMenu = styled.div`
 display: flex;
 justify-content: end;
 align-items: center;

`

const BurgerNav = styled.div`
 position: fixed;
 overflow-y: scroll;
 top: 0;
 bottom: 0;
 right: 0;
 background:white;
 width: 300px;
 z-index: 16; 
 list-style:none;
 padding: 20px;
 display: flex;
 flex-direction: column;
 text-align: start;
 
 transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
 li{
   padding: 10px 0px;
 }

 a{
   font-weight: bold;

 }
  transition: transform 0.2s

`

const Close = styled(CloseIcon)`
cursor: pointer;

`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

`