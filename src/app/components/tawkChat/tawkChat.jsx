import React from 'react'

const tawkChat = () => {
    const tawkMessengerRef = useRef();
    
  return (
            <TawkMessengerReact
              propertyId="XXXXX"
              widgetId="XXXXX"
              ref={tawkMessengerRef}
            />
  )
}

export default tawkChat