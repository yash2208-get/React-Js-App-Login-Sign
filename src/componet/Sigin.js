import { Link,useNavigate  } from 'react-router-dom';
import React, { useState } from 'react';
// import Hhhh from './Hhhh';
import "./style.css";
function Sigin() {
    // let history=useHistory();
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [Pass_conf,setPass_conf]=useState("");
    const [allEntry,setAllentry]=useState([]);
    const submitfrom= async (e)=>{
        e.preventDefault();
        if(email  && pass && Pass_conf){
            if(pass.length >= 4) {
                if(pass==Pass_conf){
                        const newEntry={
                            id:new Date().getTime().toString(),
                            email,
                            pass,
                            Pass_conf
                        }
                        setAllentry([...allEntry,newEntry]);
                        setEmail("");
                        setPass("");
                        setPass_conf("");
                       const res= fetch('https://sigin-62d24-default-rtdb.firebaseio.com/siginPage.json',{
                            method:'POST',
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body: JSON.stringify({
                                email,
                                pass
                            }),
                        });
                        if(res){
                            alert("👏👏 Successfully Sign  Up 👏👏");
                            navigate('/Roud');                
                        }
                        else{
                            alert( "😌 Data Not Insert 😌");
                        }
                }
                else{
                    alert('😌 Password Can be not Same 😌');    
                }
            }
            else{
                alert('😌 Password must be more than 4 Characters 😌');
            }

        }
        else{
            alert('😌 Plase fill the Data 😌');
        }
    }
  return (
    
    <>
<div className="container1">
	<div className="screen">
		<div className="screen__content">
			<form className="login" action='' onSubmit={submitfrom}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="email" className="login__input" placeholder=" Email" required 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
				</div>

                <div className="login__field">
					
					<input type="password" className="login__input" placeholder="Password" required 
                        value={pass}
                        onChange={(e)=>setPass(e.target.value)}
                    /><br></br>
                    <span></span>
				</div>
				<div className="login__field">
		
					<input type="password" className="login__input" placeholder="Password Confirm" required 
                        value={Pass_conf}
                        onChange={(e)=>setPass_conf(e.target.value)}
                    /><br></br>
                    <span></span>
				</div>
				<button className="button login__submit" type='submit'>
					<span className="button__text">Sign In Now</span>
				</button>				
			</form>
			<div className="social-login">
				<Link to="aa">Login in Now</Link> 
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
export default Sigin