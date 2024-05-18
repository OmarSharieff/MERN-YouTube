import React, { useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {MdPlaylistAddCheck} from 'react-icons/md'
import {AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine} from 'react-icons/ri'
import './LikeWatchLaterSaveBtns.css'

function LikeWatchLaterSaveBtns() {
  const [saveVideo, setSaveVideo] = useState(true);
  const [dislikeBtn,setDislikeBtn] = useState(false);
  const [likeBtn,setLikeBtn] = useState(false);
  
  const toggleSavedVideo = ()=> {
    saveVideo ? setSaveVideo(false) : setSaveVideo(true);
  }

  const toggleLikeBtn = ()=> {
    if(likeBtn) {
      setLikeBtn(false);
    } else {
      setLikeBtn(true);
    }
  }

  const toggleDislikeBtn = ()=> {
    if(dislikeBtn) {
      setDislikeBtn(false);
    } else {
      setDislikeBtn(true);
    }
  }

  return (
    <div className='btns_cont_videoPage'>
      <div className="btn_videoPage">
        <BsThreeDots/>
      </div>
      <div className='btn_videoPage'>
        <div className='like_videoPage' onClick={toggleLikeBtn}>
          {
            likeBtn ? (
              <>
                <AiFillLike size={22} className='btns_videoPage'/>
              </>
            ) : (
              <>
                <AiOutlineLike size={22} className='btns_vidoePage'/>
              </>
            )
          }
          <b>LIKE</b>
        </div>
        <div className='like_videoPage' onClick={toggleDislikeBtn}>
          {
            dislikeBtn ? (
              <>
                <AiFillDislike size={22} className='btns_videoPage'/>
              </>
            ) : (
              <>
                <AiOutlineDislike size={22} className='btns_vidoePage'/>
              </>
            )
          }
          <b>DISLIKE</b>
        </div>
        <div className='likke_videoPage' onClick={toggleSavedVideo}>
          {
            saveVideo ? (
              <>
                <RiPlayListAddFill size={22} className='btns_videoPage'/>
                <b>Save</b>
              </>
            ) : (
              <>
                <MdPlaylistAddCheck size={22} className='btns_vidoePage'/>
                <b>Saved</b>
              </>
            )
          }
        </div>
        <div className='like_videoPage'>
          <>
            <RiHeartAddFill size={22} className='btns_videoPage'/>
            <b>Thanks</b>            
          </>
        </div>
        <div className='like_videoPage'>
          <>
            <RiShareForwardLine size={22} className='btns_videoPage'/>
            <b>Share</b>            
          </>
        </div>
        
      </div>
    </div>
  )
}

export default LikeWatchLaterSaveBtns
