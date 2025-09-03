import { Box } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

function App() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
      }}
    >
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
