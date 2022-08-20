import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import "./experience.scss";
import "./experience.responsive.scss";

const Experience = ({ experience }) => {
	const [jobs, setJobs] = useState(experience);

	const selectJob = (e) => {
		e.preventDefault();
		const value = e.target.innerHTML;
		const filterJob =
			value === "Apple"
				? experience
				: experience.filter(
						(item) => (
							(document.getElementById(item.org).style.backgroundColor =
								"#80cfd5"),
							item.org === value
						)
				  );
		setJobs(filterJob);
	};
	const job = jobs[0];

	return (
		<div className="experience-section">
			<div className="experience-title">
				<span>02. </span>
				<h2>Where I've Worked</h2>
				<hr />
			</div>
			<div className="experience-content">
				<div className="job-name">
					{experience.map((item) => (
						<div
							className="job-title"
							id={item.org}
							onClick={selectJob}
							key={item.id}
						>
							<span>{item.org}</span>
						</div>
					))}
				</div>
				<div className="job-desc">
					<div className="role">
						<h3>
							{job.role} <span>@</span> {job.org}
						</h3>
					</div>
					<div className="duration">
						<h6>
							{job.sDate} <span>--</span> {job.eDate}
						</h6>
					</div>
					<div key={job.id}>
						{job.desc.map((item, index) => (
							<div className="desc" key={index}>
								<FaCaretRight className="desc-icon" />
								<span>{item}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
