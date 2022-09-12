

import SearchSharpIcon from '@mui/icons-material/SearchSharp';


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
          <input type="text" name="search-input" className="header__search__input" />
        </div>
      </div>


      <div className="header__right">
        <HeaderOption />
        <HeaderOption />
        <HeaderOption />
        <HeaderOption />
        <HeaderOption />
        <HeaderOption />
        <HeaderOption />
        
      </div>
    </header>
  )
}

export default Header