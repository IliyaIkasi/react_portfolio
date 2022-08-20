import React from "react";
import { FaCaretRight } from "react-icons/fa";
import "./about.scss";
import "./about.responsive.scss";
import ikasi from "../../assets/ikasi.jpg";
import { useState } from "react";

const About = () => {
	const [isView, setIsView] = useState(true);

	const viewMore = () => {
		var x = document.getElementById("hide-x");
		var y = document.getElementById("hide-y");
		var image = document.getElementById("about-image");
		if (x.style.display === "none") {
			x.style.display = "block";
			y.style.display = "block";
			image.style.display = "none";
			setIsView(false);
		} else {
			x.style.display = "none";
			y.style.display = "none";
			image.style.display = "flex";
			setIsView(true);
		}
	};
	return (
		<div className="about-section">
			<div className="about-title">
				<span>01. </span>
				<h2>About Me</h2>
				<hr />
			</div>
			<div className="about-content">
				<div className="content-text">
					<p>
						Hello! My name is <b className="highlight">ILIYA IKASI EPHRAIM</b> a
						software developer with skills specific to Backend Web Development.
						I also do a bit of Frontend Web Development
					</p>
					<p className="hide" id="hide-x">
						I would like to work for you to accomplish your organization goals.
						I am work oriented i.e I love to work on comlex projects and great
						at solving them.
					</p>
					<p className="hide" id="hide-y">
						A little bit of what i've done or projects i've worked on. I have no
						on-hand/job experience but i've built myself by taking up projects
						that prove difficult.
					</p>

					<button onClick={viewMore} id="view-btn" className="view">
						{isView ? <span>View</span> : <span>Less</span>}
					</button>
					<div className="tech-list">
						<p>Technologies which I use most frequently are;</p>
						<ul>
							<li className="list-item">
								<FaCaretRight className="tech-icon" />
								Java
							</li>
							<li className="list-item">
								<FaCaretRight className="tech-icon" />
								Python
							</li>
						</ul>
						<ul>
							<li className="list-item">
								<FaCaretRight className="tech-icon" />
								React
							</li>
							<li className="list-item">
								<FaCaretRight className="tech-icon" />
								Node Js
							</li>
						</ul>
						<ul>
							<li className="list-item">
								<FaCaretRight className="tech-icon" />
								JavaScript
							</li>
							<li className="list-item">
								<FaCaretRight className="tech-icon" />
								TypeScript
							</li>
						</ul>
					</div>
				</div>
				<div id="about-image" className="about-image">
					<img src={ikasi} alt={ikasi} />
				</div>
			</div>
		</div>
	);
};

export default About;
