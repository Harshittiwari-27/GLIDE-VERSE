import girl from "../assets/gg1.png"

import "../styles/About.css"

const About = () => {
  return (

    <section className="about" id="about">

      {/* LEFT SIDE */}

      <div className="about-left">

        <img src={girl} alt="girl-image" />

      </div>



      {/* RIGHT SIDE */}

      <div className="about-right">

        <p className="about-tag">
          ABOUT GLIDEVERSE
        </p>


        <h2>
          BUILT FOR THOSE <br />

          <span>WHO LIVE TO RIDE</span>
        </h2>


        <div className="about-line"></div>


        <p className="about-text">

          Glideverse creates premium skates and rollers
          inspired by speed, freedom, and urban motion —
          crafted for riders who never stand still.

        </p>


        <p className="about-text">

          From the streets to the skatepark, our gear is
          designed to push limits, elevate style,
          and keep you moving forward.

        </p>



        {/* FEATURES */}

        <div className="about-features">

          <div className="feature-box">

            <h3>BUILT FOR SPEED</h3>

            <p>
              Engineered for performance
              and high-speed control.
            </p>

          </div>



          <div className="feature-box">

            <h3>MADE TO LAST</h3>

            <p>
              Premium materials for
              durability and comfort.
            </p>

          </div>



          <div className="feature-box">

            <h3>RIDE YOUR WAY</h3>

            <p>
              Express your style.
              Break your limits.
            </p>

          </div>

        </div>

      </div>

    </section>

  )
}

export default About