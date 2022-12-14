import React from "react";
import '/Projects/react/library/src/Components/Registation/Registation.css'

function Registation() {
	return(
			<>
			<form action="/login.html">
				<div className="container">
					<h1>Register</h1>
					<p>Please fill in this form to create an account.</p>
					<label for="User"><b>User id</b></label>
			<input type="text" placeholder="Enter User id" required />
			<label for="Roll Number"><b>Roll Number</b></label>
			<input type="text" placeholder="Enter Roll No." required/>
			
			<label for="Class"><b>Class</b></label>
			<input type="text" placeholder="Class" required/>

			<label for="psw"><b>Password</b></label>
			<input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
	
			<label for="psw-repeat"><b>Repeat Password</b></label>
			<input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
			<p>By creating an account you agree to our <a href="https://www.climanosco.org/rules/terms-and-conditions-of-registration-and-membership/">Terms & Privacy</a>.</p>
			<a href="login.html"><button type="submit" class="registerbtn">Register</button></a>
					
		<div class="container signin">
			<p>Already have an account? <a href="login.html">Sign in</a>.</p>
				</div>
				</div>
			</form>
			</>
	)
}

export default Registation