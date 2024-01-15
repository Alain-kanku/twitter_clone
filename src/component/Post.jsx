import React from 'react'
import "../css/Post.css"
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

export default function Post({ Displayname, Username, Verified, Text, Image, Avatar }) {

    return (
        <>
            <div className='post'>
                <div className="post__avatar">
                    {/* <Avatar src={""} /> */}
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                Donald Trump {""}
                                <span><VerifiedIcon className='post__badge' /></span>
                            </h3>
                        </div>
                        <div className="post__headerDescription">
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet, laboriosam quibusdam maxime architecto dolorem doloribus natus voluptas molestias vero, veritatis nam, perferendis soluta enim eius exercitationem! Quod, hic at.Lorem ipsum, dolor sit amet consectetur magnam quos impedit voluptas nemo?</p>
                        </div>
                    </div>
                    <img src="https://www.lejdd.fr/lmnr/f/webp/rcrop/960,640,FFFFFF,forcey,center-middle/img/var/jdd/public/styles/paysage/public/media/image/2022/11/16/07/etats-unis-donald-trump-de-nouveau-candidat-a-la-presidentielle.jpg?VersionId=.fnrpjhM023DVUhZDkFYEHEoHxkEpUxn" alt="" />
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>
                </div>
            </div>
        </>
    )
}

