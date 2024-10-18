import LoginIcon from "@mui/icons-material/Login";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export const LoginButton = () => {
  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/google`;
  };

  return (
    <Tooltip title="Login">
      <IconButton aria-label="login" onClick={handleLogin}>
        <LoginIcon />
      </IconButton>
    </Tooltip>
  );
};
