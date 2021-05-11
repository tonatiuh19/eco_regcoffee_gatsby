import React from "react";
import { FaHeart } from "react-icons/fa";

const SectionMadeWithLove = () => {
	return (
		<div className="bg-light py-5">
			<div className="container py-5">
				<div className="row text-center">
					<div className="col-sm">
						<h2 className="fw-bolder">De creadores para creadores</h2>
					</div>
				</div>
				<div className="row text-center">
					<div className="col-sm">
						<h2>
							Hecho con <FaHeart /> para México y Latinoamerica.
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionMadeWithLove;
