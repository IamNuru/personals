import { Outlet } from "react-router-dom";
// material
import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <Box sx={{height:'100%'}}>
      <Navbar />
      <Box sx={{ maxWidth: '64rem', mx: 'auto', mt: '1.8rem', height:'100%' }}>
        <Outlet />
      </Box>
    </Box>
  );
}
