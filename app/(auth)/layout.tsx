import React from 'react'

const LayOut = ({ children }: { children: React.ReactNode}) => {
  return (
    <main className='auth'>
      {children}
    </main>
  )
}

export default LayOut
