import { convertDate } from '../utils'
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Layer,
  ThemeContext,
  Button,
} from 'grommet'
import EventOverlay from './EventOverlay'

const EventCard = ({ event, showEvent, setShowEvent }) => {
  return (
    <ThemeContext.Extend value={{
      box: { extend: "min-height: 25vh" },
      global: {
        font: {
          size: "20px"
        }
      }
    }}>
      <Box direction="column" background="white" height="25vh" round="medium" margin={{ top: "medium", bottom: "medium" }} pad="medium">
        <Heading className="event-title" level="3" margin="none">{event.title}</Heading>
        <Text>{event.venue}</Text>
        <Text className="event-date">{convertDate(event.date_time)}</Text>
        <Button className="more-info" label="more info" hoverIndicator={false} color="#239f95" margin={{ vertical: "none", horizontal: "auto" }} primary={true} onClick={() => setShowEvent(event.title)} />
        {showEvent === event.title && (
          <Layer
            onClickOutside={() => setShowEvent(false)}
            full={false}
            responsive={false}
          >
            <EventOverlay event={event} closeOverlay={() => setShowEvent(false)} />
          </Layer>
        )}

      </Box>
    </ThemeContext.Extend>
  );
};

export default EventCard;