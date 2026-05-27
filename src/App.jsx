import Collection from "./components/Collection"
import Hero from "./components/Hero"
import Navbar from "./components/navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Collection/>
      <About/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App