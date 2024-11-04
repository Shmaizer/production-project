import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom';


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <React.Fragment>
        <nav>
          <h1>NAV сайта</h1>
          <Link to={'/'}>MainBTN</Link>
          <Link to={'/about'}>AboutBTN</Link>
        </nav>
        {children}
    </React.Fragment>
  )
}

export default Layout