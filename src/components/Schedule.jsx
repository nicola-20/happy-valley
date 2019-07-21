import React from 'react';
import {
  Box,
} from 'grommet'
import PageHeader from './PageHeader.jsx';
import EventFilter from './EventFilter.jsx';
import EventCard from './EventCard.jsx';
import { getEvents } from '../api.js'

const Schedule = () => {
  const [showEvent, setShowEvent] = React.useState(false)
  const [events, setEvents] = React.useState([])
  const [categories, setCategories] = React.useState([])
  React.useEffect(() => {
    getEvents().then((events) => {
      setEvents(events)
      const categories = events.reduce((acc, event) => {
        if (!acc.includes(event.type)) acc.push(event.type)
        return acc
      }, [])
      setCategories(categories)
    })
    // eslint-disable-next-line
  }, [])
  const [category, setCategory] = React.useState('Category')
  const [day, setDay] = React.useState({ day: 'Day' })
  React.useEffect(() => {
    getEvents(day, category).then((events) => {
      setEvents(events)
    })
  }, [day, category])
  return (
    <Box background="status-ok" fill={true} direction="column" align="center">
      <PageHeader title="Schedule of Events" paragraph="" />
      <EventFilter categories={categories} category={category} day={day} setCategory={setCategory} setDay={setDay} />
      <Box width="85vw" direction="column" overflow="scroll" margin={{ bottom: "large", top: "small" }} height="75vh">
        {events.map((event, index) => {
          return (
            <EventCard key={index} event={event} showEvent={showEvent} setShowEvent={setShowEvent} />
          )
        })}
      </Box>
    </Box>
  );
};

export default Schedule;
