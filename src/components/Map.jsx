import React from 'react';
import { Box } from "grommet";
import { fetchEvents } from '../api.js'
import GoogleMapContainer from './GoogleMap.jsx';
import PageHeader from './PageHeader.jsx';
const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env.NODE_ENV === 'production' ? process.env : require('../config');

const Map = () => {
  const [events, setEvents] = React.useState([])
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
    <Box background="status-warning" fill={true} align="center">
      <PageHeader title="Map" paragraph="Click on a venue marker to find events!" />
      <Box width="85vw" height="80vh" direction="column" align="center" justify="center">
        <Box background="white" height="75vh" margin={{ vertical: "large" }} width="85vw" round={true} id="map-holder">
          <GoogleMapContainer
            events={events}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%`, border: 'solid 0px black', borderRadius: '20px' }} />}
            mapElement={<div style={{ height: `100%`, border: 'solid 0px red', borderRadius: '20px' }} />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Map;