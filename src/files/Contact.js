import React from 'react'

function Contact() {
	return (
		<div className='row'>
		<div className='col-md-3'>
			<div className='panel'>
				<div className='panel-body'>
					<ul className='list-unstyled mailbox-nav'>
						<li className="active"><a href="http://www.rguktn.ac.in/contactus/"><i className="fa fa-angle-right"></i>Address
								&amp; Directions</a></li>
						<li><a href="http://www.rguktn.ac.in/contactus/communication-directory/"><i
									className="fa fa-angle-right"></i>Directory</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="col-md-9">
			<div className="panel panel-white">
				<div className="panel-heading">
					<h4 className="panel-title">Address and Directions</h4>
				</div>
				<div className="panel-body">
					<div className="row">
						<div className="col-md-6 text-md">

							<address>
								<strong>Chancellor </strong><br>
								Prof. K.C.Reddy<br>
								Email: <a href="mailto:chancellor@rgukt.in">chancellor@rgukt.in</a><br>
							</address>
							<br>
							<strong>Head Office Address:</strong><br>
							RGUKT - RK Valley Campus, Idupulapaya, Vempalli, Kadapa, Andhra Pradesh, Pin: 516330.<br><br>
							<strong>Camp Office Address:</strong><br>
							RGUKT - Nuzvid Campus, Nuzvid, Krishna District, Pin:521202.


						</div>
						<div className="col-md-6 text-md">
							<address>
								<strong>Director </strong><br>
								Prof. G.V.R.Srinivasa Rao<br>
								Email: <a href="mailto:director@rguktn.ac.in">director@rguktn.ac.in</a><br>
							</address>
							<br>
							<address>
								<strong>Address: </strong><br>
								The Director<br>
								Rajiv Gandhi University of Knowledge Technologies,<br>
								Mylavaram Road, Nuzvid,<br>
								Krishna District,<br>
								Andhra Pradesh - 521 202<br>
								<abbr title="Phone"></abbr>
							</address>
							<address>
								<strong>Phone:</strong><br>
								08656 235147
							</address>
							<address>
								<strong>Office Fax:</strong><br>
								+91 08656 235150
							</address>
							<address>
								<strong>Email:</strong><br>
								<a href="mailto:director@rguktn.ac.in">director@rguktn.ac.in</a>
							</address>
						</div>
					</div>	
		</div>
	)
}