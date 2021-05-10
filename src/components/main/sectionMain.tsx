import React from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import CreatorImg from "../../images/creator.png";
import "./styles/main.css";

const SectionMain = () => {
	return (
		<div className="py-5">
			<div className="container pt-2">
				<div className="row ">
					<div className="col-sm-7">
						<div className="container">
							<div className="row">
								<div className="col-sm">
									<h3>A tus fans les va encantar</h3>
								</div>
							</div>
							<div className="row">
								<div className="col-sm">
									<h1 className="fw-bolder">
										Forma sencilla y significativa de financiar tu trabajo
										creativo
									</h1>
								</div>
							</div>
							<div className="row pt-4">
								<div className="col-sm">
									<h5>
										Puedes aceptar apoyo de tus membresías, webinars, zooms,
										recibir un cafe, etc. Poder construir una relación directa
										con tus fans.
									</h5>
								</div>
							</div>
							<div className="row">
								<div className="col-sm">
									<div className="input-group">
										<div className="input-group-text">regalameuncafe.com/</div>
										<input type="text" className="form-control" />
										<button className="btn btn-outline-secondary" type="button">
											Empezar <BiRightArrowCircle></BiRightArrowCircle>
										</button>
									</div>
									<p className="fs-6 fw-light mt-1">
										Es gratis y toma menos de un minuto
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-5">
						<img src={CreatorImg} className="img-fluid vert-move" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionMain;
