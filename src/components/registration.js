import React from 'react'
import styles from "../forms.css"
import Select from 'react-select'
import { initializeApp } from "firebase/app";
import { getDatabase,ref,set,child,push } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



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
class Register extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    var data = [];
    data.push(event.target[0].value)
    data.push(event.target[1].value)
    data.push(event.target[2].value)
    data.push(event.target[3].value)
    data.push(event.target[4].value)
    data.push(event.target[5].value)
    var aRef=ref(database,'users/'+data[0].replace('@gmail.com',''))
    set(aRef,{data})

  
  }
render(){
  return(
      <form onSubmit={this.handleSubmit}>
  <div class="container">
    <h2>Register</h2>
    <p>Please fill in this form to register</p>
    <hr />

    <input type="email" placeholder="Enter Email" name="email" id="email" required/>
    <input type="text" placeholder="Enter Name" name="name" id="name" required/>
    <input type="number" placeholder="Enter Phone Number" name="ph" id="ph" required/>
    <input type="number" placeholder="Enter WhatsApp Number" name="wa" id="wa" required/>
    <input type="text" placeholder="Enter Class" name="class" id="class" required/>
    <input type="text" placeholder="Enter School" name="school" id="school" required/>
   
    
   
    <hr/>

    <button type="submit" class="registerbtn">Register</button>
  </div>

 
</form>
  )
}
}



export default Register


