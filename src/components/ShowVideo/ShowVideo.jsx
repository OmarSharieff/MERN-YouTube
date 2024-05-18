import React from 'react'
import './ShowVideo.css'
import {Link} from 'react-router-dom';
function ShowVideo({vid}) {
  return (
    <>
      <Link to={`/videopage/${vid?.id}`}>
        <video 
          src={`${vid.video_src}`}
          className='video_ShowVideo'
        />
      </Link>
      <div className="video_description">
        <div className="channel_logo_App">
          <div className='first_char_logo_App'>
            <>{vid?.uploader?.charAt(0).toUpperCase()}</>
          </div>
        </div>
        <div className="video_details">
          <p className="title_vid_ShowVideo">Title</p>
          <pre className='vid_views_UploadTime'>5-11-2024</pre>
          <pre className="vid_views_UploadTime">
            5 views <div className="dot"></div> video uploaded 3 hours ago
          </pre>
        </div>
      </div>
    </>
  )
}

export default ShowVideo
