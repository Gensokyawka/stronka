import { Map, TileLayer, Marker, Icon } from "leaflet";
import { onMount } from "solid-js";


interface Props {
  location: {
    lat: number;
    lon: number;
  }
}

export default function Location(props: Props) {

  onMount(() => {
    const latlon = [props.location.lat, props.location.lon] as [number, number];

    new Map(document.getElementById("map")!)
      .setView(latlon, 13)
      .addLayer(new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }))
      .addLayer(new Marker(latlon, { icon: new Icon({
        iconUrl: "/marker-icon-2x.png",
        iconSize: [20, 30],
        iconAnchor: [10, 30],
      }) }));
  })

  return <div id="map" style="height:20em;"></div>
}
