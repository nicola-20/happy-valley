import React from 'react';
import {
  Box,
  Heading,
  Stack,
  ThemeContext,
  Button,
  Image,
  Markdown
} from 'grommet'
import { convertDate } from '../utils'

const EventOverlay = ({ event, closeOverlay }) => {
  return (
    <Box pad="medium" overflow="scroll" height="80vh" width="90vw" round="large">
      <Stack anchor="top-right">
        <Heading level="1" color="brand" textAlign="start" margin={{ bottom: "medium", top: "none" }}>{event.title}</Heading>
        <Button label="x" onClick={closeOverlay} primary={false} margin={{ horizontal: "small" }} height="8vh" color="brand" plain={true} fill={false} />
      </Stack>
      <Box direction="row">
        <ThemeContext.Extend value={{
          box: {
            extend: "min-height: 25vh; min-width: 25vh;"
          }
        }}>
          <ThemeContext.Extend value={{
            image: {
              extend: "border: solid 0px white; border-radius: 10px;"
            }
          }}>
            <Box height="25vh" width="25vh">
              {event.photo && <Image src={event.photo.fields.file.url} alt={event.photo.fields.title} fit="contain" border="all" />}
            </Box>
          </ThemeContext.Extend>
        </ThemeContext.Extend>
        <Box direction="column" margin={{ left: "medium" }}>
          <Heading level="3" margin="none"> {event.venue}</Heading>
          <Heading level="3" margin="none">{convertDate(event.date_time)}</Heading>
          <Heading level="3" margin="none"> {event.price_text}</Heading>
          <Heading level="3" margin="none">{event.type}</Heading>
        </Box>
      </Box>
      <Markdown>{event.description}</Markdown>
      <Button primary={true}
        label="back to event list"
        onClick={closeOverlay} margin={{ bottom: "small", horizontal: "auto" }} color="#6d4189" className="back-event">
      </Button>
    </Box>
  )
}

export default EventOverlay;