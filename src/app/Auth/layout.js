import ResponsiveAppBar from '@/Components/Home/Utility/ResponsiveAppBar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <ResponsiveAppBar shadow="shadow-md " position="fixed"  />
      {children}
    </div>
  )
}

export default layout
