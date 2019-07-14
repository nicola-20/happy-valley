import React from 'react';
import {
  Box,
  Heading,
  Paragraph,
  Text,
  Layer,
  ThemeContext,
  Button,
  Select,
  Image,
  Markdown
} from 'grommet'

const EventOverlay = ({ event, closeOverlay }) => {
  const dateTime = event.date_time.toUTCString()
  const dayOfWeek = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(event.date_time)
  const date = `${dateTime.split(', ')[1].split(' ')[0]} ${dateTime.split(', ')[1].split(' ')[1]}`
  const time = dateTime.split(' ')[4].slice(0, -3)

  return (
    <Box pad="medium" overflow="scroll" height="80vh" width="90vw">
      <Heading level="1" color="brand" textAlign="start" margin={{ bottom: "medium", top: "none" }}>{event.title}</Heading>
      <Box direction="row">
        <ThemeContext.Extend value={{
          box: {
            extend: "min-height: 25vh; min-width: 25vh;"
          }
        }}>
          <Box height="25vh" width="25vh">
            <Image src={event.photo.fields.file.url} alt={event.photo.fields.title} fit="contain" />
          </Box>
        </ThemeContext.Extend>
        <Box direction="column" margin={{left: "medium"}}>
          <Heading level="3" margin="none"> {event.venue}</Heading>
          <Heading level="3" margin="none"> {dayOfWeek} {date} {time}</Heading>
          <Heading level="3" margin="none"> {event.price_text}</Heading>
          <Heading level="3" margin="none">{event.type}</Heading>
        </Box>
      </Box>


      <Markdown>{event.description}</Markdown>
      <Button primary={true} label="back to event list" onClick={closeOverlay} />
    </Box>
  )
}

export default EventOverlay;