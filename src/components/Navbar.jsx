import logo from "../assets/Logo-removebg.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <a href="#"><img className="mx-2 w-10" src={logo} alt="logo" /></a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/saabitra-bera-47124b154/"><FaLinkedin /></a>
        <a href="https://github.com/Saabitra"><FaGithub /></a>
        <a href="https://x.com/SaabitraBera"><FaSquareXTwitter /></a>
        <a href="https://www.instagram.com/_saabiii.here_/"><FaInstagram /></a>
    </div>

  </nav>;
};

export default Navbar;