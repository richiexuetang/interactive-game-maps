import { hiddenCategoriesAtom } from "@/store";
import { currentGroupsAtom } from "@/store/map";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useAtom, useAtomValue } from "jotai";

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
  const [hiddenCategories, setHiddenCategories] = useAtom(hiddenCategoriesAtom);
  const groups = useAtomValue(currentGroupsAtom);

  const showAll = () => {
    groups?.map((group) =>
      group.categories?.map((category) => {
        if (hiddenCategories.includes(category.id)) {
          setHiddenCategories((prev) => prev.filter((p) => p !== category.id));
        }
      })
    );
  };

  const hideAll = () => {
    groups?.map((group) =>
      group.categories?.map((category) => {
        if (!hiddenCategories.includes(category.id)) {
          setHiddenCategories((prev) => [...prev, category.id]);
        }
      })
    );
  };

  return (
    <div className="flex gap-5">
      <UnderlineButton onClick={showAll}>SHOW ALL</UnderlineButton>
      <UnderlineButton onClick={hideAll}>HIDE ALL</UnderlineButton>
    </div>
  );
};
