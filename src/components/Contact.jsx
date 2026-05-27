import "../styles/Contact.css"

const Contact = () => {

  return (

   <section className="contact" id="contact">

      <div className="contact-container">

        <p className="contact-tag">
          COMMUNITY
        </p>


        <h2>
          JOIN THE <span>RIDE</span>
        </h2>


        <p className="contact-text">

          Stay connected with the latest drops,
          urban motion culture, and exclusive releases.

        </p>



        <form className="contact-form">

          <input
            type="email"
            placeholder="Enter your email"
          />


          <textarea
            placeholder="Drop some loving words..."
          ></textarea>


          <button type="submit">
            JOIN NOW
          </button>

        </form>

      </div>

    </section>

  )
}

export default Contact