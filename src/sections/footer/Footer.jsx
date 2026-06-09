import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <p>
          © {new Date().getFullYear()}
          {" "}
          Rahul Peddapelli.
          All rights reserved.
        </p>

        <p>
          Built with ❤️ using React.
        </p>
        <p>
         Designed & Developed By Rahul Peddapelli.
        </p>

      </div>

    </footer>
  );
};

export default Footer;