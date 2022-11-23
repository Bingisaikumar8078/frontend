import React from 'react'

function ProtectedRoutes({children}) {
  return (
    <div>ProtectedRoutes
        <div>
            {children}
        </div>
    </div>
  )
}

export default ProtectedRoutes