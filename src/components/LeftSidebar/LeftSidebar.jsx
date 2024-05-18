import React from 'react'
import {NavLink} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary} from 'react-icons/md'
import shorts from './shorts.png'
import './LeftSidebar.css'
const LeftSidebar = () => {
  return (
    <div className='container_leftSidebar'>
      <NavLink className="icon_sidebar_div">
        <AiOutlineHome size={22} className='icon_sidebar'/>
        <div className="text_sidebar_icon">
          Home
        </div>
      </NavLink>
      <NavLink className="icon_sidebar_div">
        <MdOutlineExplore size={22} className='icon_sidebar'/>
        <div className="text_sidebar_icon">
          Explore
        </div>
      </NavLink>
      <NavLink className="icon_sidebar_div">
        <img src={shorts} width={22} className='icon_sidebar'/>
        <div className="text_sidebar_icon">
          Shorts
        </div>
      </NavLink>
      <NavLink to="" className="icon_sidebar_div">
        <MdOutlineSubscriptions size={22} className='icon_sidebar'/>
        <div className="text_sidebar_icon" style={{fontSize:"12px"}}>
          Subscriptions
        </div>
      </NavLink>
      <NavLink to="/library" className="icon_sidebar_div">
        <MdOutlineVideoLibrary size={22} className='icon_sidebar'/>
        <div className="text_sidebar_icon" >
          Library
        </div>
      </NavLink>
    </div>
  )
}

export default LeftSidebar
