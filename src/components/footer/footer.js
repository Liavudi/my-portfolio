import "./footer.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <h1 className="footer-title">
          Thank you very much for viewing my work!
        </h1>
        <p>"A little progress each day adds up to big results"</p>
        <p>Here is how you can contact me :)</p>
        <div className="icons-container">
          <div
            className="icon-btn"
            onClick={() =>
              (window.location.href = "https://github.com/liavudi")
            }
          >
            <FaGithubSquare />
          </div>
          <div
            className="icon-btn"
            onClick={() =>
              (window.location.href = "https://www.linkedin.com/in/liav-udi/")
            }
          >
            <FaLinkedin />
          </div>
          <div
            className="icon-btn"
            onClick={() =>
              (window.location.href =
                "mailto:Liavudi@gmail.com?Subject=Hello Liav")
            }
          >
            <MdEmail className="icon-email" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
