import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"
import { login, signup } from '../../Firebase'
import netflix_spinner from "../../assets/netflix_spinner.gif"


const Login = () => {

  const[signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")
  const [loading, setLoding] = useState(false)

  const user_auth = async (event) =>{
    event.preventDefault();
    setLoding(true);
    if(signState === "Sign In"){
      await login(email, password)
    }else{
      await signup(name, email, password)
    }
    setLoding(false);
  }

  return (
    loading ? <div className="loding-spinner">
      <img src={netflix_spinner} alt="" />
    </div> :
    <div className='login'>
      <img src={logo} alt=""  className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up"? <input type="text" placeholder='Your name' value={name} onChange={(e)=>setName(e.target.value)}/>:<></>}
          <input type="email" placeholder='Your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' value={password} onChange={(e)=>setPass(e.target.value)}/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
        </div>
        </form>
        <div className="form-switch">
            {signState === "Sign In"? <p>New to Netflix? <span onClick={()=>setSignState("Sign Up")}>Sign Up Now</span></p> :<p>Already have account? <span onClick={()=>setSignState("Sign In")}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login