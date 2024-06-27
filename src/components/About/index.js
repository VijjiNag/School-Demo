import {useState} from 'react'
import NavBar from '../NavBar'
import AboutToggleItems from '../AboutToggleItems'
import Footer from '../Footer'
import './index.css'

const aboutToggleItems = [
  {
    id: 1,
    title: 'To round out our weekend of celebrations, we are holding',
    description:
      'Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat. At nulla erat nisi nunc. Sit risus sagittis pellentesque eget convallis commodo. Sit pellentesque dolor neque a diam malesuada.',
  },
  {
    id: 2,
    title: 'To round out our weekend of celebrations, we are holding',
    description:
      'Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat. At nulla erat nisi nunc. Sit risus sagittis pellentesque eget convallis commodo. Sit pellentesque dolor neque a diam malesuada.',
  },
  {
    id: 3,
    title: 'To round out our weekend of celebrations, we are holding',
    description:
      'Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat. At nulla erat nisi nunc. Sit risus sagittis pellentesque eget convallis commodo. Sit pellentesque dolor neque a diam malesuada.',
  },
]

const About = () => {
  const [toggledItems, setToggledItems] = useState({})

  const toggleItems = id => {
    setToggledItems(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  return (
    <div className="container">
      <NavBar />
      <div className="about-container">
        <div className="about-content-container">
          <h1 className="about-head">Know more about EduKid</h1>
          <ul className="about-toggle-items">
            {aboutToggleItems.map(item => (
              <AboutToggleItems
                key={item.id}
                item={item}
                toggleItems={toggleItems}
                isToggled={!!toggledItems[item.id]}
              />
            ))}
          </ul>
        </div>
        <div className="about-banner-container">
          <img
            className="about-banner-img"
            src="https://res.cloudinary.com/dhfmjj1j9/image/upload/v1719208656/Group_113_ugwash.png"
            alt="about-banner"
          />
        </div>
      </div>
      <div className="best-teachers-container">
        <h1 className="best-teachers-head">Our Best Teachers</h1>
        <p className="best-teachers-desc">
          Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc
          posuere quis at vitae consequat. At nulla erat nisi nunc. Sit risus
          sagittis pellentesque eget convallis commodo. Sit pellentesque dolor
          neque a diam malesuada.
        </p>
        <div className="teachers-image-container">
          <div className="teacher-img-1">
            <div className="teacher-title-container">
              <h1 className="teacher-title">Steven Strange</h1>
              <p className="teacher-desc">Teacher</p>
            </div>
          </div>
          <div className="teacher-img-2">
            <div className="teacher-title-container">
              <h1 className="teacher-title">Diana Prince</h1>
              <p className="teacher-desc">Teacher</p>
            </div>
          </div>
          <div className="teacher-img-3">
            <div className="teacher-title-container">
              <h1 className="teacher-title">Edith Nekesa</h1>
              <p className="teacher-desc">Teacher</p>
            </div>
          </div>
          <div className="teacher-img-4">
            <div className="teacher-title-container">
              <h1 className="teacher-title">Peter Parker</h1>
              <p className="teacher-desc">Teacher</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
