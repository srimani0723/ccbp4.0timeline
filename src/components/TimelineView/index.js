import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const timelines = timelineItemsList.map(each => ({
    title: each.title,
  }))

  return (
    <div className="chrono-container">
      <div className="header">
        <h1 className="main-h1-1">
          MY JOURNEY OF <span className="main-h1-2">CCBP 4.0</span>
        </h1>
      </div>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelines}
        theme={{
          primary: '#0967d2',
          secondary: '#ffffff',
          cardBgColor: '#ffffff',
          cardForeColor: '#ffffff',
          titleColor: '#0967d2',
        }}
      >
        {timelineItemsList.map(each =>
          each.categoryId === 'COURSE' ? (
            <CourseTimelineCard key={each.id} item={each} />
          ) : (
            <ProjectTimelineCard key={each.id} item={each} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
