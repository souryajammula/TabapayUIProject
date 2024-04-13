// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: '#120880',
//         color: 'white',
//         textAlign: 'center',
//         py: 2,
//         position: 'fixed',
//         bottom: 0,
//         left: 0,
//         width: '100%',
//         zIndex: (theme) => theme.zIndex.drawer + 1,
//       }}
//     >
//       <Typography variant="body2">
//         This is the footer. Replace this text with your footer content.
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#120880',
        color: 'white',
        textAlign: 'center',
        py: 2,
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Typography variant="body2">
       © Copyright
      </Typography>
    </Box>
  );
};

export default Footer;
