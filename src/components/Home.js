import './Home.css';
import profile from '../assets/profile.png';

function Home() {
    return (
        <section id="home">
            <div class="homeblog">
                <div class="hometitle">Hello, my name is <i class="colo" >RAHUL VERMAN</i></div>
                <div class="hometitle">I'm a <span class="colo">Web Developer</span> &amp;<span class="colo"> Software Engineer</span>|</div>
                <div class="homeblog">I'm a Web Developer with critical thinking &amp; problem solving ability. 
                    My expertise is to create Responsive web pages, Hosting them, Database Mangement, Computer Programming and many more...  
                     </div>
                <button class="btn fill">More About Me</button>
                <button class="btn">Contact Me</button>
            </div>
            <div class="profile">
                <img src={profile} class= "profileimg"/>
            </div>
        </section>
    );
}
export default Home; 