import { Typography, Box, Stack } from '@mui/material';
import logo from '../assets/shopping-logo.png'; 

const Header = () => {
  return (
    <Box sx={{ padding: 2, borderBottom: '1px solid #ccc' }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <img src={logo} alt="Logo" style={{ height: 40 }} />
        <Typography variant="h5" component="div" fontWeight="bold">
          My Shopping Site
        </Typography>
      </Stack>
    </Box>
  );
};

export default Header;
