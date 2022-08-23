import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";



const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g"
  });
  
  export default function Basemap2() {
    const onDrawCreate = ({ features }) => {
      console.log(features);
    };
  
    const onDrawUpdate = ({ features }) => {
      console.log(features);
    };
  
    return (
      <div>
        <h2>Города России</h2>
        <Map
        initialViewState={{
            longitude: 0,
            latitude: 0,
            zoom: 14
          }}
          style="mapbox://styles/mapbox/light-v10" // eslint-disable-line
          containerStyle={{
            height: "900px",
            width: "100vw"
          }}
        >
          <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate} />
        </Map>
      </div>
    );
  }