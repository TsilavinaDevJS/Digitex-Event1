import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./config/theme";
import { RenderRoutes, ROUTES } from "./config/routes";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          /*bgcolor: theme.palette.background.default*/ background:
            "linear-gradient(45deg, #36d1dc 1%, #5b86e5 40%,#5b86e5 10%,#36d1dc 70%, #36d1dc 35%, #5b86e5 90%)",
        }}>
        <RenderRoutes routes={ROUTES} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
