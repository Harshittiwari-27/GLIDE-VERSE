import { useState } from "react"

import logo from "../assets/logo.jpg"

import "../styles/Navbar.css"



const navLinks = [

  {
    name: "HOME",
    path: "#home"
  },

  {
    name: "COLLECTION",
    path: "#collection"
  },

  {
    name: "SKATES",
    path: "#collection"
  },

  {
    name: "ABOUT",
    path: "#about"
  },

  {
    name: "CONTACT",
    path: "#contact"
  }

]



const Navbar = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (

    <>


      <nav>

        <div className='logo'>

          <img src={logo} alt="logo" />

        </div>

        <ul>

          {navLinks.map((item) => (

            <li key={item.name}>

              <a href={item.path}>
                {item.name}
              </a>

            </li>

          ))}

        </ul>


        <button
          className="login-btn"
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>

      </nav>



      {/* LOGIN MODAL */}

      {

        showLogin && (

          <div className="login-overlay">

            <div className="login-modal">

              {/* CLOSE BUTTON */}

              <button
                className="close-btn"
                onClick={() => setShowLogin(false)}
              >
                ×
              </button>



              {/* HEADING */}

              <h2>
                GLIDE VERSE
              </h2>



              {/* TEXT */}

              <p>
                Login to continue your ride.
              </p>



              {/* FORM */}

              <form className="login-form">

                <input
                  type="email"
                  placeholder="Enter your email"
                />


                <input
                  type="password"
                  placeholder="Enter your password"
                />


                <button type="submit">
                  Login
                </button>

              </form>

            </div>

          </div>

        )

      }

    </>

  )
}

export default Navbar