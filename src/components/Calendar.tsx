import { onMount } from "solid-js";
import { Calendar } from '@fullcalendar/core'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'


export default function CalendarComponent(props: { events: any[] }) {
  onMount(() => new Calendar(document.getElementById("calendar")!, {
    plugins: [interactionPlugin, dayGridPlugin],
    initialView: 'dayGridMonth',
    editable: false,
    events: props.events,
    locale: "pl-PL",
    firstDay: 1,
  }).render())

  return <div id="calendar"></div>
}
