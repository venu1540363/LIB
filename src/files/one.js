import React from 'react'
import background from '/Projects/react/library/src/img/istockphoto-1336271758-170667a.jpg'
import '/Projects/react/library/src/App.css'

function Login() {
	return (
		<header style={{ backgroundImage: `url(${background})` }}>
			<div className='header-content' >
				<h2>WELCOME TO MY COLLEGE PAGE</h2>
				<div className='line'></div>
				<h1>IIIT NUZVID(RGUKT)</h1>
				<a href='login.html' class='ctn'>LOGIN HERE</a>
				<a href='reg.html' class='reg'>Register Here</a>
			</div>
		</header>
	)
}

export default Login;