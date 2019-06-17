const contentful = require("contentful");
const { REACT_APP_SPACE_ID, REACT_APP_ACCESS_TOKEN } = process.env.NODE_ENV === 'production' ? process.env : require('./config');

const client = contentful.createClient({
  space: REACT_APP_SPACE_ID,
  accessToken: REACT_APP_ACCESS_TOKEN
});

exports.fetchEvents = () => {
  return client.getEntries({ content_type: "event" })
};