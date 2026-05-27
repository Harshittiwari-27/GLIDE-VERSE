
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"

import "../styles/Collection.css"

const Collection = () => {
  return (

    <section className="collection" id="collection">

      <h2>
       RIDE
       <span> ESSENTIALS</span>
      </h2>
      <p>YOUR BOARD. YOUR RULES.</p>


      <div className="carousel-wrapper">

        <div className="carousel-track">

          {/* CARD 1 */}

          <div className="card">

            <div className="card-image">
              <img src={img1} alt="shoe" />
            </div>

            <div className="card-content">

              <h3>Velocity Pro</h3>

              <p>Urban Skates</p>

              <span>$149</span>

              <button>Add To Cart</button>

            </div>

          </div>



          {/* CARD 2 */}

          <div className="card">

            <div className="card-image">
              <img src={img2} alt="shoe" />
            </div>

            <div className="card-content">

              <h3>Glide X</h3>

              <p>Street Sneakers</p>

              <span>$129</span>

              <button>Add To Cart</button>

            </div>

          </div>



          {/* CARD 3 */}

          <div className="card">

            <div className="card-image">
              <img src={img3} alt="shoe" />
            </div>

            <div className="card-content">

              <h3>Motion Elite</h3>

              <p>Performance Wear</p>

              <span>$179</span>

              <button>Add To Cart</button>

            </div>

          </div>



          {/* CARD 4 */}

          <div className="card">

            <div className="card-image">
              <img src={img4} alt="shoe" />
            </div>

            <div className="card-content">

              <h3>Street Nova</h3>

              <p>Urban Sneakers</p>

              <span>$159</span>

              <button>Add To Cart</button>

            </div>

          </div>



          {/* CARD 5 */}

          <div className="card">

            <div className="card-image">
              <img src={img5} alt="shoe" />
            </div>

            <div className="card-content">

              <h3>Skate Fusion</h3>

              <p>Motion Gear</p>

              <span>$139</span>

              <button>Add To Cart</button>

            </div>

          </div>



          {/* CARD 6 */}

          <div className="card">

            <div className="card-image">
              <img src={img6} alt="shoe" />
            </div>

            <div className="card-content">

              <h3>Phantom Ride</h3>

              <p>Premium Collection</p>

              <span>$199</span>

              <button>Add To Cart</button>

            </div>

          </div>






          
          <div className="card">

            <div className="card-image">
              <img src={img1} alt="shoe" />
            </div>

            <div className="card-content">

              <h3>Velocity Pro</h3>

              <p>Urban Skates</p>

              <span>$149</span>

              <button>Add To Cart</button>

            </div>

          </div>



          {/* CARD 2 */}

          <div className="card">

            <div className="card-image">
              <img src={img2} alt="shoe" />
            </div>

            <div className="card-content">

              <h3>Glide X</h3>

              <p>Street Sneakers</p>

              <span>$129</span>

              <button>Add To Cart</button>

            </div>

          </div>



          {/* CARD 3 */}

          <div className="card">

            <div className="card-image">
              <img src={img3} alt="shoe" />
            </div>

            <div className="card-content">

              <h3>Motion Elite</h3>

              <p>Performance Wear</p>

              <span>$179</span>

              <button>Add To Cart</button>

            </div>

          </div>



          {/* CARD 4 */}

          <div className="card">

            <div className="card-image">
              <img src={img4} alt="shoe" />
            </div>

            <div className="card-content">

              <h3>Street Nova</h3>

              <p>Urban Sneakers</p>

              <span>$159</span>

              <button>Add To Cart</button>

            </div>

          </div>



          {/* CARD 5 */}

          <div className="card">

            <div className="card-image">
              <img src={img5} alt="shoe" />
            </div>

            <div className="card-content">

              <h3>Skate Fusion</h3>

              <p>Motion Gear</p>

              <span>$139</span>

              <button>Add To Cart</button>

            </div>

          </div>



          {/* CARD 6 */}

          <div className="card">

            <div className="card-image">
              <img src={img6} alt="shoe" />
            </div>

            <div className="card-content">

              <h3>Phantom Ride</h3>

              <p>Premium Collection</p>

              <span>$199</span>

              <button>Add To Cart</button>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Collection

















/*
const Collection = () => {
  return (
    <section className="collection">
      <h2>Featured Collection</h2>
      <div className="collection-cards">

        <div className="card">
          <img src="shoe1.png" alt="" />
          <h3>Velocity Pro</h3>
          <p>Urban Skates</p>
          <span>$149</span>
          <button>Add To Cart</button>
        </div>

        <div className="card">
          <img src="shoe2.png" alt="" />
          <h3>Glide X</h3>
          <p>Street Sneakers</p>
          <span>$129</span>
          <button>Add To Cart</button>
        </div>

        <div className="card">
          <img src="shoe3.png" alt="" />
          <h3>Motion Elite</h3>
          <p>Performance Wear</p>
          <span>$179</span>
          <button>Add To Cart</button>
        </div>

      </div>

    </section>

  )
}

export default Collection
*/