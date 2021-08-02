import React from 'react';
import SidebarOption from '../sidebarOptions/SidebarOption';
import "./Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from '../../stateProvider/DataLayer';
 

function Sidebar() {
  const [{playlists}, dispatch] = useDataLayerValue();
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
 
 {playlists?.items?.map((playlist)=>(<SidebarOption title={playlist.name} key={playlist.index}/>))}
    </div>
  )
}

export default Sidebar
