import React from 'react';
import {Menu, Layout} from 'antd'
import Link from 'next/link'

export default function NavbarMain() {
    return (
        <Layout className="navbar">
        <div >
        <Menu className="menu">
          
        {/* <i onClick={()=>showDrawer()} className="material-icons menu-icon">dehaze</i> */}
        <h2 className="h2-nav">
         
          <Link href="/"><a>gudofConvert</a></Link>
          </h2></Menu>
        </div>
        </Layout>
  )
}

