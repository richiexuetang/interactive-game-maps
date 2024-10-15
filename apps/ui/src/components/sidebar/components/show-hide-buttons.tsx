import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useMapStore } from "@/store/map";

const UnderlineButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: theme.shape.borderRadius,
  fontSize: 12,
  backgroundColor: "none",
  borderColor: "none",
  color: "var(--text-color)",
  "&:hover": {
    backgroundColor: theme.palette.grey[900],
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
}));

export const ShowHideButtons = () => {
  const setMap = useMapStore((state) => state.setCurrentMap);
  const currentMap = useMapStore((state) => state.currentMap);
  const map = useMapStore((state) => state.currentMap);

  const showAll = () => {
    setMap({ ...currentMap!, hiddenCategories: [] });
  };

  const hideAll = () => {
    const allCategories: number[] = [];
    map?.groups?.map(({ categories }: any) =>
      categories?.map(({ id }: any) => allCategories.push(id))
    );
    setMap({
      ...currentMap!,
      hiddenCategories: allCategories,
    });
  };

  return (
    <div className="flex gap-5 content-center justify-center">
      <UnderlineButton onClick={showAll}>SHOW ALL</UnderlineButton>
      <UnderlineButton onClick={hideAll}>HIDE ALL</UnderlineButton>
    </div>
  );
};
