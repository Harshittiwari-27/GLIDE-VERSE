import foot from "../assets/sk1.png"
import "../styles/Hero.css"

const Hero = () => {
  return (

    <section className="hero" id="home">

      {/* Left Section */}
      <div className="hero-left">

       <h1>
  GLIDE <br />

  <span>BEYOND</span> <br />

  LIMITS
</h1>

        <p>
          Premium skates and sneakers crafted
          for speed, comfort, and urban lifestyle.
        </p>

        <div className="hero-buttons">

          <button className="shop-btn">
            Shop Now
          </button>

          <button className="explore-btn">
            Explore Gear
          </button>

        </div>

      </div>


      {/* Right Section */}
      <div className="hero-right">

        <img src={foot} alt="skate-image" />

      </div>

    </section>

  )
}

export default Hero