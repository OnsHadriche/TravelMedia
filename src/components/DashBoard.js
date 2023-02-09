import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from "./TabPanel";
// import HotelCreatedByPage from "./HotelCreatedByPage";
// import PackCreatedByPage from "./PackCreatedByPage";
// import EventCreatedByPage from "./EventCreatedByPage";


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function DashBoard() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Hotels" {...a11yProps(0)} />
          <Tab label="Packages" {...a11yProps(1)} />
          <Tab label="Events" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* <HotelCreatedByPage/> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <PackCreatedByPage/> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <EventCreatedByPage/> */}
      </TabPanel>
    </Box>
  );
}


export default DashBoard