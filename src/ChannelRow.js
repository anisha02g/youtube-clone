import React from 'react';
import './ChannelRow.css';
import {Avatar} from "@material-ui/core";
import  VerifiedIcon from "@material-ui/icons/CheckCircleOutlined"

function ChannelRow({image, verified,
Channel,
subs, 
noOfVideos,
description,}) {
    return (
        <div className='channelRow'>
            <Avatar className="channelRow_logo" alt={Channel} src={image}/>
            <div className="channelRow_text">
                <h4>{Channel} {verified && <VerifiedIcon/>}</h4>
                <p>
                    {subs} subscribers • {noOfVideos} videos 
                </p>
                <p>
                    {description}
                </p>

            </div>
        </div>
    )
}

export default ChannelRow
