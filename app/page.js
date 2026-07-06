import Header from './components/Header'
import Hero from './components/Hero'
import HoursBar from './components/HoursBar'
import Menu from './components/Menu'
import About from './components/About'
import Gallery from './components/Gallery'
import FacebookFeed from './components/FacebookFeed'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HoursBar />
        <Menu />
        <About />
        <Gallery />
        <FacebookFeed />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
