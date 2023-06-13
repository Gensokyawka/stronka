import { toTemporalInstant } from "@js-temporal/polyfill";


export function formatDate(date: Date): string {
  return toTemporalInstant.call(date)
    .toZonedDateTimeISO("Europe/Warsaw")
    .toLocaleString("pl-PL", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
}
