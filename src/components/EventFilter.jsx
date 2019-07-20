import React from 'react';
import { ThemeContext, Box, Select } from 'grommet';

const days = [
  { day: 'Monday', startDate: new Date('July 22 2019 00:01'), endDate: new Date('July 22 2019 23:59') },
  { day: 'Tuesday', startDate: new Date('July 23 2019 00:01'), endDate: new Date('July 23 2019 23:59') },
  { day: 'Wednesday', startDate: new Date('July 24 2019 00:01'), endDate: new Date('July 24 2019 23:59') },
  { day: 'Thursday', startDate: new Date('July 25 2019 00:01'), endDate: new Date('July 25 2019 23:59') },
  { day: 'Friday', startDate: new Date('July 26 2019 00:01'), endDate: new Date('July 26 2019 23:59') },
  { day: 'Saturday', startDate: new Date('July 27 2019 00:01'), endDate: new Date('July 27 2019 23:59') },
  { day: 'Sunday', startDate: new Date('July 28 2019 00:01'), endDate: new Date('July 28 2019 23:59') },
]

const EventFilter = ({ categories, category, day, setCategory, setDay }) => {
  return (
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
            extend: "padding: 5px 6px 5px 6px; background-color: white; width: 40vw;",
            open: {
              background: "#ece0fa",
              border: "1px solid #7D4CDB"
            }
          }
        }
      }}>
      <Box direction="row" width="85vw"
      margin={{top: "small"}}>
        <Select
          options={[{ day: "Day" }, ...days]}
          labelKey="day"
          valueKey="day"
          icon={true}
          multiple={false}
          value={day}
          margin={{ right: "5vw" }}
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
  );
};

export default EventFilter;