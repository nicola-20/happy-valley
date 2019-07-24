import React from 'react';
import { Box as VenuePopUp, Box as Event, Heading as VenueTitle, Heading, Text, ThemeContext } from 'grommet';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { convertDate } from '../utils'

const styles = require('../styling/GoogleMapStylesGrey.json')

const GoogleMapComponentWithMarker = withScriptjs(
  withGoogleMap(props => {
    const locations = [];

    const [showInfoWindow, setShowInfoWindow] = React.useState(false)
    const [activeMarker, setActiveMarker] = React.useState({})

    const onClose = () => {
      if (showInfoWindow) {
        setShowInfoWindow(false)
        setActiveMarker(null)
      }
    }

    const onMarkerClick = (venue, location) => {
      setActiveMarker({ venue, location })
      setShowInfoWindow(true)
    }

    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{
          lat: 53.740997,
          lng: -2.013413
        }}
        defaultOptions={{
          disableDefaultUI: true,
          draggable: true,
          keyboardShortcuts: false,
          scaleControl: true,
          scrollwheel: true,
          styles: styles
        }}
      >
        {props.events.forEach((event) => {
          if (!locations.includes({ venue: event.venue, location: event.location })) {
            locations.push({ venue: event.venue, location: event.location })
          }
        })}
        {props.events.map((event) => {
          return (
            <Marker
              key={event.venue}
              position={{ lat: event.location.lat, lng: event.location.lon }}
              onClick={() => { onMarkerClick(event.venue, event.location) }}
              icon={{
                url: 'data:image/svg+xml;utf-8, <svg width="50px" height="50px" viewBox="0 0 110 189" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g transform="matrix(1,0,0,1,-9768.99,-2429.04)"> <g transform="matrix(7.37478,0,0,7.37478,-15848.2,-14382.6)"> <g transform="matrix(1.34402,0,0,1.34402,-1141.23,-799.07)"> <g transform="matrix(0.269419,0,0,0.269419,2553.69,1612.36)"> <path d="M3286.6,2588.29C3286.6,2588.29 3307.19,2553.22 3307.19,2538.19C3307.19,2526.83 3297.96,2517.6 3286.6,2517.6C3275.23,2517.6 3266.01,2526.83 3266.01,2538.19C3266.01,2553.22 3286.6,2588.29 3286.6,2588.29Z" style="fill:white;"/> </g> <g transform="matrix(0.225537,0,0,0.225537,2697.91,1723.86)"> <path d="M3286.6,2588.29C3286.6,2588.29 3307.19,2553.22 3307.19,2538.19C3307.19,2526.83 3297.96,2517.6 3286.6,2517.6C3275.23,2517.6 3266.01,2526.83 3266.01,2538.19C3266.01,2553.22 3286.6,2588.29 3286.6,2588.29ZM3286.6,2530.98C3291.91,2530.98 3296.22,2535.29 3296.22,2540.61C3296.22,2545.92 3291.91,2550.23 3286.6,2550.23C3281.28,2550.23 3276.97,2545.92 3276.97,2540.61C3276.97,2535.29 3281.28,2530.98 3286.6,2530.98Z" style="fill:rgb(199,53,129);"/> </g> </g> </g> </g> </svg>'
              }}
            />
          )
        })}
        {showInfoWindow && <InfoWindow
          visible={showInfoWindow}
          defaultVisible={false}
          onCloseClick={() => { onClose() }}
          position={{
            lat: activeMarker.location.lat,
            lng: activeMarker.location.lon
          }}
        >
          <VenuePopUp overflow="scroll" height="40vh" width="50vh" pad="none">
            <VenueTitle level="2" margin={{ vertical: "small", horizontal: "none" }} className="venue-title">{activeMarker.venue}</VenueTitle>
            {props.events.filter((event) => event.venue === activeMarker.venue).map((event) => {
              return (
                <Event className="map-eventpopup" key={event.title} margin={{ vertical: "none" }} pad={{ vertical: "small" }} height="10vh" border="top">
                  <Heading level="6" color="status-warning" margin="none">{event.title}
                  </Heading>
                  <ThemeContext.Extend value={{
                    text: {
                      extend: 'font-size: 18px'
                    }
                  }}>
                    <Text>{convertDate(event.date_time)}</Text>
                  </ThemeContext.Extend>
                </Event>
              )
            })}
          </VenuePopUp>
        </InfoWindow>}
      </GoogleMap>
    )
  }
  )
)

export default GoogleMapComponentWithMarker;


// const mapStyles = {
//   width: '100%',
//   height: '100%',
//   border: 'solid 0px black',
//   borderRadius: '20px'
// };

// export class MapContainer extends Component {
//   state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {}
//   }
//   render() {
//     const { events, handleMarkerClick } = this.props
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={{styles}}
//         initialCenter={{
//           lat: 53.740997,
//           lng: -2.013413
//         }}
//       >
//         {events.map((event) => {
//           return (
//             <Marker
//               key={event.title}
//               position={{ lat: event.location.lat, lng: event.location.lon }}
//               // onClick={() => { handleMarkerClick(event.venue) }} 
//               onClick={this.onMarkerClick}
//               name={event.venue}
//             />
//           )
//         })}

//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h3>{this.state.selectedPlace.name}</h3>
//           </div>
//         </InfoWindow>

//       </Map>
//     );
//   }
//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });

//   onClose = props => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };
// }

// export default GoogleApiWrapper({
//   apiKey: REACT_APP_GOOGLE_MAPS_API_KEY
// })(MapContainer);