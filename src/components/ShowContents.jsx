import React, { useState } from 'react';
import { Tabs, Tab, Card, CardContent, Grid, Typography, Toolbar } from '@mui/material';

function ShowContents({ selectedItem }) {
  const [selectedTab, setSelectedTab] = useState(0);
  console.log(selectedItem)
  let textArr=(selectedItem?.contents?.length >0) ? selectedItem.contents : [];
  let tabData=[];
  if (textArr != []) {
    tabData = textArr?.map(item => ({
      label: item.heading,
      content: item.para
    }));
  }
  

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Typography paragraph> {selectedItem?.description} </Typography>
      <Tabs textColor="inherit"
        indicatorColor="primary" value={selectedTab} onChange={handleTabChange} variant="scrollable">
        {tabData.map((tab, index) => (
          <Tab label={tab.label} key={index} />
        ))}
      </Tabs>
      <Toolbar/>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ maxWidth: 400 }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {tabData[selectedTab]?.label}
              </Typography>
              <Typography color="textSecondary" variant="body1" component="div">
                <p>{tabData[selectedTab]?.content}</p>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ShowContents;
