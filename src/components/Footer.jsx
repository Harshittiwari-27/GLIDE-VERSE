import "../styles/Footer.css"

import {
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaTiktok,
  FaWhatsapp
} from "react-icons/fa"

const Footer = () => {

  return (

    <footer className="footer">

      <div className="footer-top">


       

        <div className="footer-brand">

          <h2>
            GLIDE<span>VERSE</span>
          </h2>

          <p>
            Built for those who live to ride.
          </p>

        </div>


        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>

            <li>Home</li>

            <li>Collection</li>

            <li>About</li>

            <li>Contact</li>

          </ul>

        </div>


        <div className="footer-socials">

          <h3>Socials</h3>

          <div className="social-icons">

            <FaInstagram />

            <FaYoutube />

            <FaDiscord />

            <FaWhatsapp/>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Glideverse. All Rights Reserved.
        </p>

      </div>

    </footer>

  )
}

export default Footer