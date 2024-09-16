import { useState } from "react";
import { SearchIcon } from "../icons/search-icon";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { searchFilterMarkerAtom, triggeredMarkerIdAtom } from "@/store/marker";
import { useDebounceCallback } from "@/hooks/use-debounce-callback";
import { useMap } from "react-leaflet";
import { currentMarkersAtom } from "@/store/map";

export const MarkerSearch = () => {
  const [showInput, setShowInput] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchFilterMarker, setSearchFilterMarker] = useAtom(
    searchFilterMarkerAtom
  );
  const [showFiltered, setShowFiltered] = useState(false);
  const markers = useAtomValue(currentMarkersAtom);

  const setTriggeredMarkerId = useSetAtom(triggeredMarkerIdAtom);
  const map = useMap();
  const debounced = useDebounceCallback(setSearchFilterMarker, 500);

  const inputSearchChange = (input: string) => {
    setSearchKeyword(input);
    let filtered =
      markers?.filter((marker) =>
        marker.title.toLowerCase().includes(input.toLowerCase())
      ) ?? [];
    if (input === "") {
      filtered = [];
    }
    debounced(filtered);
  };

  return (
    <div className="absolute top-14 right-2 z-[1000]">
      {showInput ? (
        <Input
          placeholder="Search for marker"
          onBlur={() => setShowInput(false)}
          onFocus={() => setShowFiltered(true)}
          value={searchKeyword}
          onChange={(e) => inputSearchChange(e.target.value)}
        />
      ) : (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowInput(!showInput)}
        >
          <SearchIcon className="h-5 w-5" />
        </Button>
      )}
      {searchFilterMarker?.length > 0 && showFiltered && (
        <div className="flex flex-col gap-5 bg-slate-400">
          {searchFilterMarker.map((marker) => (
            <span
              key={marker.id}
              onClick={() => {
                map.panTo([marker.latitude, marker.longitude]);
                setTriggeredMarkerId(marker.id);
                setShowFiltered(false);
              }}
            >
              {marker.title}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
