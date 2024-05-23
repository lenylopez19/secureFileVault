
/**
 * Function to format a date string into a human-readable date and time string.
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} - The formatted date and time string in 'MM/DD/YYYY, HH:MM:SS AM/PM' format.
 */
export function formatDateAndTime(dateString) {

  const date = new Date(dateString);

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC'
  };

  return new Intl.DateTimeFormat('en-US', options).format(date)

}