import './Achivements.css';
import {FaExternalLinkAlt, FaStar} from 'react-icons/fa';
import {GiLaurelsTrophy, GiPodiumWinner} from 'react-icons/gi';

function Certi(param) {
    return (
        <a href={param.href} target="_blank" class="card" rel="noopener noreferrer" >
            <div className='cardtitle'>
            {param.title}
            </div>
            <i className='cardissuer' width="100%" align="right">{param.issuer}</i><br/>
            <div className='issue'><strong>Issue Date : </strong>{param.issue}</div>
            <div className='expiry'><strong>Expiry Date :</strong> {param.expiry}</div>
            <div className='credid'><strong>Credential ID : </strong>{param.cred}
             &nbsp;<FaExternalLinkAlt />
            </div>
        </a>
    )
}

function Badge(param) {
    return (
        <div className='card'>
            <div className='cardtitle'>{param.title}
            <FaStar color="#ffd700"/><FaStar color="#ffd700"/><FaStar color="#ffd700"/><FaStar color="#ffd700"/>
            <FaStar color="#ffd700"/>
            </div>
            <i className='cardissuer' width="100%" align="right">{param.issuer}</i><br/>
            </div>
    )
}
function Achivements() {
    return (
        <section id="achivements">
            <h2>Achivements</h2>
            <hr width="200rem" align="left" color="#d4aa8c"/>
            <section class="cards ">
            <div className='card'>
            
            <div className='cardtitle'>Winner in UI/UX Development Challenege
            <GiLaurelsTrophy  size="1.8rem" color="#ffd700"/>
            </div>
            <i className='cardissuer' width="100%" align="right">SDC Club (MVJCE)</i><br/>
            <div className='issue'><strong>Role : </strong>Developer (Team Lead) </div>
            <div className='issue'><strong>Date : </strong>June 2022</div>
            
            </div>
            <div className='card'>
            <div className='cardtitle'>Top Performer in HackForEt Hackathon
            <GiPodiumWinner size="2rem" color="#ffd700"/>
            </div>
            <i className='cardissuer' width="100%" align="right">CodeChef | CMRTC</i><br/>
            <div className='issue'><strong>Role : </strong>Full Stack Developer (Team Lead) </div>
            <div className='issue'><strong>Date : </strong>April 2022</div>
            
            </div>
            <Badge title="5 Star Badge in Python Programming" issuer="HackerRank" star={5}/> 
            <Badge title="5 Star Badge in C++ Programming" issuer="HackerRank" star={5} /> 
            <Badge title="4 Star Badge in MySQL" issuer="HackerRank" star={4}/> 
            </section>
            
            <h2>Certificates</h2>
            <hr width="200rem" align="left" color="#d4aa8c"/>
            <section className="cards">
            <Certi
            title="Introduction to Web Development with HTML, CSS, JavaScript"
            href="https://www.coursera.org/account/accomplishments/certificate/TYSD3EYL8ADU"
            issuer="IBM Skills Network"
            issue="September 2022"
            expiry="No Expiry"
            cred="TYSD3EYL8ADU"
            />
            <Certi 
            title="Python 3.4.3 Tranining Certification"
            href="https://spoken-tutorial.org/software-training/test/participant/certificate/80499/3147846/"
            issuer="Indian Institute of Technology, Bombay"
            issue="August 2022"
            expiry="No Expiry"
            cred="3147846USZ"
            />
            <Certi
            title="Introduction to Cloud Computing"
            href="https://www.coursera.org/account/accomplishments/certificate/WRPBUXGC8H6U"
            issuer="IBM Skills Network"
            issue="March 2022"
            expiry="No Expiry"
            cred="WRPBUXGC8H6U"
            />
            <Certi
            title="JavaScript Certification"
            href="https://www.hackerrank.com/certificates/8e4284a558bd"
            issuer="HackerRank"
            issue="September 2021"
            expiry="No Expiry"
            cred="8e4284a558bd"
            />
            <Certi
            title="MySQL Certification"
            href="https://olympus1.mygreatlearning.com/course_certificate/NIDPFHUD"
            issuer="Great Learning"
            issue="September 2021"
            expiry="No Expiry"
            cred="NIDPFHUD"
            />
            </section>
            
        </section>
    )
}
export default Achivements;