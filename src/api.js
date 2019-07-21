const contentful = require("contentful");
const { REACT_APP_SPACE_ID, REACT_APP_ACCESS_TOKEN } = process.env.NODE_ENV === 'production' ? process.env : require('./config');

const client = contentful.createClient({
  space: REACT_APP_SPACE_ID,
  accessToken: REACT_APP_ACCESS_TOKEN
});

const getEvents = async (day, category) => {
  const query = { content_type: "event", select: "fields", order: 'fields.date_time' }
  if (category && category !== "Category") query['fields.type'] = category
  if (day && day !== "Day") {
    query['fields.date_time[lte]'] = day.endDate
    query['fields.date_time[gte]'] = day.startDate
  }
  const results = await client.getEntries(query)
  return results.items.map(({ fields: { date_time, ...eventInfo } }) => {
    return {
      date_time: new Date(date_time),
      ...eventInfo
    }
  })
};

const getInstagramImages = async () => {
  const query = { content_type: "instagram_images", select: "fields" }
  const results = await client.getEntries(query)
  return results.items.map(({ fields }) => { return fields })
};

const getFAQs = async () => {
  const query = { content_type: "faq", select: "fields", order: 'fields.id' }
  const results = await client.getEntries(query)
  return results.items.map(({ fields }) => { return fields })
}

const getHashtags = async () => {
  const query = { content_type: "hashtag", select: "fields" }
  const results = await client.getEntries(query)
  return results.items.map(({ fields }) => { return fields })
}

const getSupporters = async () => {
  const query = { content_type: "supporter", select: "fields" }
  const results = await client.getEntries(query)
  return results.items.map(({ fields }) => { return fields })
}

export {
  getEvents, getInstagramImages, getFAQs, getHashtags, getSupporters
}