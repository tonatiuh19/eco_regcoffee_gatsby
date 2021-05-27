/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Logo from "../images/logo_full_grap.png";
import LogoGold from "../images/logo_full.png";
import "./main/styles/header.css";
import { signIn } from "../services/api.functions";

interface HeaderProps {
	siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => {
	const [navBarTheme, setNavBarTheme] = useState(
		"navbar fixed-top navbar-expand-lg navbar-light bg-light"
	);
	const [logo, setLogo] = useState(Logo);
	const [loggedIn, setLoggedIn] = useState(false);
	const [validMailSignIn, setvalidMailSignIn] = useState(false);
	const [stringValidationSignIn, setstringValidationSignIn] = useState("");
	const [validMailSignUp, setvalidMailSignUp] = useState(false);
	const [stringValidationSignUp, setstringValidationSignUp] = useState("");

	const [mailSignIn, setmailSignIn] = useState("");
	const [pwdSignIn, setpwdSignIn] = useState("");

	const [mailSignUp, setmailSignUp] = useState("");
	const [pwdSignUp, setpwdSignUp] = useState("");

	const listener = () => {
		if (-document.body.getBoundingClientRect().top > 400) {
			setLogo(LogoGold);
			setNavBarTheme("navbar fixed-top navbar-expand-lg navbar-dark bg-dark");
		} else {
			setLogo(Logo);
			setNavBarTheme("navbar fixed-top navbar-expand-lg navbar-light bg-light");
		}
	};

	/*useEffect(() => {
		window.addEventListener("scroll", listener);
		return () => {
			window.removeEventListener("scroll", listener);
		};
	});*/

	const signing = (type: number) => {
		if (type === 1) {
			if (mailSignIn === "" || pwdSignIn === "") {
				setstringValidationSignIn("Alguno de los campos estan vacios");
				setvalidMailSignIn(true);
				return;
			} else {
				setstringValidationSignIn("");
				setvalidMailSignIn(false);
			}

			if (!validateMail(mailSignIn)) {
				setstringValidationSignIn("Correo inválido");
				setvalidMailSignIn(true);
				return;
			} else {
				setstringValidationSignIn("");
				setvalidMailSignIn(false);
			}
		} else {
			if (mailSignUp === "" || pwdSignUp === "") {
				setstringValidationSignUp("Alguno de los campos estan vacios");
				setvalidMailSignUp(true);
				return;
			} else {
				setstringValidationSignUp("");
				setvalidMailSignUp(false);
			}

			if (!validateMail(mailSignUp)) {
				setstringValidationSignUp("Correo inválido");
				setvalidMailSignUp(true);
				return;
			} else {
				setstringValidationSignUp("");
				setvalidMailSignUp(false);
			}
		}
	};

	const session = () => {
		const loggedInUser = localStorage.getItem("08191993");
		if (loggedInUser) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	};

	const validateMail = (email: string) => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	return (
		<>
			<header style={{ position: "absolute" }}>
				<nav className={navBarTheme}>
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							<img src={logo} width="200" className="img-fluid" />
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
								{loggedIn ? (
									<>
										<li className="nav-item dropdown">
											<a
												className="nav-link dropdown-toggle"
												href="#"
												id="navbarDropdown"
												role="button"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												Dropdown
											</a>
											<ul
												className="dropdown-menu"
												aria-labelledby="navbarDropdown"
											>
												<li>
													<a className="dropdown-item" href="#">
														Action
													</a>
												</li>
												<li>
													<a className="dropdown-item" href="#">
														Another action
													</a>
												</li>
												<li>
													<hr className="dropdown-divider" />
												</li>
												<li>
													<a className="dropdown-item" href="#">
														Something else here
													</a>
												</li>
											</ul>
										</li>
										<li className="nav-item">
											<a className="btn btn-light" aria-current="page" href="#">
												Explora creadores
											</a>
										</li>
									</>
								) : (
									<>
										<li className="nav-item">
											<a className="btn btn-light" aria-current="page" href="#">
												Explora creadores
											</a>
										</li>
										<li className="nav-item">
											<button
												className="btn btn-outline-dark"
												data-bs-toggle="modal"
												data-bs-target="#iniciarSesion"
											>
												Entrar
											</button>
										</li>
										<li className="nav-item">
											<button
												className="btn btn-light"
												data-bs-toggle="modal"
												data-bs-target="#creaTuCuenta"
											>
												Registrate
											</button>
										</li>
									</>
								)}
							</ul>
						</div>
					</div>
				</nav>
			</header>

			<div
				className="modal fade"
				id="iniciarSesion"
				data-bs-keyboard="false"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<div className="container">
								<div className="row">
									<div className="col-sm">
										<form>
											<div className="mb-3">
												<input
													type="email"
													className="form-control"
													aria-describedby="emailHelp"
													placeholder="Ingresa tu correo electronico"
													onChange={e => setmailSignIn(e.target.value)}
												/>
											</div>
											<div className="mb-3">
												<input
													type="password"
													className="form-control"
													placeholder="Ingresa tu contraseña"
													onChange={e => setpwdSignIn(e.target.value)}
												/>
											</div>
										</form>
									</div>
								</div>
								{validMailSignIn ? (
									<div className="row text-center">
										<div id="emailHelp" className="form-text">
											<button className="btn btn-danger">
												{stringValidationSignIn}
											</button>
										</div>
									</div>
								) : null}

								<div className="row text-center">
									<div className="col-sm">
										<a href="#" className="btn btn-light btn-sm">
											¿Olvidaste tu contraseña?
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<div className="container">
								<div className="row text-center">
									<button
										type="button"
										className="btn btn-dark"
										onClick={() => signing(1)}
									>
										Entrar
									</button>
								</div>
								<div className="row text-center mt-1">
									<button
										type="button"
										data-bs-target="#creaTuCuenta"
										data-bs-toggle="modal"
										data-bs-dismiss="modal"
										className="btn btn-outline-dark"
									>
										Crea tu cuenta
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="modal fade"
				id="creaTuCuenta"
				aria-hidden="true"
				aria-labelledby="exampleModalToggleLabel2"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<div className="container">
								<div className="row">
									<div className="col-sm">
										<form>
											<div className="mb-3">
												<div className="input-group">
													<div className="input-group-text">
														regalameuncafe.com/
													</div>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="mb-3">
												<input
													type="email"
													className="form-control"
													aria-describedby="emailHelp"
													placeholder="Ingresa tu correo electronico"
													onChange={e => setmailSignUp(e.target.value)}
												/>
											</div>
											<div className="mb-3">
												<input
													type="password"
													className="form-control"
													placeholder="Ingresa una contraseña"
													onChange={e => setpwdSignUp(e.target.value)}
												/>
											</div>
										</form>
									</div>
								</div>
								{validMailSignUp ? (
									<div className="row text-center">
										<div id="emailHelp" className="form-text">
											<button className="btn btn-danger">
												{stringValidationSignUp}
											</button>
										</div>
									</div>
								) : null}
							</div>
						</div>
						<div className="modal-footer">
							<div className="container">
								<div className="row text-center">
									<button
										type="button"
										className="btn btn-dark"
										onClick={() => signing(2)}
									>
										Empezar
									</button>
								</div>
								<div className="row text-center mt-1">
									<button
										type="button"
										data-bs-target="#iniciarSesion"
										data-bs-toggle="modal"
										data-bs-dismiss="modal"
										className="btn btn-outline-dark"
									>
										¿Ya tienes cuenta? Inicia Sesión
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
