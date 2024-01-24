import React from 'react'
import { Button, Form } from 'react-bootstrap'
import CustomInput from '../../component/layout/CustomInput'
import { Link } from 'react-router-dom'

const inputs = [
  {
    name:'email',
    label:'Email',
    placeholder:"Email address",
    type:"email",
    required:true
    
  },
  {
    name:'password',
    label:'Password',
    placeholder:"*********",
    type:"password",
    required:true,
    minLength:6
    
  }
]

const Login = () => {
  return (
    <div className=' wrapper'>
      <div className='img'>
        <img className='w-100 m-5 ' src='https://images.pexels.com/photos/6289064/pexels-photo-6289064.jpeg?auto=compress&cs=tinysrgb&w=800'/>
      </div>
    <div className='p-3 border rounded shadow-lg bg-light  admin-form'>
    <Form >
      {
        inputs.map((input)=>{
          return <CustomInput key={input.name} label = {input.label} {...input}/>
        })
      }
      

      
      <div className='d-flex '>
      <Button className='flex-grow-1' variant="primary" type="submit">
        Login
      </Button>
      </div>
      <div className='text-center m-3'>
      <Link  className='text-decoration-none ' >Forgetten password?</Link>
      </div>
      <hr/>
      <div className='text-center'>
        <Link to='/signup'>
      <Button variant="success">Create an account</Button>
      </Link>

      </div>
      
    </Form>
    </div>
    </div>
  )
}

export default Login