// DarkModeToggle.tsx
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useColorScheme } from "@mui/material/styles";

export default function DarkMode() {
  const { mode, setMode } = useColorScheme();
  if (!mode) return null;

  const handleToggle = () => {
    if (mode === "light") setMode("dark");
    else setMode("light");
  };

  const icon =
    mode === "light" ? (
      <LightModeIcon />
    ) : mode === "dark" ? (
      <DarkModeIcon />
    ) : (
      <SettingsBrightnessIcon />
    );

  const label =
    mode === "light"
      ? "Switch to Dark"
      : mode === "dark"
      ? "Switch to System"
      : "Switch to Light";

  return (
    <Tooltip title={label}>
      <IconButton
        onClick={handleToggle}
        sx={{
          bgcolor: "transparent",
          transition: "transform 0.15s ease",
          "&:hover": { bgcolor: "transparent" },
          "&:focus": { bgcolor: "transparent" },
          "&:active": { bgcolor: "transparent" },
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}
