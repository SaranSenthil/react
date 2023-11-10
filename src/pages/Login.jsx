import React,{useState} from 'react';
import {Container,Form,Button, FormGroup, FormLabel} from 'react-bootstrap';
import "../Styles/Login.css";
import {Link,useNavigate} from 'react-router-dom' ;

const Login = () => {
  const [formData,setForm]= useState({
       email:" ",
    password:""
  })
  const handleChange=(e)=>{
    const{name,value}= e.target;
    setForm({...formData,[name]:value});
      };
    
      const handlesubmit=(e)=>{
        e.preventDefault();
    console.log(formData);
      }
  return (    
   <Container>
    <h1> Login </h1>
      <Form onSubmit={handlesubmit}>
    <Form.Group>
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name="email"  value={formData.email} onChange={handleChange} required />
    </Form.Group>
    <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name="password"  value={formData.password} onChange={handleChange} required />
    </Form.Group>
    <Button variant="primary" type="submit">Login</Button>
    </Form>
   </Container>
  );
};

export default Login;