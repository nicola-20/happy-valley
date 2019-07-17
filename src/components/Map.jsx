import React from 'react';
import { Box, ThemeContext, Paragraph, Heading, Layer, Text } from "grommet";
import { fetchEvents } from '../api.js'
import MapImage from './MapImage.js';
import GoogleMapContainer from './GoogleMap.jsx';

const Map = () => {
  const [events, setEvents] = React.useState([])

  const [venue, setVenue] = React.useState(null)

  console.log(events)

  React.useEffect(() => {
    fetchEvents().then(({ items }) => {
      setEvents(items.map(({ fields: { date_time, ...eventInfo } }) => {
        return {
          date_time: new Date(date_time),
          ...eventInfo
        }
      }))
    })
  }, [])
  const handleMarkerClick = (venue) => {
    setVenue(venue)
  }
  return (
    <Box background="status-warning" fill={true} align="center">

      <ThemeContext.Extend value={{
        paragraph: {
          medium: {
            maxWidth: "80vw"
          }
        }
      }}>
        <Box margin={{ top: "large", bottom: "none" }} width="80vw">
          <Heading level="2" alignSelf="start" margin={{ vertical: "medium" }} color="white">
            Map
        </Heading>
          <Paragraph className="top-border-paragraph" margin="none" color="white">
            Click on a venue marker to find events!
        </Paragraph>
        </Box>
      </ThemeContext.Extend>

      {/* <Box background="status-warning" fill={true} height="93vh" alignContent="center"> */}
      {venue && (
        <Layer
          onClickOutside={() => setVenue(null)}
          full={false}
          responsive={false}
        >
          <Box background="white" height="50vh" width="90vw" pad="medium" round={true} overflow="scroll">
            <Heading level="2" margin={{ vertical: "medium" }}>{venue}</Heading>
            {events.filter((event) => event.venue === venue).map((event) => {
              const dateTime = event.date_time.toUTCString()
              const dayOfWeek = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(event.date_time)
              const date = `${dateTime.split(', ')[1].split(' ')[0]} ${dateTime.split(', ')[1].split(' ')[1]}`
              const time = dateTime.split(' ')[4].slice(0, -3)
              return (
                <Box margin={{vertical: "medium"}} height="30vh">
                  <Heading level="2" color="status-warning" margin="none">{event.title}
                  </Heading>
                  <Text className="event-date">{dayOfWeek} {date} <Text className="event-time">
                    {time}
                  </Text>
                  </Text>
                </Box>
              )
            })}
          </Box>
        </Layer>
      )}

      <Box background="white" height="65vh" width="80vw" margin="auto" round={true} id="map-holder">
        {/* <MapImage handleMarkerClick={handleMarkerClick} /> */}
        <GoogleMapContainer events={events} handleMarkerClick={handleMarkerClick}/>
      </Box>
    </Box>
  );
};

export default Map;