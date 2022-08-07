import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import resume from "../../assets/resume.png";
import "./navbar.scss";
import "./navbar.responsive.scss";

const Navbar = () => {
	const [isNav, setIsNav] = useState(true);

	const showMenu = () => {
		var x = document.getElementById("navbarToggle");
		var y = document.getElementById("navbar");
		if (x.style.display === "none") {
			x.style.display = "block";
			y.style.background = "black";
			setIsNav(false);
		} else {
			x.style.display = "none";
			y.style.background = "#0a192f";
			setIsNav(true);
		}
	};

	useEffect(() => {
		var previous = window.pageYOffset;
		window.onscroll = function () {
			var current = window.pageYOffset;
			if (previous > current) {
				document.getElementById("navbar").style.top = "0";
				document.getElementById("navbar").style.background = "#0a192f";
				document.getElementById("navbarToggle").style.display = "none";
				document.getElementById("toggle-navbar").onscroll = setIsNav(true);
			} else {
				document.getElementById("navbar").style.top = "-80px";
				document.getElementById("navbarToggle").style.display = "none";
			}
			previous = current;
		};
	}, []);

	return (
		<div id="navbar" className="navBar">
			<div className="collapse-container" id="navbarToggle">
				<div className="collapse-content">
					<HashLink to="/#about" className="nav-link">
						01. <span>About</span>
					</HashLink>
					<HashLink to="/#experience" className="nav-link">
						02. <span>Experience</span>
					</HashLink>
					<HashLink to="/#projects" className="nav-link">
						03. <span>Projects</span>
					</HashLink>
					<HashLink to="/#contact" className="nav-link">
						04. <span>Contact</span>
					</HashLink>
					<HashLink to="/#resume" className="nav-link resume">
						<span>Resume</span>
					</HashLink>
				</div>
			</div>
			<div className="navbar-container">
				<div className="navbar-left">
					<Link to="/" className="navbar-brand">
						<span>Eka</span>
					</Link>
				</div>
				<div className="navbar-center">
					<IconContext.Provider value={{ size: "1.8rem" }}>
						{isNav ? (
							<FaBars className="icon" id="toggle-navbar" onClick={showMenu} />
						) : (
							<MdOutlineClose
								className="icon"
								id="toggle-navbar"
								onClick={showMenu}
							/>
						)}
					</IconContext.Provider>
				</div>
				<div className="navbar-right">
					<HashLink to="/#about" className="nav-link">
						<span>About</span>
					</HashLink>
					<HashLink to="/#experience" className="nav-link">
						<span>Experience</span>
					</HashLink>
					<HashLink to="/#projects" className="nav-link">
						<span>Projects</span>
					</HashLink>
					<HashLink to="/#contact" className="nav-link">
						<span>Contact</span>
					</HashLink>
					<HashLink
						to={resume}
						className="nav-link resume"
						download
						target="_blank"
					>
						<span>Resume</span>
					</HashLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
