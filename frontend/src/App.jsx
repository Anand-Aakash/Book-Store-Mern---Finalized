import React from 'react';
import { Routes, Route,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import * as Components from './components/login/Components';
import './components/App.css'
import axios from 'axios';
const App = () => {
    const navigate=useNavigate()
    const loginnav=useNavigate()
  const [signIn, toggle] = React.useState(true);
  const[name,setname]=useState('')
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[role,setrole]=useState('')

  return (
    <div style={{color:'#f95959'}}>
    <Routes>
      <Route path='/' element={
        <div style={{justifyContent:'center',marginTop:'200px',fontSize:'18px'}}>
        <center>
         <Components.Container>
         {/* <Components.SignUpContainer signinin={signIn} > */}
         <Components.SignUpContainer signinIn={signIn}>
           <Components.Form>
                 <Components.Title>Create Account</Components.Title>
                 <Components.Input type='text' placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)} />
                 <Components.Input type='email' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} />
                 <Components.Input type='password' placeholder='Password'  value={password} onChange={(e)=>setpassword(e.target.value)} />
                 <Components.Input type='text' placeholder='Role' value={role} onChange={(e)=>setrole(e.target.value)} />


                 <Components.Button onClick={async()=>{
                    if(name==''||email==''||password==''){
                        alert('fill the details')
                    }
                    else{
                                
                      const response=await axios.post('http://localhost:8001/books/signup',{name:name,email:email,password:password,role:role})
                      const {message}=response.data
                      console.log('dfjidfjdifdfiojk')
                      if(message=='s'){
                    
                        navigate('/home')
                      }
                    }
                 }} id='b1'> Sign Up</Components.Button>

                 </Components.Form>
         
         </Components.SignUpContainer>
         

         <Components.SignInContainer signinIn={signIn}>
           <Components.Form>
                  <Components.Title>Sign in</Components.Title>
              
                  <Components.Input type='email' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} />
                  <Components.Input type='password' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} />
                  {/* <Components.Button onClick={navigate('/home')} >Sign In</Components.Button> */}
                  <Components.Button  onClick={async(e)=>{
                    e.preventDefault()
                      const response=await axios.post('http://localhost:8001/books/login',{email:email,password:password})
                      const {message}=response.data
                      // const {data}=response.data
                      localStorage.setItem('email',response.data.data.email)
                      localStorage.setItem('role',response.data.data.role)
                      if(message=='f'){
                        alert('Invalid Username Or Password')
                      }
                      else{
                        navigate('/home')
                      }
                 }} id='b2'>Sign In</Components.Button>
                 </Components.Form>
          
         </Components.SignInContainer>

         <Components.OverlayContainer signinIn={signIn}>
             <Components.Overlay signinIn={signIn}>

             <Components.LeftOverlayPanel signinIn={signIn}>
                 <Components.Title>Welcome Back!</Components.Title>
                 <Components.Paragraph>
                     To keep connected with us please login with your personal info
                 </Components.Paragraph>
                 <Components.GhostButton onClick={() => toggle(true)} >
                     Sign In
                 </Components.GhostButton>
                 </Components.LeftOverlayPanel>

                 <Components.RightOverlayPanel signinIn={signIn}>
                   <Components.Title>Hello, Friend!</Components.Title>
                   <Components.Paragraph>
                       Enter Your personal details and start journey with us
                   </Components.Paragraph>
                       <Components.GhostButton onClick={() => toggle(false)} onSubmit={() => history.push('/home')}>
                       {/* <Components.GhostButton onClick={() => history.push('/home')}> */}
                           Sign Up
                       </Components.GhostButton> 
                 </Components.RightOverlayPanel>

             </Components.Overlay>
         </Components.OverlayContainer>

     </Components.Container>
     </center>
     </div>
      } />
      <Route path='/home' element={<Home>
        <Components.Button>Sign Out</Components.Button>
      </Home>} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
    </div>
  );
};
export default App;