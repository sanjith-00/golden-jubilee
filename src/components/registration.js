import React,{ useState, useEffect, useRef} from 'react'
import styles from "../forms.css"
import Select from 'react-select'
import { initializeApp } from "firebase/app";
import { getDatabase,ref,onValue,set,child,push, get, orderByChild } from "firebase/database";
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAmZmuckTBZuUwetU3xROn0DBmdFjGZpvE",
  authDomain: "ttstvsschool.firebaseapp.com",
  databaseURL: "https://ttstvsschool-default-rtdb.firebaseio.com",
  projectId: "ttstvsschool",
  storageBucket: "ttstvsschool.appspot.com",
  messagingSenderId: "557949322894",
  appId: "1:557949322894:web:564892b7f3b3600ff7abdf",
  measurementId: "G-H56FQJJJ16"
};


export const LoadingComponent = () => <div>Loading...</div>;

const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig)
const database = getDatabase(app);


const auth = getAuth();

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: '1px dotted pink',
    color: state.selectProps.menuColor,
    padding: 20,
  }),

  control: (_, { selectProps: { width }}) => ({
    width: width
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
class Reg extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: null,isLoading:true,isExists:false };
    this.onSettingsChanged = this.onSettingsChanged.bind(this);
  }
  onSettingsChanged(data){
    this.setState({data: data.val(), isLoading:false});
    if(this.state.data!=null){
    this.setState({
      isExists:true
    })
  }
  
  }
  componentDidMount() {
    
    let rootRef = firebase.database().ref();
    rootRef
    .child('users/'+getAuth().currentUser.email.replace('@gmail.com',''))
    .once('value',this.onSettingsChanged)
    
  }

  handleClick = () => {
    this.setState({
      isExists: false
    }
    )
  }
  handleSubmit = (event) => {
    event.preventDefault()
    var data = [];
    data.push(getAuth().currentUser.email)
    data.push(event.target[0].value)
    data.push(event.target[1].value)
    data.push(event.target[2].value)
    data.push(event.target[3].value)
    data.push(event.target[4].value)
    var aRef=ref(database,'users/'+getAuth().currentUser.email.replace('@gmail.com',''))
    set(aRef,{data})

    window.location.reload(false)

  
  }
 
render(){
  var title;
  var desc;
  var name;
  var cls;
  var wa;
  var ph;
  var schl;
  var button;
  if(this.state.data!=null){
    
     title="Update Profile"
     desc="Update your profile details"
     name=this.state.data.data[1]
     ph=this.state.data.data[2]
     wa=this.state.data.data[3]
     cls=this.state.data.data[4]
     schl=this.state.data.data[5]
     button="Update"
  }
  else{
     title="Register Now"
     desc="Register yourself for Swarnotsav"
     button="Register"
 
  }
  if(this.state.isLoading){
      return(<LoadingComponent/>)
  }

  if(this.state.isExists){
     return(
      <div class="con">
        <h3 style={{color:'white',fontFamily: 'Poppins',paddingTop:'40px', paddingBottom:'5px', paddingLeft:'10px', paddingRight:'10px'}}>Success! Data has been updated!</h3>
        <p onClick={this.handleClick} style={{cursor:'pointer',color:'lightgray',  fontFamily: 'Poppins'}}>Update your details?</p>
      </div>
     )
  }
  
  return(

    
      <form onSubmit={this.handleSubmit}>

  <div class="container">
    <h2>{title}</h2>
    <p>{desc}</p>
    <hr />

    <input type="text" placeholder="Enter Name" name="name" id="name"  defaultValue={name} required/>
    <input type="number" placeholder="Enter Phone Number" name="ph"  defaultValue={ph} id="ph" required/>
    <input type="number" placeholder="Enter WhatsApp Number" name="wa"  defaultValue={wa} id="wa" required/>
    <input type="text" placeholder="Enter Class" name="class" id="class"  defaultValue={cls} required/>
    <input type="text" placeholder="Enter School" name="school" id="school"  defaultValue={schl} required/>
   
    
   
    <hr/>

    <button type="submit"  class="registerbtn">{button}</button>
  </div>

 
</form>
  )
}
}

 function Register(){
  const [user] = useAuthState(auth);
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

if(isLoading){
return(<LoadingComponent/>)
}
if(user){
 

return(

<Reg></Reg>
)

}

    
            
     


else{
  return(
    <div className='con'>
    <button type="button" onClick={signInWithGoogle} className="login-with-google-btn" >
      Sign in with Google
    </button>
    </div>
    )
}
  }


function signInWithGoogle(){
    const provider = new GoogleAuthProvider();
  signInWithPopup(auth , provider);
}



export default Register


