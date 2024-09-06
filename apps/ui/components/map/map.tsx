import { MarkerGroup, Region } from "@/app/__generated__/graphql";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./dynamic-map"), {
  ssr: false,
});

export interface MapProps {
  region: Region;
  groups: MarkerGroup[];
}

const Map = ({ region, groups }: MapProps) => {
  return (
    <div className="aspect-square overflow-y-hidden">
      <div className="overflow-x-auto overflow-y-hidden absolute left-0 z-[499] w-96 transition-transform bg-black border-r-blue-50 border-r-1 h-full">
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
      <DynamicMap region={region} />
    </div>
  );
};

export default Map;
