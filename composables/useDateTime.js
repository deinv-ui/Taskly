export const formatGMT8 = (isoString) => {
  const date = new Date(isoString)
  const offset = 8 * 60 // GMT+8 in minutes
  const gmt8 = new Date(date.getTime() + offset * 60 * 1000)
  return gmt8.toLocaleString()
}
