import React from 'react'
import { Button, Form } from 'react-bootstrap'
import CustomInput from '../../component/layout/CustomInput'
import { Link } from 'react-router-dom'

const inputs = [
  {
    name:'fName',
    label:'First Name',
    placeholder:"First name",
    type:"text",
    required:true
    
  },
  {
    name:'lName',
    label:'Last Name',
    placeholder:"Last name",
    type:"text",
    required:true
    
  },
  {
    name:'phone',
    label:'Phone',
    placeholder:"Phone",
    type:"text",
    required:true
    
  },
  {
    name:'email',
    label:'Email',
    placeholder:"Email address",
    type:"email",
    required:true
    
  },
  {
    name:'createPassword',
    label:'Create Password',
    placeholder:"*********",
    type:"password",
    required:true,
    minLength:6
    
  },
  {
    name:'password',
    label:'Re-enter Password',
    placeholder:"*********",
    type:"password",
    required:true,
    minLength:6
    
  }
]

const AdminSignup = () => {
  return (
    <div className=' wrapper'>
   
  <div className='p-3 border rounded shadow-lg bg-light  admin-form'>
  <Form >
    {
      inputs.map((input)=>{
        return <CustomInput key={input.name} label = {input.label} {...input}/>
      })
    }
    

    
    <div className='d-flex '>
    <Button className='flex-grow-1' variant="primary" type="submit">
      Create an Account
    </Button>
    </div>
    <div className='text-center m-3'>
    Already have an Account? <Link to='/' className='text-decoration-none'>login here</Link>
    </div>
    
    
    
  </Form>
  </div>
  
  </div>
  )
}

export default AdminSignup