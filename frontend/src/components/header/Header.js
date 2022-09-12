import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

import './Header.css';
import HeaderOption from '../headerOption/HeaderOption';
import Logo from './LI-In-Bug.png';
const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img src={Logo} alt="logo" className="header__img" />
        <div className="header__search">
          <SearchSharpIcon />
          <input
            type="text"
            name="search-input" 
            className="header__search__input"
            placeholder="Search" />
        </div>
      </div>


      <div className="header__right">
        <HeaderOption Icon={HomeIcon} text="Home"/>
        <HeaderOption Icon={PeopleIcon} text="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} text="Jobs"/>
        <HeaderOption Icon={MessageIcon} text="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} text="Notifications"/>
        <HeaderOption Icon={PeopleIcon} text="My Network"/>
        <HeaderOption avatar={Logo} text="Me"/>
      </div>
    </header>
  )
}

export default Header