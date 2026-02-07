import logo from "/assets/images/Black White Minimalist Logo.png";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center px-4 lg:px-16">
        <a href="/ aria-label='Home">
          <img
            width={100}
            className="  rounded-full"
            src={logo}
            alt="Logo"
          />
        </a>
      </div>
      <div className="px-4 lg:px-24 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/bankole-ayorinde-joseph-802aa6240"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Joseph-Peniel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub">
          <FaGithub />
        </a>
        <a
          href="*"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook">
          <FaFacebook />
        </a>
        <a
          href="*"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
