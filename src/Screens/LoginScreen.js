import React, { useState } from 'react';
import "./LoginScreen.css";
import SingupScreen from "../Screens/SingupScreen";


const LoginScreen = () => {
   const[singIn,setSingIn] = useState(false);

 
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src="https://cdn.logojoy.com/wp-content/uploads/20231031154601/2014-netflix-logo-600x319.png" alt="" />
        <button onClick={() =>setSingIn(true)} className="loginScreen__button" >Sign In</button>
        <div className="loginScreen__gradient"></div>
        <div className="loginScreen__body">
          {singIn ? (
            <SingupScreen/>
          ): (
            <>
            <h1>Unlimited films,TV programmes and more.</h1>
            <h2>Watch anywher. Cancel at anytime</h2>
            <h3>Ready to watch? Enter ypur email to create or restart your membership.</h3>
            <div className="logginScreen__input">
             <form>
               <input type="email"
               placeholder='Email Adress' />
               <button onClick={()=>setSingIn(true)} className='loginScreen__getStarted'>GET STARTED</button>
             </form>
            </div>
           </>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default LoginScreen;
