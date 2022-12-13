import React from "react";
import '/Projects/react/library/src/Brn.css'

function Brn() {
	return (
		<>
			<div class="buttons">
				<table class="table">
					<tr>
						<th>
							<button class="button_ece">ECE</button>
						</th>
						<th>
							<button class="button_cse">CSE</button>
						</th>
						<th>
							<button class="button_civil">CIVIL</button>
						</th>
					</tr>
					<tr>
						<td>
							<button class="button_mech">MECH</button>
						</td>
						<td>
							<button class="button_mme">MME</button>
						</td>
						<td>
							<button class="button_puc">PUC</button>
						</td>
					</tr>
				</table>
			</div>
		</>
	)
}

export default Brn