
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ServiceSection from './ServiceSection'
import Footer from '../components/Footer'
import AlertIllehgaleMigration from '../components/AlertIllehgaleMigration'
import OurTeam from './OurTeam'
import Gallery from './Gallery'
import Contact from '../components/contact'

const Home = () => {
  return (
  <div className="bg-green-50 min-h-screen">
    <Header />
    <HeroSection />
    <ServiceSection />
    <AlertIllehgaleMigration />
    <Gallery />
    <OurTeam />
    <Contact />
    <Footer />
    </div>
  )
}

export default Home