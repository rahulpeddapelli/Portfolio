import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const validateForm = () => {
        const { name, email, mobile, message } = formData;

        if (!name.trim()) {
            toast.error("Please enter your name");
            return false;
        }

        if (!email.trim()) {
            toast.error("Please enter email");
            return false;
        }

        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            toast.error("Enter valid email");
            return false;
        }

        if (!mobile.trim()) {
            toast.error("Please enter mobile number");
            return false;
        }

        if (
            !/^[6-9]\d{9}$/.test(mobile)
        ) {
            toast.error("Enter valid 10 digits mobile number");
            return false;
        }

        if (!message.trim()) {
            toast.error("Please enter message");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            setLoading(true);

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success(
                "Message sent successfully 🚀"
            );

            setFormData({
                name: "",
                email: "",
                mobile: "",
                message: "",
            });
        } catch (error) {
            toast.error(
                "Failed to send message"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="contact"
        >
            <div className="container">

                <span className="section-tag">
                    CONTACT
                </span>

                <h2 className="section-title">
                    Let's Work Together
                </h2>

                <div className="contact-container">

                    <div className="contact-info">

                        <p>
                            Have a project in mind or just want
                            to connect? I'd love to hear from
                            you.
                        </p>

                        <div className="contact-item">
                            <FaEnvelope />

                            <a
                                href="mailto:rahulpeddapelli2091@gmail.com"
                                className="contact-link"
                            >
                                rahulpeddapelli2091@gmail.com
                            </a>
                        </div>

                        <div className="contact-item">
                            <FaPhoneAlt />

                            <a
                                href="tel:+919561814696"
                                className="contact-link"
                            >
                                +91 95618 14696
                            </a>
                        </div>
                        <div className="contact-item">
                            <FaMapMarkerAlt />
                            <span>
                                India
                            </span>
                        </div>

                        <div className="contact-socials">

                            <a href="https://github.com/rahulpeddapelli" target="_blank">
                                <FaGithub />
                            </a>

                            <a href="https://www.linkedin.com/in/rahul-peddapelli-004929358/" target="_blank">
                                <FaLinkedin />
                            </a>

                        </div>

                    </div>

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            placeholder="Your Name *"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            placeholder="Your Email *"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <input
                            type="tel"
                            placeholder="Mobile Number *"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                        />

                        <textarea
                            rows="6"
                            placeholder="Your Message *"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />

                        <button
                            type="submit"
                            disabled={loading}
                        >
                            {loading
                                ? "Sending..."
                                : "Send Message"}
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
};

export default Contact;