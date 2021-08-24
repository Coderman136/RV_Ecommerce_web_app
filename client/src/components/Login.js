import React, { useState} from 'react'
import { Container, Form, Button} from 'react-bootstrap'
import './Login.css'



import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import login from './login.jpg'


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
  <Container className = "align-items-center d-flex p-5 " style={{ padding: '20px',height: '100vh', width: '70vh', margin:'300px 200px 300px 450px'}}>
   <Form onSubmit={handleSubmit} className="w-100   p-5 rounded-3 " style={{borderRadius: '15px',background:`url(${login})`, padding: '20px'}}>
    <Form.Group>
     

     <PhoneInput style={{ padding: '20px'}}
      placeholder={ value ? (isValidPhoneNumber(value) ? undefined : "Enter Valid Phone Number") : 'Enter Phone Number' }
      defaultCountry='CA'
      className="form-control"
      value={value}
      onChange={setValue}
      error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
      />

    </Form.Group>
    
    <Button style={{ padding: '5px', borderRadius: '5px'}} type="submit" className="m-5 ">LOGIN</Button>
    
   </Form>
   
  </Container>
 )
}
