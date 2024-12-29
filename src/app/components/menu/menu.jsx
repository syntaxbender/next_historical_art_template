import React from 'react'
import DesktopMenu from './desktopNav/desktopNav'

const Menu = ({items}) => {
  return (
    <>
      <div className="d-none d-lg-block col-12">
        <DesktopMenu items={items} />
      </div>
      {/* <div className="d-none d-lg-block col-2">
        <CustomButton/>
      </div> */}
    </>
  )
}

export default Menu