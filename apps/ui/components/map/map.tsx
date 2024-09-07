import {
  MarkerGroup,
  MarkerLocation,
  Region,
} from "@/app/__generated__/graphql";
import dynamic from "next/dynamic";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

const DynamicMap = dynamic(() => import("./dynamic-map"), {
  ssr: false,
});

export interface MapProps {
  region: Region;
  groups: MarkerGroup[];
  markers: MarkerLocation[];
}

const Map = ({ region, groups, markers }: MapProps) => {
  return (
    <div className="w-[98%] h-screen overflow-y-hidden top-0 bottom-0">
      <div className="overflow-y-scroll absolute left-0 top-10 z-[499] w-96 transition-transform border-r-blue-50 border-1 border-l-0 h-[650px] my-5">
        <div className="relative flex flex-col py-5">
          {groups?.map((group) => (
            <div
              key={group.title}
              className="pl-6 flex flex-col content-center gap-2 pb-4"
            >
              <h1 className="text-lg">{group.title}</h1>
              {group.categories?.map((category) => (
                <span
                  key={category.title}
                  className="text-center inline-block content-center"
                >
                  {category.title}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <DynamicMap region={region} markers={markers} />
    </div>
  );
};

export default Map;
