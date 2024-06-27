import {FaPlus, FaMinus} from 'react-icons/fa'
import './index.css'

const AboutToggleItems = ({item, isToggled, toggleItems}) => {
  const {id, title, description} = item

  const handleKeyPress = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleItems(id)
    }
  }

  return (
    <li className="about-toggle-item">
      <div
        className={
          isToggled ? 'about-toggle-container-active' : 'about-toggle-container'
        }
        onClick={() => toggleItems(id)}
        role="button"
        tabIndex={0}
        onKeyPress={handleKeyPress}
      >
        <h2
          className={
            isToggled ? 'about-toggle-title-active' : 'about-toggle-title'
          }
        >
          {title}
        </h2>
        {isToggled ? (
          <FaMinus
            className={isToggled ? 'toggle-icon-active' : 'toggle-icon'}
          />
        ) : (
          <FaPlus
            className={isToggled ? 'toggle-icon-active' : 'toggle-icon'}
          />
        )}
      </div>
      {isToggled && <p className="about-toggle-description">{description}</p>}
    </li>
  )
}

export default AboutToggleItems
