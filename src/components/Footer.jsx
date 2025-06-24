import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer(){
    return(
           <footer className="footer">
  <div className="footer-logo">
    <a href="#">CometChat</a>
  </div>
  <div className="footer-container">
    <div className="footer-column">
      <p className="footer-heading">Platform</p>
      <div className="footer-subsection">
        <p className="footer-subheading">Features</p>
        <ul>
          <li>Chat &amp; Messaging</li>
          <li>Voice &amp; Video Calls</li>
          <li>Security &amp; Compliance</li>
          <li>Extensions</li>
          <li>Features at a glance</li>
          <li>Webhooks &amp; Bots</li>
          <li>Moderation</li>
          <li>Analytics &amp; Insights</li>
        </ul>
      </div>
      <div className="footer-subsection">
        <p className="footer-subheading">Implementation</p>
        <ul>
          <li>Widgets</li>
          <li>UI Kits</li>
          <li>SDKs &amp; APIs</li>
        </ul>
      </div>
      <div className="footer-subsection">
        <p className="footer-subheading">Technologies</p>
        <ul>
          <li>React Chat SDK &amp; API</li>
          <li>Angular Chat SDK &amp; API</li>
          <li>Vue Chat SDK &amp; API</li>
          <li>iOS Swift Chat SDK &amp; API</li>
          <li>Android Kotlin Chat SDK &amp; API</li>
          <li>Android Java Chat SDK &amp; API</li>
          <li>React Native Chat SDK &amp; API</li>
          <li>Ionic/Capacitor Chat SDK &amp; API</li>
          <li>WordPress Chat SDK &amp; API</li>
          <li>Laravel/PHP Chat SDK &amp; API</li>
          <li>Flutter Chat SDK &amp; API</li>
          <li>Next.js Chat SDK &amp; API</li>
        </ul>
      </div>
    </div>
    <div className="footer-column">
      <p className="footer-heading">Solutions</p>
      <div className="footer-subsection">
        <p className="footer-subheading">By Use cases</p>
        <ul>
          <li>Social Community</li>
          <li>Marketplace</li>
          <li>Healthcare</li>
          <li>Education</li>
          <li>Virtual Events</li>
          <li>On-Demand Service</li>
          <li>Dating Apps</li>
          <li>Gaming</li>
        </ul>
      </div>
      <div className="footer-subsection">
        <p className="footer-subheading">By Organization Type</p>
        <ul>
          <li>Enterprise</li>
          <li>Startups</li>
        </ul>
      </div>
    </div>
    <div className="footer-column">
      <p className="footer-heading">Developers</p>
      <div className="footer-subsection">
        <p className="footer-subheading">Technologies documentation</p>
        <ul>
          <li>React</li>
          <li>Angular</li>
          <li>Vue</li>
          <li>iOS Swift</li>
          <li>Android Kotlin</li>
          <li>Android Java</li>
          <li>React Native</li>
          <li>Ionic/Capacitor</li>
          <li>WordPress</li>
          <li>Laravel/PHP</li>
          <li>Flutter</li>
          <li>Next.js</li>
        </ul>
      </div>
      <div className="footer-subsection">
        <p className="footer-subheading">Documentation</p>
        <ul>
          <li>Documentation</li>
          <li>Product updates</li>
          <li>Tutorials</li>
          <li>Open-source Apps</li>
          <li>Product status</li>
          <li>Glossary</li>
        </ul>
      </div>
    </div>
    <div className="footer-column">
      <div className="footer-subsection">
        <p className="footer-heading">Resources</p>
        <ul>
          <li>Customer stories</li>
          <li>Blog</li>
          <li>Give feedback</li>
          <li>Community forum</li>
          <li>Help center</li>
          <li>Partners</li>
        </ul>
      </div>
      <div className="footer-subsection">
        <p className="footer-heading" style={{ marginTop: '20px' }}>Competitors</p>
        <ul>
          <li>SendBird</li>
          <li>GetStream</li>
          <li>Applozic</li>
          <li>Twilio</li>
          <li>PubNub</li>
        </ul>
      </div>
      <div className="footer-subsection">
        <p className="footer-heading" style={{ marginTop: '20px' }}>Company</p>
        <ul>
          <li>About us</li>
          <li>Careers</li>
          <li>Partners</li>
          <li>Pricing</li>
          <li>Chat with us</li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
  <div className="footer-bottom">
    <div className="footer-left">
      <p>2025 © CometChat</p>
      <p>Terms of Use</p>
      <p>Privacy Policy</p>
    </div>
    <div className="footer-right">
  <a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
  <a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
  <a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
  <a href="#"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
</div>

  </div>
  
</footer>
 
    )
}
export default Footer;