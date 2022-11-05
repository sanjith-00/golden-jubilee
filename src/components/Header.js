/* eslint-disable */
import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const  [burgerStatus , setburgerStatus] = useState(false)
  const cars = useSelector(selectCars)
  return (
    <Container>
      {/* just add school logo alone */}
      <a>
         {/* <img src="/images/logo.svg" alt="logo"/> */}
      </a>
      <Menu>
        {cars && cars.map((car ,index) => (
          <a  key={index} href="/">{car}</a>
        ))}
        <SubMenu>
          {/* <a href="#">Shop</a>
        <a href="#">Account</a> */}
        </SubMenu>
      </Menu>

      <RightMenu>
        <CustomMenu onClick={()=>setburgerStatus(true)}/>
      </RightMenu>
      <BurgerNav style={{backgroundColor:"00132e"}} show={burgerStatus}>
        <CloseWrapper>
          <Close onClick={()=>setburgerStatus(false)} />
          </CloseWrapper>
        <li><a style={{color:"gold"}} href="#">Home</a></li>
        <li><a style={{color:"gold"}} href="#">Events</a></li>
        <li><a style={{color:"gold"}} href="#">Registration</a></li>
        <li><a style={{color:"gold"}} href="#">About Us</a></li>
        {/* <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Solar Panels</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">powerWall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Find us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Shop</a></li>
         <li><a href="#">More</a></li> */}
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
      text-align: center;
      flex-wrap: nowrap;
      color:#E0AA3E;
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
 background-color: white;
 width: 300px;
 z-index: 16; 
 list-style:none;
 padding: 20px;
 display: flex;
 flex-direction: column;
 text-align: start;
 transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
 li{
   padding: 10px 0px
 }
 a{
   font-weight: bold
   &hover: {
  color:white;
 }
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