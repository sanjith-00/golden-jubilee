import React from 'react'
import styles from "../forms.css"

function Form(){
  return(
    <><div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div><form>
        <h3>Register</h3>

        <label for="username">Name</label>
        <input type="text" placeholder="Your Name" id="username" />

        <label for="schl">School Name</label>
        <input type="text" placeholder="School Name" id="schl" />
        <label for="ph">Phone Number</label>
        <input type="number" placeholder="Phone Number" id="ph" />

        <label for="wa">WhatsApp Number</label>
        <input type="number" placeholder="WhatsApp Number" id="wa" />

        <label for="class">Class</label>
        <input type="number" placeholder="Class" id="class" />


        <button>Register</button>

      </form></>
  )
}

function Google(){
  return(
  <a href="#" class="btn btn-social btn-google"><i class="fa fa-google"></i> Sign in with Google</a>
  )
}
function Register() {

return (
  <div style={{
    backgroundColor: 'black',
    width: '100vw',
    height: '100vh'
  }}>
    <Google></Google>
   
</div>
  )
}

export default Register


