import React from "react";
import "./home.scss";
import "./home.responsive.scss";
import {
	FaEnvelope,
	FaFacebookF,
	FaGithub,
	FaLinkedinIn,
	FaPhone,
	FaTwitter,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import About from "../about/About";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import CAM from "../../assets/Crops&Machines.jpg";
import CAM_ALT from "../../assets/CAM.png";
import FB from "../../assets/Cloned-Facebook.png";
import SMS from "../../assets/Courses.png";
import bg_art from "../../assets/bg_art.png";

const Home = () => {
	const projects = [
		{
			id: 1,
			name: "Crops and Machines",
			image: CAM,
			imageAlt: CAM_ALT,
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. A et nemo" +
				"similique deleniti, accusantium necessitatibus odit. Accusamus" +
				"deserunt dolore vel, maiores mollitia id, enim repellat," +
				"exercitationem dolores cumque alias repellendus?",
			usedTech: ["JavaScript", "Java", "Sql", "TypeScript", "Python"],
			github: "https://github.com/IliyaIkasi",
			live: "https://www.linkedin.com/in/iliya-ikasi-a30a02217/",
		},
		{
			id: 2,
			name: "Cloned FaceBook",
			image: FB,
			imageAlt: CAM_ALT,
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. A et nemo" +
				"similique deleniti, accusantium necessitatibus odit. Accusamus" +
				"deserunt dolore vel, maiores mollitia id, enim repellat," +
				"exercitationem dolores cumque alias repellendus?",
			usedTech: ["TypeScript", "Python", "JavaScript", "Java", "Sql"],
			github: "https://github.com/IliyaIkasi",
			live: "https://www.linkedin.com/in/iliya-ikasi-a30a02217/",
		},
		{
			id: 3,
			name: "Student Management System",
			image: SMS,
			imageAlt: CAM_ALT,
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. A et nemo" +
				"similique deleniti, accusantium necessitatibus odit. Accusamus" +
				"deserunt dolore vel, maiores mollitia id, enim repellat," +
				"exercitationem dolores cumque alias repellendus?",
			usedTech: ["JavaScript", "Java", "Sql", "TypeScript", "Python"],
			github: "https://github.com/IliyaIkasi",
			live: "https://www.linkedin.com/in/iliya-ikasi-a30a02217/",
		},
		{
			id: 4,
			name: "Cloned FaceBook",
			image: FB,
			imageAlt: CAM_ALT,
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. A et nemo" +
				"similique deleniti, accusantium necessitatibus odit. Accusamus" +
				"deserunt dolore vel, maiores mollitia id, enim repellat," +
				"exercitationem dolores cumque alias repellendus?",
			usedTech: ["JavaScript", "Java", "Sql", "TypeScript", "Python"],
			github: "https://github.com/IliyaIkasi",
			live: "https://www.linkedin.com/in/iliya-ikasi-a30a02217/",
		},
		{
			id: 5,
			name: "Agba Akin Website Challenge",
			image: SMS,
			imageAlt: CAM_ALT,
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. A et nemo" +
				"similique deleniti, accusantium necessitatibus odit. Accusamus" +
				"deserunt dolore vel, maiores mollitia id, enim repellat," +
				"exercitationem dolores cumque alias repellendus?",
			usedTech: ["JavaScript", "Java", "Sql", "TypeScript", "Python"],
			github: "https://github.com/IliyaIkasi",
			live: "https://www.linkedin.com/in/iliya-ikasi-a30a02217/",
		},
		{
			id: 6,
			name: "Crops and Machines",
			image: CAM,
			imageAlt: CAM_ALT,
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. A et nemo" +
				"similique deleniti, accusantium necessitatibus odit. Accusamus" +
				"deserunt dolore vel, maiores mollitia id, enim repellat," +
				"exercitationem dolores cumque alias repellendus?",
			usedTech: ["JavaScript", "Java", "Sql", "TypeScript", "Python"],
			github: "https://github.com/IliyaIkasi",
			live: "https://www.linkedin.com/in/iliya-ikasi-a30a02217/",
		},
		{
			id: 7,
			name: "Cloned FaceBook",
			image: FB,
			imageAlt: CAM_ALT,
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. A et nemo" +
				"similique deleniti, accusantium necessitatibus odit. Accusamus" +
				"deserunt dolore vel, maiores mollitia id, enim repellat," +
				"exercitationem dolores cumque alias repellendus?",
			usedTech: ["JavaScript", "Java", "Sql", "TypeScript", "Python"],
			github: "https://github.com/IliyaIkasi",
			live: "https://www.linkedin.com/in/iliya-ikasi-a30a02217/",
		},
		{
			id: 8,
			name: "Student Management System",
			image: SMS,
			imageAlt: CAM_ALT,
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. A et nemo" +
				"similique deleniti, accusantium necessitatibus odit. Accusamus" +
				"deserunt dolore vel, maiores mollitia id, enim repellat," +
				"exercitationem dolores cumque alias repellendus?",
			usedTech: ["JavaScript", "Java", "Sql", "TypeScript", "Python"],
			github: "https://github.com/IliyaIkasi",
			live: "https://www.linkedin.com/in/iliya-ikasi-a30a02217/",
		},
		{
			id: 9,
			name: "Crops and Machines",
			image: CAM,
			imageAlt: CAM_ALT,
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. A et nemo" +
				"similique deleniti, accusantium necessitatibus odit. Accusamus" +
				"deserunt dolore vel, maiores mollitia id, enim repellat," +
				"exercitationem dolores cumque alias repellendus?",
			usedTech: ["JavaScript", "Java", "Sql", "TypeScript", "Python"],
			github: "https://github.com/IliyaIkasi",
			live: "https://www.linkedin.com/in/iliya-ikasi-a30a02217/",
		},
	];

	const experience = [
		{
			id: 1,
			org: "Apple",
			role: "Java Developer",
			sDate: "January 2020",
			eDate: "Present",
			desc: [
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. A et nemo" +
					"similique deleniti, accusantium necessitatibus odit. Accusamus" +
					"exercitationem dolores cumque alias repellendus?",
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. " +
					"Eius facilis sunt similique saepe, cumque, blanditiis dolorum ea velit " +
					"Nihil cum quia officia ad!",
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. " +
					"Quasi, perspiciatis dolore est tenetur, laudantium necessitatibus consequuntur" +
					"Numquam maxime perspiciatis tempora corporis quasi.",
			],
		},
		{
			id: 2,
			org: "Microsoft",
			role: "Python Developer",
			sDate: "February 2020",
			eDate: "Present",
			desc: [
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. " +
					"Eius facilis sunt similique saepe, cumque, blanditiis dolorum ea velit " +
					"Nihil cum quia officia ad!",
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
					"Odio facere dolor delectus iste sequi cumque facilis earum beatae, " +
					"explicabo illum a praesentium!",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
					"Consequuntur ipsa adipisci, saepe cum dignissimos magnam veritatis eligendi, " +
					"Veritatis eius soluta ab!",
			],
		},
		{
			id: 3,
			org: "Dell",
			role: "JavaScript Developer",
			sDate: "March 2020",
			eDate: "Present",
			desc: [
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. " +
					"Quasi, perspiciatis dolore est tenetur, laudantium necessitatibus consequuntur" +
					"Numquam maxime perspiciatis tempora corporis quasi.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
					"Consequuntur ipsa adipisci, saepe cum dignissimos magnam veritatis eligendi, " +
					"Veritatis eius soluta ab!",
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. A et nemo" +
					"similique deleniti, accusantium necessitatibus odit. Accusamus" +
					"exercitationem dolores cumque alias repellendus?",
			],
		},
		{
			id: 4,
			org: "Samsung",
			role: "TypeScript Developer",
			sDate: "April 2020",
			eDate: "Present",
			desc: [
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
					"Consequuntur ipsa adipisci, saepe cum dignissimos magnam veritatis eligendi, " +
					"Veritatis eius soluta ab!",
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
					"Odio facere dolor delectus iste sequi cumque facilis earum beatae, " +
					"explicabo illum a praesentium!",
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. " +
					"Quasi, perspiciatis dolore est tenetur, laudantium necessitatibus consequuntur" +
					"Numquam maxime perspiciatis tempora corporis quasi.",
			],
		},
		{
			id: 5,
			org: "HP",
			role: "SQL Developer",
			sDate: "May 2020",
			eDate: "Present",
			desc: [
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
					"Odio facere dolor delectus iste sequi cumque facilis earum beatae, " +
					"explicabo illum a praesentium!",
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. A et nemo" +
					"similique deleniti, accusantium necessitatibus odit. Accusamus" +
					"exercitationem dolores cumque alias repellendus?",
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. " +
					"Quasi, perspiciatis dolore est tenetur, laudantium necessitatibus consequuntur" +
					"Numquam maxime perspiciatis tempora corporis quasi.",
			],
		},
	];

	return (
		<div className="home-container">
			<div className="section-one">
				<IconContext.Provider value={{ size: "1.5rem" }}>
					<div className="social-icons">
						<a href="https://github.com/IliyaIkasi">
							<FaGithub className="icons" />
						</a>
					</div>
					<div className="social-icons">
						<a href="http://">
							<FaTwitter className="icons" />
						</a>
					</div>
					<div className="social-icons">
						<a href="mailto:iliyaikasi@gmail.com">
							<FaEnvelope className="icons" />
						</a>
					</div>
					<div className="social-icons">
						<a href="https://www.linkedin.com/in/iliya-ikasi-a30a02217/">
							<FaLinkedinIn className="icons" />
						</a>
					</div>
					<div className="social-icons">
						<a href="tel:+234-9122515984">
							<FaPhone className="icons" />
						</a>
					</div>
					<div className="social-icons">
						<a href="https://">
							<FaFacebookF className="icons" />
						</a>
					</div>
				</IconContext.Provider>
			</div>
			<div className="section-two">
				<div className="main-container">
					<div className="main-one">
						<div className="header-content">
							<div className="header-name">
								<h2>Hi, my name is</h2>
								<h2 className="name">Iliya Ikasi Ephraim</h2>
							</div>
							<div className="header-text">
								<h5>A junior web developer based in Kaduna, Nigeria. </h5>
							</div>
						</div>
						<div className="tech-section">
							<div className="tech-header-text">
								<h5>Technologies I Use: </h5>
							</div>
							<div className="tech-list">
								<div className="tech-wrapper">
									<div className="tech-item">JAVA</div>
									<div className="tech-item">HTML</div>
									<div className="tech-item">CSS</div>
									<div className="tech-item">JAVASCRIPT</div>
									<div className="tech-item">NODE JS</div>
									<div className="tech-item">TYPESCRIPT</div>
									<div className="tech-item">REACT</div>
									<div className="tech-item">SQL</div>
								</div>
							</div>
						</div>
					</div>
					<div className="main-two">
						<img src={bg_art} alt={bg_art} />
					</div>
				</div>
				<div id="about" className="about-main">
					<About />
				</div>
				<div id="experience" className="experience-main">
					<Experience experience={experience} />
				</div>
				<div id="projects" className="projects-main">
					<Projects projects={projects} />
				</div>
				<div id="contact" className="contact-main">
					<Contact />
				</div>
				<footer className="footer-main">
					<div className="header-text">
						<a href="https://github.com/IliyaIkasi">
							Designed & Built <span>by</span> Iliya Ikasi Ephraim
						</a>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Home;
