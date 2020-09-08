import React from 'react'
import Box from '@material-ui/core/Box'

const TabPanel = ({children, value, index}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
    {value === index && (
      <Box p={3}>
        {children}
      </Box>
    )}
    </div>
  )
}

export default TabPanel