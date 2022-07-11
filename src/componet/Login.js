import { Link,useNavigate } from 'react-router-dom';
import React from 'react'
import "./style.css";
function Login() {
	const navigate = useNavigate();
	const submitfrom= (e)=>{
		e.preventDefault();
		navigate('/Roud');
	}
  return (
    <>
        <div className="container1">
	<div className="screen">
		<div className="screen__content">
			<form className="login"  onSubmit={submitfrom}>
				<div className="login__field">
					<input type="email" className="login__input" placeholder=" Email" required   
                    />
                    
				</div>
                
                <div className="login__field">
					<input type="password" className="login__input" placeholder="Password" required 
                        
                    />
                    
				</div>
				<button className="button login__submit" type='submit'>
					<span className="button__text">Login In Now</span>
				</button>				
			</form>
			<div className="social-login">
				<Link to="/sigin">Sign in Now</Link> 
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>
	</div>
</div>
    </>
  )
}

export default Login