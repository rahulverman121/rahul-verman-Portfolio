import './Menu.css';
import {FaHome, FaList,FaIdCard,FaGithub, FaUserTie, FaLinkedin, FaInstagram } from "react-icons/fa";
import {AiFillWechat} from "react-icons/ai";
import {SiGmail } from "react-icons/si";

function Menu() {
    return (
        <section id="menu">
            <div class="logo">RV</div>
            <section class="menuitems">
            <div class="menuitem"><FaHome size="1.1rem" class="menuicon"/>Home</div>
            <div class="menuitem"><FaIdCard size="1.1rem" class="menuicon"/>About</div>
            <div class="menuitem"><FaList size="1.1rem" class="menuicon"/>Services</div>
            <div class="menuitem"><FaUserTie size="1.1rem" class="menuicon"/>Portfolio</div>
            <div class="menuitem"><AiFillWechat size="1.1rem" class="menuicon"/>Contact</div>
            </section>
            <section class="contacts">
                <a href="https://github.com/rahulverman121/" target="_blank" rel="noopener noreferrer">
                <FaGithub size="1.2rem" class="icons"/></a>&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/rahul-verman-677839150/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size="1.2rem" class="icons"/></a>&nbsp;&nbsp;
                <a href="https://www.instagram.com/rahul.verman.121/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size="1.2rem" class="icons" /></a>&nbsp;&nbsp;
                <a href="mailto:rahulverman44@gmail.com" target="_blank" rel="noopener noreferrer">
                <SiGmail size="1.2rem" class="icons" /></a>&nbsp;&nbsp;
            </section>
        </section>
    );
}
export default Menu;
