import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyFraction from './components/WhyFraction'
import EmailCapture from './components/EmailCapture'
import BDMSection from './components/BDMSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <WhyFraction />
        <BDMSection />
        <EmailCapture />
      </main>
      <Footer />
    </div>
  )
}
