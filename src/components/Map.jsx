import React from 'react';
import { Box } from "grommet";
import { fetchEvents } from '../api.js'

const Map = () => {
  const [events, setEvents] = React.useState([])
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

  return (
    <Box background="status-warning" fill={true} height="93vh">
      MAP
    </Box>
  );
};

export default Map;