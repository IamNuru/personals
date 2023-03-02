import { Outlet } from "react-router-dom";
// material
import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <Box>
      <Navbar />
      <Box sx={{ maxWidth: '64rem', mx: 'auto', mt: '1.8rem' }}>
        <Outlet />
      </Box>
      {/* <Footer /> */}
    </Box>
  );
}
