import { showMarkerAtom } from "@/store";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useSetAtom } from "jotai";

const UnderlineButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: theme.shape.borderRadius,
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
  const setShowMarker = useSetAtom(showMarkerAtom);

  return (
    <div className="flex gap-5">
      <UnderlineButton onClick={() => setShowMarker(true)}>
        <span className="text-text text-sm">SHOW ALL</span>
      </UnderlineButton>
      <UnderlineButton onClick={() => setShowMarker(false)}>
        <span className="text-text text-sm">HIDE ALL</span>
      </UnderlineButton>
    </div>
  );
};
