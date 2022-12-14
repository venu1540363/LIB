/**
 * @param background Image imported from img folder to use as background image.
 * @param Login This is the firstpage we can observe in UI.
 */

import React from 'react'
import background from '/Projects/react/library/src/img/istockphoto-1336271758-170667a.jpg'
import '/Projects/react/library/src/Components/Main/Main.css'
import { Link } from 'react-router-dom'

function Login() {
	return (
		<header style={{ backgroundImage: `url(${background})` }}>
			<div className='header-content' >
				<h2>WELCOME TO MY COLLEGE PAGE</h2>
				<div className='line'></div>
				<h1>IIIT NUZVID(RGUKT)</h1>
				<div>
				<Link to="/" class='ctn'>LOGIN HERE</Link>
				<Link to="/Registation" class='reg'>Register Here</Link>
				</div>
			</div>
		</header>
	)
}

export default Login;