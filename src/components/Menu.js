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
                <a href="https://github.com/rahulverman121/">
                <FaGithub size="1.2rem" class="icons"/></a>&nbsp;&nbsp;
                <FaLinkedin size="1.2rem" class="icons"/>&nbsp;&nbsp;
                <FaInstagram size="1.2rem" class="icons" />&nbsp;&nbsp;
                <SiGmail size="1.2rem" class="icons" />&nbsp;&nbsp;
            </section>
        </section>
    );
}
export default Menu;
