import React from 'react'
import SideBar from '../components/shared/SideBar';
import MobileNav from '../components/shared/MobileNav';

const LayOut = ({ children }: { children: React.ReactNode}) => {
  return (
    <main className='root'>
      {/* sideBar */}
      <SideBar/>
      <MobileNav/>
      {/* sideNav */}
      <div className='root-container'>
        <div className='wrapper'>{children}</div>
      </div>
    </main>
  )
}

export default LayOut;
