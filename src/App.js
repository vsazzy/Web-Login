import React, { Component } from 'react';
import './App.css';


class App extends Component {

 open = () => {
     console.log("asd")
    //  alert("hey there");
     var modal=document.getElementById('mymodal');
     var btn = document.getElementById("mybtn");

     console.log(modal, btn);

     btn.addEventListener('click', function(){
         modal.style.display = 'flex';
     })
 }

 handleSubmit = (e) => {
     e.preventDefault();
 }
      
  render() {

    return (
        <div className="container">
    <div className='wrap'>
        <div className='fwrap'>
            <p id='signp'>Sign in to your account</p>
            <form onSubmit={this.handleSubmit} noValidate>
                <div className="email">
                <label htmlFor="email">Email or Username</label>
                <input
                 type="text" 
                 className="" 
                 placeholder="enter your email or username" 
                 noValidate
                 onChange={this.handleChange}></input>
                </div>
                <div className="pass">
                <label htmlFor="pass">Password</label>
                <input
                 type="text" 
                 className="" 
                 placeholder="enter your password" 
                 noValidate
                 onChange={this.handleChange}></input>
                </div>
                
                <div className='rem'>
                    <input type="checkbox" className='reme'></input>
                    Remember me
                </div>
                

                <div className="sign">
                <button id='mybtn' type="Sign" onClick={this.open}>Sign in</button>
                </div>
            
            </form>
            <div id="mymodal" className="bg-modal">
		<div className="modal-content">

			<div className="head">
			<div className="close">+
			</div>
		
			<h1 id='one'>You are about to change</h1>
			<h1 id='two'>your password</h1>
			</div>

			<div className="paradiv">
			<p id='para1'>Please type your current password below to</p> 
			<p id='para2'>confirm these changes</p>
			</div>
			
			<div className="outerinp">
		<div className="inp">
			<input type="text" placeholder="Type your current password"></input>
			
		</div>
		<a href="/" title="not">Can't remember your password?</a>
		</div>

		<div className="btns">
			<a id='pri' href="/" title="j">Save my Changes</a>
			<a id='sec' href="/" title="u">Save my Changes</a>
		</div>
	</div>
        </div>

    </div>

    
    </div>
    </div>
        
    );
  }
}

export default App;

