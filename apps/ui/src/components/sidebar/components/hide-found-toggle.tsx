import { useMutation } from "@apollo/client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { TOGGLE_HIDE_FOUND } from "@/lib/graphql/constants";
import { useAuthStore } from "@/store";

/**
 * Button to toggle the user's hide found setting
 *
 * @returns
 */
export const HideFoundToggle = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const [toggleUserHideFound] = useMutation(TOGGLE_HIDE_FOUND, {
    onCompleted: (data) =>
      setUser({ ...user!, hideFound: data.toggleHideFoundSetting.hideFound }),
  });

  const toggleHideFound = () => {
    if (!user) return;

    toggleUserHideFound({
      variables: { data: { email: user.email, hide: !user.hideFound } },
    });
  };

  return (
    <Button
      variant="text"
      sx={{ color: "var(--accent-color)" }}
      startIcon={user?.hideFound ? <VisibilityIcon /> : <VisibilityOffIcon />}
      onClick={toggleHideFound}
    >
      {user?.hideFound ? "Show Found" : "Hide Found"}
    </Button>
  );
};
