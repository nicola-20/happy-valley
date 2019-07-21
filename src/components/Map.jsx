import React from 'react';
import { Box as Page, Box as MapContainer, Box as Content} from "grommet";
import GoogleMap from './GoogleMap.jsx';
import PageHeader from './PageHeader.jsx';
import { getEvents } from '../api.js'
const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env.NODE_ENV === 'production' ? process.env : require('../config');

const Map = () => {
  const [events, setEvents] = React.useState([])
  React.useEffect(() => {
    getEvents().then((events) => {
      setEvents(events)
    })
  }, [])
  return (
    <Page background="status-warning" fill={true} align="center">
      <PageHeader title="Map" paragraph="Click on a venue marker to find events!" />
      <Content width="85vw" height="80vh" direction="column" align="center" justify="center">
        <MapContainer background="white" height="75vh" margin={{ vertical: "large" }} width="85vw" round={true} id="map-holder">
          <GoogleMap
            events={events}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%`, border: 'solid 0px black', borderRadius: '20px' }} />}
            mapElement={<div style={{ height: `100%`, border: 'solid 0px red', borderRadius: '20px' }} />}
          />
        </MapContainer>
      </Content>
    </Page>
  );
};

export default Map;