import { MarkerGroup, MarkerLocation } from "@/app/__generated__/graphql";
import { hiddenCategoriesAtom } from "@/store/category";
import { showMarkerAtom } from "@/store/marker";
import { Checkbox } from "@nextui-org/checkbox";
import { useAtom } from "jotai";

interface MenuProps {
  groups: MarkerGroup[];
  markers: MarkerLocation[];
}

export const Menu = ({ groups, markers }: MenuProps) => {
  const [showMarker, setShowMarker] = useAtom(showMarkerAtom);
  const [hiddenCategories, setHiddenCategories] = useAtom(hiddenCategoriesAtom);

  const toggleShowMarker = () => setShowMarker(!showMarker);
  const handleHiddenCategory = (category: string) => {
    if (hiddenCategories.includes(category)) {
      const newCategories = hiddenCategories.filter(
        (category) => category != category
      );
      setHiddenCategories(newCategories);
    } else {
      setHiddenCategories((prev) => [...prev, category]);
    }
  };

  return (
    <div className="overflow-y-scroll absolute left-0 top-3 z-[499] w-96 transition-transform bg-zinc-900 border-r-blue-50 border-1 border-l-0 h-[90%] my-5">
      <div className="relative flex flex-col py-5">
        <Checkbox isSelected={!showMarker} onValueChange={toggleShowMarker}>
          {showMarker ? "Hide All" : "Show All"}
        </Checkbox>
        {groups?.map((group) => {
          const counts: any = {};

          group.categories?.map((category) => {
            const count = markers?.filter(
              ({ categoryId }) => categoryId == parseInt(category.id)
            ).length;
            counts[`${category.title}`] = count;
          });

          const sumValues = Object.values(counts).reduce(
            (a: any, b: any) => a + b,
            0
          );

          if (sumValues === 0) return null;

          return (
            <div
              key={group.title}
              className="pl-6 flex flex-col content-center gap-2 pb-4"
            >
              <h1 className="text-lg">{group.title}</h1>
              {group.categories?.map((category) => {
                const count = markers?.filter(
                  ({ categoryId }) => categoryId == parseInt(category.id)
                ).length;

                if (count === 0) return null;

                return (
                  <div
                    key={category.title}
                    className="flex gap-2 justify-center cursor-pointer"
                    onClick={() => handleHiddenCategory(category.id)}
                  >
                    <span className="text-center inline-block content-center">
                      {category.title}
                    </span>
                    <p>{count}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
