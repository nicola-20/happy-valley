import React from 'react';
import {
  Box,
  Heading,
  Paragraph,
  Text,
  Layer,
  ThemeContext,
  Button,
  Select
} from 'grommet'
import { fetchEvents } from '../api.js'
import EventOverlay from './EventOverlay'

const Schedule = () => {

  const [showEvent, setShowEvent] = React.useState(false)

  const [events, setEvents] = React.useState([])
  const [categories, setCategories] = React.useState([])

  React.useEffect(() => {
    fetchEvents().then(({ items }) => {
      const events = items.map(({ fields: { date_time, ...eventInfo } }) => {
        return {
          date_time: new Date(date_time),
          ...eventInfo
        }
      })
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
    fetchEvents(day, category).then(({ items }) => {
      setEvents(items.map(({ fields: { date_time, ...eventInfo } }) => {
        return {
          date_time: new Date(date_time),
          ...eventInfo
        }
      }))
    })
  }, [day, category])

  const days = [
    { day: 'Monday', startDate: new Date('July 22 2019 00:01'), endDate: new Date('July 22 2019 23:59'), color: '#bb1542' },
    { day: 'Tuesday', startDate: new Date('July 23 2019 00:01'), endDate: new Date('July 23 2019 23:59'), color: '#eb5f5d' },
    { day: 'Wednesday', startDate: new Date('July 24 2019 00:01'), endDate: new Date('July 24 2019 23:59'), color: '#fabc74' },
    { day: 'Thursday', startDate: new Date('July 25 2019 00:01'), endDate: new Date('July 25 2019 23:59'), color: '#239f95' },
    { day: 'Friday', startDate: new Date('July 26 2019 00:01'), endDate: new Date('July 26 2019 23:59'), color: '#008bc1' },
    { day: 'Saturday', startDate: new Date('July 27 2019 00:01'), endDate: new Date('July 27 2019 23:59'), color: '#6d4189' },
    { day: 'Sunday', startDate: new Date('July 28 2019 00:01'), endDate: new Date('July 28 2019 23:59'), color: '#c73581' },
  ]

  return (
    <Box background="status-ok" fill={true} direction="column" align="center">

      <ThemeContext.Extend value={{
        paragraph: {
          medium: {
            maxWidth: "80vw"
          }
        }
      }}>
        <Box margin={{ top: "large", bottom: "medium" }} width="80vw">
          <Heading level="2" alignSelf="start" margin={{ vertical: "medium" }}>
            Schedule of Events
          </Heading>
          <Paragraph className="top-border-paragraph" margin="none">
          </Paragraph>
        </Box>
      </ThemeContext.Extend>

      <ThemeContext.Extend
        value={{
          global: {
            control: {
              border: {
                radius: "12px"
              }
            },
            input: {
              weight: 500
            },
            colors: {
              text: {
                light: "#239f95"
              }
            }
          },
          textInput: {
            extend: "padding: 0"
          },
          select: {
            background: "white",
            control: {
              extend: "padding: 3px 6px 5px 6px; background-color: white; width: 38vw;",
              open: {
                background: "#ece0fa",
                border: "1px solid #7D4CDB"
              }
            }
          }
        }}>
        <Box direction="row" width="80vw"
        >
          <Select
            options={[{ day: "Day" }, ...days]}
            labelKey="day"
            valueKey="day"
            icon={true}
            multiple={false}
            value={day}
            margin={{ right: "4vw" }}
            onChange={({ option }) => setDay(option)}
          />
          <Select
            options={["Category", ...categories]}
            icon={true}
            multiple={false}
            value={category}
            onChange={({ option }) => setCategory(option)}
          />
        </Box>
      </ThemeContext.Extend>

      <Box width="80vw" direction="column" overflow="scroll" margin={{bottom: "large", top: "small"}} height="75vh">

        {events.map((event, index) => {
          const dateTime = event.date_time.toUTCString()
          const dayOfWeek = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(event.date_time)
          const date = `${dateTime.split(', ')[1].split(' ')[0]} ${dateTime.split(', ')[1].split(' ')[1]}`
          const time = dateTime.split(' ')[4].slice(0, -3)
          return (

            <ThemeContext.Extend key={index} value={{ box: { extend: "min-height: 25vh" },
            global: {
              font: {
                size: "20px"
              }
            }
            }}>

              <Box direction="column" background="white" height="25vh" round="medium" margin={{ top: "medium", bottom: "medium" }} pad="medium">

                <Heading className="event-title" level="3" margin="none">{event.title}</Heading>
                <Text>{event.venue}</Text>
                <Text className="event-date">{dayOfWeek} {date} <Text className="event-time">{time}</Text></Text>

                <Button className="more-info" label="more info" primary={true} onClick={() => setShowEvent(event.title)} />

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
          )
        })}

      </Box>
    </Box>
  );
};

export default Schedule;
