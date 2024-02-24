import React, { useState } from 'react';
import Lottie from 'lottie-react';
import './login_style.css';
import Image from "../../assets/img/user.png"
import Aos from 'aos';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const showPassword = () => {
    const password = document.getElementById("password");

    // ========== Checking type of password ===========
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  return (
    <html lang="en">
      <head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <link rel="stylesheet" type="text/css" href="login_style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css' />
        <link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css' />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous" />
      </head>

      <body className="bodys">

        <div className="login-pagess">
          <div className="forms">
            <form>
             
              <h1>Login Sebagai</h1>
<div className='imageuser'>
              <img src={Image} alt="hero-img"  />
</div>
              <button type="button" onClick={() => window.location.href='loginadmin'}>ADMIN</button>
              <button>GURU PIKET</button>
              <button>KEPALA SEKOLAH</button>
              <p className="message"></p>
            </form>

            <form className="login-form">
              <button type="button" onClick={() => window.location.href='signup.html'}>
                TATA USAHA
              </button>
            </form>
          </div>
        </div>

        <script>
          {`
            function show(){
              var password = document.getElementById("password");
          
              // ========== Checking type of password ===========
              if(password.type === "password"){
                password.type = "text";
              }
              else {
                password.type = "password";
              }
            };
          `}
        </script>
      </body>
    </html>
  );
};

export default Login;
