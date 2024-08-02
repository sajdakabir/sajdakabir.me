// utils.js
export function getFormattedDate(date, options) {
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }
  