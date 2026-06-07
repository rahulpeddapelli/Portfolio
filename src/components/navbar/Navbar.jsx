import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import "./Navbar.css";
import porfolioLogo from "../../assets/images/portfolio-logo.png"

const navLinks = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);



    useEffect(() => {
        if (mobileMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mobileMenu]);




    const handleNavClick = (id) => {
        setActiveSection(id);
        setMobileMenu(false);

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <>
            <header className="navbar-container">
                {/* Logo */}

                <div
                    className="logo"
                    onClick={() => handleNavClick("home")}
                >
                 <img src={porfolioLogo}></img>   
                </div>

                {/* Desktop Nav */}

                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <button
                            key={link}
                            onClick={() => handleNavClick(link)}
                            className={
                                activeSection === link
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            {link.charAt(0).toUpperCase() + link.slice(1)}
                        </button>
                    ))}
                </nav>

                {/* Resume */}

                <a
                    href="/resume.pdf"
                    target="_blank"
                    className="resume-btn"
                >
                    Download Resume
                </a>

                {/* Mobile Toggle */}

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenu(true)}
                >
                    <HiOutlineMenuAlt3 />
                </button>
            </header>

            {/* Mobile Menu */}

            <div
                className={`mobile-menu ${mobileMenu ? "show-mobile-menu" : ""
                    }`}
            >
                <button
                    className="close-btn"
                    onClick={() => setMobileMenu(false)}
                >
                    <HiX />
                </button>

                <div className="mobile-links">
                    {navLinks.map((link) => (
                        <button
                            key={link}
                            onClick={() => handleNavClick(link)}
                            className={
                                activeSection === link
                                    ? "mobile-link active-mobile"
                                    : "mobile-link"
                            }
                        >
                            {link.charAt(0).toUpperCase() + link.slice(1)}
                        </button>
                    ))}

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="mobile-resume-btn"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;