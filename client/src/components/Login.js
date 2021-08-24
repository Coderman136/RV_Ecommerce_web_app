import React, { useState} from 'react'
import { Container, Form, Button} from 'react-bootstrap'
import './Login.css'



import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
// import login from '../login.jpg'


export default function Login({ onIdSubmit}) {


 const [value, setValue] = useState()

 const handleSubmit = (e) => {
  e.preventDefault()

  if(isValidPhoneNumber(value) ) {
   onIdSubmit(value)
  }else {
   setValue()
  }
   
 }
 

 return (
  <Container className = " d-flex align-items-center " style={{ border: '3px solid red',width: '50%', height: '100px', borderRadius: '10px', padding:'10px'}}>
   <Form onSubmit={handleSubmit} className="w-100   p-5 rounded-3 " >
    <Form.Group>
     

     <PhoneInput
      placeholder={ value ? (isValidPhoneNumber(value) ? undefined : "Enter Valid Phone Number") : 'Enter Phone Number' }
      defaultCountry='CA'
      className="form-control"
      value={value}
      onChange={setValue}
      error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
      />

    </Form.Group>
    
    <Button type="submit" className="m-5 ">LOGIN</Button>
    
   </Form>
   
  </Container>
 )
}
