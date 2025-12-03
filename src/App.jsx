import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Logos from "./sections/logos"
import Navbar from "./sections/Navbar"
import ShowCase from "./sections/ShowCase"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      <Logos />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      {/* <Contact /> */}
      <Footer />
    </>
  )
}

export default App