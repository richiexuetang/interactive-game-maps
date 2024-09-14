import { useState } from "react";
import { SearchIcon } from "../icons/search-icon";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Input } from "../ui/input";
import { useAtom, useSetAtom } from "jotai";
import { searchFilterMarkerAtom, triggeredMarkerIdAtom } from "@/store/marker";
import { useDebounceCallback } from "@/hooks/use-debounce-callback";
import { MarkerLocation } from "@/__generated__/graphql";
import { useMap } from "react-leaflet";

export const MarkerSearch = ({ markers }: { markers: MarkerLocation[] }) => {
  const [showInput, setShowInput] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchFilterMarker, setSearchFilterMarker] = useAtom(
    searchFilterMarkerAtom
  );
  const [showFiltered, setShowFiltered] = useState(false);

  const setTriggeredMarkerId = useSetAtom(triggeredMarkerIdAtom);
  const map = useMap();
  const debounced = useDebounceCallback(setSearchFilterMarker, 500);

  const inputSearchChange = (input: string) => {
    setSearchKeyword(input);
    let filtered = markers.filter((marker) =>
      marker.title.toLowerCase().includes(input.toLowerCase())
    );
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowInput(!showInput)}
              >
                <SearchIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Search...</TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
