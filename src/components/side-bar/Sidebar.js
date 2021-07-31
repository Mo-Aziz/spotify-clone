import React from 'react';
import SidebarOption from '../sidebarOptions/SidebarOption';
import "./Sidebar.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
 

function Sidebar() {
  return (
    <div className="sidebar">
 <img
 className="sidebar__logo" src="https://iaudioguide.com/wp-content/uploads/2014/12/spotify-logo-primary-horizontal-dark-background-rgbizi-300x106.jpg" alt="sptofiy-logo"/>

 <SidebarOption Icon={HomeIcon} title="Home"/>
 <SidebarOption Icon={SearchIcon} title="Search"/>
 <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
 <br/>
 <strong className="sidebar__title">PLAY LISTS</strong>
 <hr/>
 <SidebarOption title="Hip hop"/>
 <SidebarOption title="Rock"/>
 <SidebarOption title="RnB"/>
    </div>
  )
}

export default Sidebar
