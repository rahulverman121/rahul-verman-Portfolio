import './About.css';
import {FaAngular, FaCss3Alt, FaHtml5, FaReact, FaPython} from 'react-icons/fa';
import { SiCloudera, SiCplusplus, SiEclipseide, SiGithub, SiGnubash, SiJava, SiJavascript, SiJquery, SiJson, SiJupyter, SiKalilinux, SiMongodb, SiMysql, SiNetlify, SiPhp, SiTypescript, SiUbuntu, SiVisualstudiocode, SiWindows, SiXampp } from 'react-icons/si';
import {FcLinux} from 'react-icons/fc';
import resume from '../assets/RahulVerman-Resume.pdf';

function About() {
    return(
        <section id="about">
            <div class="title">About Me</div>
            <hr width="200rem" align="left" color="#d4aa8c"/>
            <div class="abouttitle">I'm Rahul Verman &amp; <span class="colo">Web Developer</span></div>
            <div class="aboutblog">Web Developer with attitude of continuous learning and collaborate in rapidly changing environments.
            I'm quick learner and excellent problem solver who spent most of time shaping and improving web 
            development and programming skills. I also have excellent experience of leading the team and working with them. AS team leader, I won first prize in UI/UX Development challenge 
            and top performer in HackForEt Hackathon organized by CodeChef | CMRTC.
            </div>
            
            <section className='detailsec'>
                <div className='abt'>
                <div className='skilltitle '>Personal Details</div>
            <div class="abtdetails">
                <div class="details">
                 <span class="abtdetail">Birthday : </span><span class="abtdata"> 20 May 2001</span>
                 <hr class="detailsrule"/>
                 </div>
                 <div class="details">
                 <span class="abtdetail">Nationality : </span><span class="abtdata"> Indian</span>
                 <hr class="detailsrule"/>
                 </div>
                 <div class="details">
                 <span class="abtdetail">Degree : </span><span class="abtdata"> B.E (CSE)</span>
                 <hr class="detailsrule"/>
                 </div>
                 <div class="details">
                 <span class="abtdetail">City : </span><span class="abtdata"> Bangalore, India</span>
                 <hr class="detailsrule"/>
                 </div>
                 <div class="details">
                 <span class="abtdetail">Email : </span><span class="abtdata">rahulverman44@gmail.com</span>
                 <hr class="detailsrule"/>
                 </div>
                 <div class="details">
                 <span class="abtdetail">Phone : </span><span class="abtdata"> +91 8904323240</span>
                 <hr class="detailsrule"/>
                 </div>
                 <div class="details">
                 <span class="abtdetail">Maritial Status : </span><span class="abtdata">Single</span>
                 <hr class="detailsrule"/>
                 </div> 
                               
            </div>
            <div style={{display:'flex',flexWrap:'wrap'}}>
            <a href={resume} target="_blank" rel="noopener noreferrer" class="btn" style={{marginRight:'1rem',marginTop:'2rem'}}>Download Resume</a>
            <a href="./contact" target="_blank" rel="noopener noreferrer" class="btn fill" style={{marginRight:'1rem',marginTop:'2rem'}}>Hire Me</a>
            </div>
            <div className='skilltitle soft'>Soft Skills</div>
            <div className='softskills'>
            <span className='softskill'>Problem Solving</span>
                <span className='softskill'>Quick Learner</span>
                <span className='softskill'>Detail Oriented</span>
                <span className='softskill'>Leadership</span>
                <span className='softskill'>Critical Thinking</span>
                <span className='softskill'>Communication</span>
                <span className='softskill'>Team Work</span>
                <span className='softskill'>Work Ethics</span>
                <span className='softskill'>Creativity</span>
                <span className='softskill'>Accountability</span>
                <span className='softskill'>Open Minded</span>
                <span className='softskill'>Time Management</span>
            </div>
            </div>
            <div class="skills">
                <div className='skilltitle '>Skills</div>
                <h3>Front end</h3>
                <FaReact  title="React.js" color="#5ed3f3" class="skillicon"/>
                <SiJavascript title="JavaScript" color="#efd81d" class="skillicon"/>
                <FaHtml5 title="HTML5" color="#dd4b25" class="skillicon"/>
                <FaCss3Alt title="CSS" color="#2862E9" class="skillicon"/>
                <SiJquery title="jQuery" color="#0865a6" class="skillicon"/>
                <FaAngular title="Angular" color="#bd002e" class="skillicon"/>
                <SiTypescript title="TypeScript" color="#2f74c0" class="skillicon"/>
                <br />
                <h3>Programming Languages</h3>
                <FaPython title="Python" color="#f7cc40" class="skillicon"/>
                <SiCplusplus title="C++" color="#00427e" class="skillicon"/>
                <SiJava title="Java" color="#4f7d9b" class="skillicon"/>
                <SiCloudera title="C Programming" color="#00427e" class="skillicon"/>
                <SiGnubash title="Shell Scripting" color="#272f35" class="skillicon"/>
                <br />
                <h3>Database Management</h3>
                <SiMysql title="MySQL" color="#4f7d9b" class="skillicon"/>
                <SiMongodb title="MongoDB" color="#409042" class="skillicon"/>
                <br/>
                <h3>Backend Technologies</h3>
                <SiPhp title="php" color="#697ab1" class="skillicon"/>
                <br/>
                <h3>Mobile Development</h3>
                <FaReact  title="React Native" color="#5ed3f3" class="skillicon"/>
                <br/>
                <h3>Operating Systems</h3>
                <SiWindows title="Windows" color="#00a8e8" class="skillicon"/>
                <SiUbuntu title="Ubuntu" color="#e24e0e" class="skillicon"/>
                <FcLinux title="Linux" class="skillicon"/>
                <SiKalilinux title="Kali Linux" color="#000" class="skillicon"/>
                <br />
                <h3>Others</h3>
                <SiJson title="JSON" color="#505050" class="skillicon"/>
                <SiNetlify title="MongoDB" color="#48aabf" class="skillicon"/>
                <SiGithub title="Github" color="#fff" class="skillicon"/>
                <SiVisualstudiocode title="Visual Studio Code" color="#3aa3e9" class="skillicon"/>
                <SiJupyter title="Jupyter" color="#f37726" class="skillicon"/>
                <SiEclipseide title="Eclipse" color="#2b2152" class="skillicon"/> 
                <SiXampp title="Xampp" color="#e15f0f" class="skillicon"/>
            </div>
            </section>
            <div className='skilltitle ' >Qualification</div>
            <section className='qualification'>

                <div className='quali'>
                <div className="institute">MVJ College of Engineering, Bangalore</div>
                    <div className="degree">Bachelor of Engineering - BE</div>
                    <div className='branch'>Computer Science and Engineering</div> 
                    <div className="year">2019-2023</div>
                    <div className="grade"><strong>Grade : </strong>9.5 sgpa</div>
                </div>
                <div className='quali'>
                <div className="institute">Holy Cross School, Hazaribag</div>
                    <div className="degree">Intermediate (12th)</div>
                    <div className='branch'>Science - CS</div> 
                    <div className="year">2017-2018</div>
                    
                </div>
                <div className='quali'>
                <div className="institute">DAV Public School, Barhi</div>
                    <div className="degree">Matriculate (10th)</div>
                    <div className='branch'>Science</div> 
                    <div className="year">2015-2016</div>
                    <div className="grade"><strong>Grade : </strong>8.2cgpa</div>
                </div>
            </section>
        </section>
    );
}
export default About;