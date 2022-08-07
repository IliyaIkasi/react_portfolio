import React from "react";
import { useState } from "react";
import "./contact.scss";
import "./contact.responsive.scss";

const Contact = () => {
	const [isHello, setIsHello] = useState(true);
	const [name, setName] = useState("User");

	const nextForm = (e) => {
		e.preventDefault();
		setIsHello(false);
	};

	const submitForm = (e) => {
		e.preventDefault();
		alert(`Dear ${name.toUpperCase()} our Database is Temporarily Unavailable`);
	};

	return (
		<div className="contact-section">
			<div className="contact-header">
				<div className="contact-title hr">
					<h2>Contact Us</h2>
					<hr />
				</div>
				<div className="contact-text hr">
					<hr />
					<h5>For further information </h5>
				</div>
			</div>
			{isHello ? (
				<div className="contact-container">
					<div className="contact-head">
						<h1>Get In Touch</h1>
					</div>
					<div className="contact-content">
						<div className="content-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
							asperiores, similique aperiam, a neque accusamus perspiciatis non
							consequatur, fuga cumque quas labore quis necessitatibus.
							Cupiditate earum iure hic officia rem!
						</div>
						<div className="content-btn">
							<button type="submit" onClick={nextForm}>
								Hello
							</button>
						</div>
					</div>
				</div>
			) : (
				<form className="form-container">
					<div className="form-group">
						<div className="form-text">
							<div className="form-textbox">
								<label>Name: </label>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Name"
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="form-textbox">
								<label>Email: </label>
								<input
									type="text"
									name="email"
									id="email"
									placeholder="email@email.com"
								/>
							</div>
						</div>
						<div className="form-msgbox">
							<label>Message: </label>
							<textarea
								placeholder="Text Message..."
								name="message"
								id="message"
							></textarea>
						</div>
					</div>
					<div className="form-btn">
						<button type="submit" onClick={submitForm}>
							Submit
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default Contact;
