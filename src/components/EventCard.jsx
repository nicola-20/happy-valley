import { convertDate } from '../utils'
import React from 'react';
import {
  Box as EventContainer, Box as EventTitle,
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
      <EventContainer direction="column" background="white" height="25vh" round="medium" margin={{ top: "medium", bottom: "medium" }} pad={{vertical: "small", horizontal: "medium"}}>
        <ThemeContext.Extend value={{
          box: { extend: "min-height: 9vh" }
        }}>
          <EventTitle height="9vh"
          className="evntTitle"
          direction="row" align="center"
          margin="none">
            <Heading className="event-title" level="3" margin="none">{event.title}</Heading>
          </EventTitle>
        </ThemeContext.Extend>
        <Text>{event.venue}</Text>
        <Text className="event-date">{convertDate(event.date_time)}</Text>
        <Button className="more-info" label="more info" hoverIndicator={false} color="#239f95"
        margin={{ vertical: "small", horizontal: "auto" }} primary={true} onClick={() => setShowEvent(event.title)} />
        {showEvent === event.title && (
          <Layer
            onClickOutside={() => setShowEvent(false)}
            full={false}
            responsive={false}
          >
            <EventOverlay event={event} closeOverlay={() => setShowEvent(false)} />
          </Layer>
        )}

      </EventContainer>
    </ThemeContext.Extend>
  );
};

export default EventCard;