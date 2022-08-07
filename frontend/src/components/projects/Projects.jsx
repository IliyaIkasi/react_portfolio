import React, { useState } from "react";
import "./projects.scss";
import "./projects.responsive.scss";
import { FaGithub, FaLink } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Projects = ({ projects }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="projects-section">
			<div className="projects-header">
				<div className="projects-title">
					<h2>Portfolio Projects</h2>
					<hr />
				</div>
				<div className="projects-text">
					<hr />
					<h4>Projects i've worked on.</h4>
				</div>
			</div>
			<div className="projects-container">
				{projects.map((item) => (
					<div className="projects-content" key={item.id}>
						<div className="projects-image-card">
							<div className="card-circle">
								<div className="circle"></div>
								<div className="circle"></div>
								<div className="circle"></div>
							</div>
							<a
								href={item.link}
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
							>
								{isHovered ? (
									<img key={item.id} src={item.imageAlt} alt={item.name} />
								) : (
									<img key={item.id} src={item.image} alt={item.name} />
								)}
							</a>
						</div>
						<div className="projects-info-card">
							<div className="info-text">
								<div className="info-header">
									<h5>Main Project</h5>
								</div>
								<div className="info-name">
									<a href={item.link}>
										<h4>{item.name}</h4>
									</a>
								</div>
							</div>
							<div className="info-desc">
								<p>{item.desc}</p>
							</div>
							<div className="info-tech-link">
								<div className="info-usedTech">
									{item.usedTech.map((item, index) => (
										<p key={index}>{item}</p>
									))}
								</div>
								<div className="info-link">
									<IconContext.Provider value={{ size: "1.5rem" }}>
										<a href={item.github}>
											<FaGithub />
										</a>
										<a href={item.live}>
											<FaLink />
										</a>
									</IconContext.Provider>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
