import NavBar from '../NavBar'
import Footer from '../Footer'
import './index.css'

const Home = () => (
  <div className="container">
    <NavBar />
    <div className="home-bg-container">
      <div className="home-content-container">
        <p className="kindergarten-program">Kindergarten Program</p>
        <h1 className="home-head">Best Children’s Education Curriculum</h1>
        <p className="home-admission">Admission Open 20-24 April</p>
        <button className="apply-now-btn" type="button">
          Apply Now
        </button>
      </div>
      <div className="home-banner-container">
        <img
          className="banner"
          src="https://res.cloudinary.com/dhfmjj1j9/image/upload/v1719148271/Group_274_suzxus.png"
          alt="banner"
        />
      </div>
    </div>
    <Footer />
  </div>
)

export default Home
