export const convertDate = (date_time) => {
  const dateTime = date_time.toUTCString()
  const dayOfWeek = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(date_time)
  const date = `${dateTime.split(', ')[1].split(' ')[0]} ${dateTime.split(', ')[1].split(' ')[1]}`
  const time = dateTime.split(' ')[4].slice(0, -3)
  return `${dayOfWeek} ${date} ${time}`
}