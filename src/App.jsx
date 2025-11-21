import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
    {/* <Navbar /> */}
    <Hero />

    <Services />
    <About />
    <Contact />
    <Footer />
  </div>
}

export default App
