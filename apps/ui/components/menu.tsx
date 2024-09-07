import { MarkerGroup } from "@/app/__generated__/graphql";
import { showMarkerAtom } from "@/store/marker";
import { Checkbox } from "@nextui-org/checkbox";
import { useAtom } from "jotai";

interface MenuProps {
  groups: MarkerGroup[];
}

export const Menu = ({ groups }: MenuProps) => {
  const [showMarker, setShowMarker] = useAtom(showMarkerAtom);
  const toggleShowMarker = () => setShowMarker(!showMarker);

  return (
    <div className="overflow-y-scroll absolute left-0 top-3 z-[499] w-96 transition-transform bg-zinc-900 border-r-blue-50 border-1 border-l-0 h-[90%] my-5">
      <div className="relative flex flex-col py-5">
        <Checkbox isSelected={!showMarker} onValueChange={toggleShowMarker}>
          {showMarker ? "Hide All" : "Show All"}
        </Checkbox>
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
  );
};
