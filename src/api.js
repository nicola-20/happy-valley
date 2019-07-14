const contentful = require("contentful");
const { REACT_APP_SPACE_ID, REACT_APP_ACCESS_TOKEN } = process.env.NODE_ENV === 'production' ? process.env : require('./config');

const client = contentful.createClient({
  space: REACT_APP_SPACE_ID,
  accessToken: REACT_APP_ACCESS_TOKEN
});

exports.fetchEvents = (day, category) => {
  const query = { content_type: "event", select: "fields" }
  if (category && category !== "Category") query['fields.type'] = category
  if (day && day !== "Day") {
    query['fields.date_time[lte]'] = day.endDate
    query['fields.date_time[gte]'] = day.startDate
  }
  return client.getEntries(query)
};