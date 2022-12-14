/**
 * @param background Image we import from img folder which is inside of src.
 * @param btn Image we import from img folder which is inside of src.
 * @param Firstpage Here is the page where we can get into after
 */


import React from "react"
import background from '/Projects/react/library/src/img/istockphoto-1336271758-170667a.jpg'
import '/Projects/react/library/src/Components/Firstpage/Firstpage.css'
import btn from '/Projects/react/library/src/img/menu-btn.png'

function Firstpage() {
	return (
		<>
			<div>
				<nav className="navbar">
					<div className="logo">IIIT</div>
					<ul className="nav-links">
						<li className="active"><a href="lib.html">Library</a></li>
						<li className="active"><a href="aboutus.html">About college</a></li>
						<li className="ctn2"><a href="https://rguktn.ac.in/contactus/">Contact Us</a></li>
					</ul>
				</nav>
				<img src={btn} alt="ntg" className="menu-btn"></img>
				<header style={{ backgroundImage: `url(${background})`}}>
					<div className="header-content">
						<h2>WELCOME TO MY COLLEGE PAGE</h2>
						<div className="line"></div>
						<h1>IIIT NUZVID(RGUKT)</h1>
					</div>
				</header>
			</div>
		</>
	)
}

export default Firstpage;