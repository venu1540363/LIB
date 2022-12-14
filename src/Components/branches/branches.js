/**
 *@param Branches Here is the page where we can find no.of branches in this college.
 * We import image from img folder in src.
 */


import React from "react";
import '/Projects/react/library/src/Components/branches/branches.css'

function Branches() {
	return (
		<>
			<div className="buttons">
				<table className="table">
					<tr>
						<th>
							<button className="button_ece">ECE</button>
						</th>
						<th>
							<button className="button_cse">CSE</button>
						</th>
						<th>
							<button className="button_civil">CIVIL</button>
						</th>
					</tr>
					<tr>
						<td>
							<button className="button_mech">MECH</button>
						</td>
						<td>
							<button className="button_mme">MME</button>
						</td>
						<td>
							<button className="button_puc">PUC</button>
						</td>
					</tr>
				</table>
			</div>
			<div className="card">
				Magic Card
			</div>
			<a href="https://mythrillfiction.com/" target="_blank" rel="noopener noreferrer">Mythrill</a>
		</>
	)
}

export default Branches