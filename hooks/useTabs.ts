import * as React from 'react'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}
function useTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (newValue: number) => {
    setValue(newValue)
  }
  return {
    value,
    handleChange,
    a11yProps
  }
}

export default useTabs
