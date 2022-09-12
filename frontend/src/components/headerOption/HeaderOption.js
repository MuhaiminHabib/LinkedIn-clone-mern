import './HeaderOption.css'
import { Avatar } from '@mui/material'

const HeaderOption = ({Icon, avatar, text}) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon"/>}
      {avatar && 
        <Avatar 
          className="headerOption__icon"
          alt="Avatar Image" 
          src={avatar} />}
      <p className="headerOption__text">{text}</p>
    </div>
  )
}

export default HeaderOption