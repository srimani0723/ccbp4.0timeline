import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {item} = props

  const {courseTitle, description, duration, tagsList} = item
  return (
    <div>
      <h1 className="course-h1">{courseTitle}</h1>
      <div className="duration-card">
        <AiFillClockCircle className="duration-logo" />
        <p className="duration-p">{duration}</p>
      </div>
      <p className="des">{description}</p>
      <ul className="tagslist-container">
        {tagsList.map(each => (
          <p key={each.id} className="tag">
            {each.name}
          </p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
