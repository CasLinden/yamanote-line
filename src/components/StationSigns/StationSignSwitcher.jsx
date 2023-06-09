import JRStationSign from "./UniqueSigns/JRStationSign";
import TokyoMetroSign from "./UniqueSigns/TokyoMetroSign";

import DefaultStationSign from "/src/components/StationSigns/UniqueSigns/DefaultStationSign";

function StationSignSwitcher({ station, group, pick }) {
  switch (group) {
    case "JR":
      return <JRStationSign station={station} pick={pick}/>;
    case "Metro":
      return <TokyoMetroSign station={station} pick={pick}/>
    default:
      return <DefaultStationSign station={station} pick={pick}/>;
  }
}

export default StationSignSwitcher;