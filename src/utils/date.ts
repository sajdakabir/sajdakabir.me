// utils.js
interface DateFormatOptions extends Intl.DateTimeFormatOptions {}

export function getFormattedDate(date: Date, options?: DateFormatOptions): string {
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
