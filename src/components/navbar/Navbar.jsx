import "./navbar.scss"

import DefaultProfilePic from '../../assets/profile/default_user_icon.png'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <span>Foodiescam</span>
                </Link>
                <HomeRoundedIcon/>
                <DarkModeRoundedIcon/>
                <GridViewRoundedIcon/>
                <div className="search">
                    <SearchRoundedIcon/>
                    <input type="text" placeholder="Search Foodiescam" />
                </div>
            </div>
            <div className="right">
                <PersonRoundedIcon/>
                <EmailRoundedIcon/>
                <NotificationsRoundedIcon/>
                <div className="user">
                    <img src={DefaultProfilePic} alt="Profile Pic" />
                    <span>Akila Tharuka</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar