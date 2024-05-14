import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {item} = props

  const {description, duration, imageUrl, projectTitle, projectUrl} = item
  return (
    <div>
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="project-title-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-card">
          <AiFillCalendar className="duration-logo" />
          <p className="duration-p">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
