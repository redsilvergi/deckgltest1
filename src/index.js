import { Deck, _GlobeView as GlobeView } from "@deck.gl/core";
import {
  ScatterplotLayer,
  SolidPolygonLayer,
  GeoJsonLayer,
  ArcLayer,
  TextLayer,
  BitmapLayer,
} from "@deck.gl/layers";
import { CSVLoader } from "@loaders.gl/csv";
import { load } from "@loaders.gl/core";
import { MapboxOverlay } from "@deck.gl/mapbox";

import mapboxgl from "mapbox-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";
const { MAPBOX_TOKEN } = require("../config");
mapboxgl.accessToken = MAPBOX_TOKEN;

const map = createMap("container");
initMap(map);
const deckOverlay = new MapboxOverlay({
  layers: [], //일단 비워두고 아래에서 업데이트 한다.
});
map.addControl(deckOverlay);

function createMap(containerID) {
  return new mapboxgl.Map({
    container: containerID, // container ID
    style: "mapbox://styles/mapbox/satellite-streets-v12", // style URL
    center: [127.6, 35.7], // starting position [lng, lat]
    zoom: 6, // starting zoom
    // projection: 'globe' // display the map as a 3D globe
  });
}

function initMap(map) {
  map.addControl(
    new MapboxLanguage({
      defaultLanguage: "ko",
    })
  );
}

const update = () => {
  const layers = [
    // new GeoJsonLayer({
    //   id: "base-world",
    //   data: "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson",
    //   // Styles
    //   stroked: false,
    //   filled: false,
    //   lineWidthMinPixels: 2,
    //   getLineColor: [5, 10, 40],
    //   getFillColor: [15, 40, 80],
    // }),
    //.. 넣고 싶은 레이어를 넣는다...
  ];

  deckOverlay.setProps({
    layers: layers,
  });
};

update();
//

// const deckgl = new Deck({
//   parent: document.getElementById("container"),
//   //views: new GlobeView(),
//   initialViewState: {
//     latitude: 36.686033,
//     longitude: 127.938015,
//     zoom: 10,
//     bearing: 0,
//     pitch: 0,
//   },
//   controller: true,
// });

// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
// const WORLD =
//   "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson";

// const update = () => {
//   const layers = [
//     // new SolidPolygonLayer({
//     //   id: 'background',
//     //   data: [
//     //     [[-180, 90], [180, 90], [180, -90], [-180, -90]]
//     //   ],
//     //   opacity: 0.5,
//     //   getPolygon: d => d,
//     //   stroked: false,
//     //   filled: true,
//     //   getFillColor: [5, 10, 40]
//     // }),
//     new GeoJsonLayer({
//       id: "base-world",
//       data: WORLD,
//       // Styles
//       stroked: true,
//       filled: true,
//       lineWidthMinPixels: 2,
//       getLineColor: [5, 10, 40],
//       getFillColor: [15, 40, 80],
//     }),
//   ];
//   deckgl.setProps({ layers });
// };

// update();
