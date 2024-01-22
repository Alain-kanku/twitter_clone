import React from 'react'
import "../css/Widgets.css"
import SidebarWidgets from './SidebarWidgets'
import SidebarWhoFollow from './SidebarWhoFollow'
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';



export default function Widgets() {

  return (
    <div className='Widgets'>
      <div className="Widgets__one">
        <SearchIcon className="Widgets__SearchIcon" />
        <input placeholder='Search Twitter' type="text" />
      </div>

      <div className="Widgets__widgetsContainer">

        <div className="Widgets__two">
          <div className="Widgets__two__trendTitle">
            <h4>Trends for you</h4>
            <SettingsOutlinedIcon fontSize='medium' />
          </div>
          <SidebarWidgets />
          <SidebarWidgets />
          <SidebarWidgets />
          <SidebarWidgets />
          <SidebarWidgets />

          <h5>Show more</h5>
        </div>

        <div className="Widgets__three">
          <div className="Widgets__three__FollowTitle">
            <h4>Who to follow</h4>
          </div>

          <SidebarWhoFollow />
          <SidebarWhoFollow />
          <SidebarWhoFollow />
         

          <h5>Show more</h5>
        </div>
        {/* <TwitterTweetEmbed tweetId={"858551177860055040"} />

          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        /> */}
      </div>
    </div>
  )
}
