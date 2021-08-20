import React from 'react';
import ChannelRow from './ChannelRow.js';
import VideoRow from './VideoRow.js';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import "./SearchPage.css";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
                

            </div>
            <hr/>
            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AKedOLTmHlRY207ZAz3hIq9ayPyCoi4adxbZqbpbcEz5=s68-c-k-c0x00ffffff-no-rj"
            Channel="Netflix"
            verified 
            subs ="6M"
            noOfVideos ={678}
            description="Netflix and Chill"/>
            <hr/>
            <VideoRow 
            view="8M"
            subs="6M"
            description="Experience our planet's natural beauty and examine how climate change impacts all living creatures in this universe"
            timestamp="6 minutes ago"
            channel="Netflix"
            title="Our Planet|Forest|FULL EPISODE|Netflix"
            image="https://i.ytimg.com/vi/9FqwhW0B3tY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5e1tASc2XWN0ns_akcNuiudYJbw"
            />
            <VideoRow 
            view="8M"
            subs="6M"
            description="Experience our planet's natural beauty and examine how climate change impacts all living creatures in this universe"
            timestamp="6 minutes ago"
            channel="Netflix"
            title="Our Planet|Forest|FULL EPISODE|Netflix"
            image="https://i.ytimg.com/vi/9FqwhW0B3tY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5e1tASc2XWN0ns_akcNuiudYJbw"
            />
            <VideoRow 
            view="8M"
            subs="6M"
            description="Experience our planet's natural beauty and examine how climate change impacts all living creatures in this universe"
            timestamp="6 minutes ago"
            channel="Netflix"
            title="Our Planet|Forest|FULL EPISODE|Netflix"
            image="https://i.ytimg.com/vi/9FqwhW0B3tY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5e1tASc2XWN0ns_akcNuiudYJbw"
            />
            <VideoRow 
            view="8M"
            subs="6M"
            description="Experience our planet's natural beauty and examine how climate change impacts all living creatures in this universe"
            timestamp="6 minutes ago"
            channel="Netflix"
            title="Our Planet|Forest|FULL EPISODE|Netflix"
            image="https://i.ytimg.com/vi/9FqwhW0B3tY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5e1tASc2XWN0ns_akcNuiudYJbw"
            />
            <VideoRow 
            view="8M"
            subs="6M"
            description="Experience our planet's natural beauty and examine how climate change impacts all living creatures in this universe"
            timestamp="6 minutes ago"
            channel="Netflix"
            title="Our Planet|Forest|FULL EPISODE|Netflix"
            image="https://i.ytimg.com/vi/9FqwhW0B3tY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5e1tASc2XWN0ns_akcNuiudYJbw"
            />
            <VideoRow 
            view="8M"
            subs="6M"
            description="Experience our planet's natural beauty and examine how climate change impacts all living creatures in this universe"
            timestamp="6 minutes ago"
            channel="Netflix"
            title="Our Planet|Forest|FULL EPISODE|Netflix"
            image="https://i.ytimg.com/vi/9FqwhW0B3tY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5e1tASc2XWN0ns_akcNuiudYJbw"
            />
            <VideoRow 
            view="8M"
            subs="6M"
            description="Experience our planet's natural beauty and examine how climate change impacts all living creatures in this universe"
            timestamp="6 minutes ago"
            channel="Netflix"
            title="Our Planet|Forest|FULL EPISODE|Netflix"
            image="https://i.ytimg.com/vi/9FqwhW0B3tY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5e1tASc2XWN0ns_akcNuiudYJbw"
            />
            <VideoRow 
            view="8M"
            subs="6M"
            description="Experience our planet's natural beauty and examine how climate change impacts all living creatures in this universe"
            timestamp="6 minutes ago"
            channel="Netflix"
            title="Our Planet|Forest|FULL EPISODE|Netflix"
            image="https://i.ytimg.com/vi/9FqwhW0B3tY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5e1tASc2XWN0ns_akcNuiudYJbw"
            />
        </div>
    )
}

export default SearchPage;
