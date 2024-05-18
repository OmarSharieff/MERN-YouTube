import SearchBar from '../Searchbar/SearchBar';
import logo from './logo.ico';
import './Navbar.css';
import {RiVideoAddLine} from 'react-icons/ri';
import {IoMdNotificationsOutline} from 'react-icons/io';
import { IoMdApps } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = ({toggleDrawer}) => {
  // const currentUser = null;
  const currentUser = {
    result: {
      email: "abc@gmail.com",
      joinedOn: "2222-07-15T09:57:23.489Z"
    },
  };
  return (
    <div className="Container_Navbar">
      <div className="Burger_Logo_Navbar">
        <div className="burger" onClick={()=>toggleDrawer()}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <Link to="/" className='logo_div_Navbar'>
          <img src={logo} alt="" height={35} width={50}/>
          <p className='logo_title_navbar'>YouTube</p>
        </Link>
      </div>
        <SearchBar/>
        <RiVideoAddLine size={22} className="vid_bell_Navbar"/>
        <IoMdApps color='white' size={22} className='vid_bell_Navbar' />
        <IoMdNotificationsOutline size={22} className="vid_bell_Navbar"/>
        <div className="Auth_cont_Navbar">
          {currentUser ? (
            <div className='channel_logo_App'>
              <p className='first_char_logo_App'>
                {
                  currentUser?.result.name ? (
                    <>
                    {
                      currentUser?.result.name.charAt(0).toUpperCase()
                    }
                    </>
                  ) : (
                  <>
                    {
                      currentUser?.result.email.charAt(0).toUpperCase()
                    }
                  </>
                  )
                }
              </p>
            </div>
            )
            : (
            <>
              <p className="Auth_Btn">
                <BiUserCircle size={22}/>
                <b>Sign In</b>
              </p>
            </>
            )
          }
          
        </div>
    </div>
  )
}

export default Navbar
