import React from 'react'
import vid from '../../components/Video/vid.mp4'
import WHL from '../../components/WHL/WHL';

const LikedVideo = () => {
  const LikedVideos = [
    {
      id: 1,
      video_src: vid,
      Channel: "62bafe6752cea35a6c30685f",
      title: "Earth Spinning Clip",
      uploader: "ABC",
      description: "description of video 1"
    },
    {
      id: 2,
      video_src: vid,
      Channel: "cdd",
      title: "video 2",
      uploader: "ABC",
      description: "description of video 2"
    },
    {
      id: 3,
      video_src: vid,
      Channel: "add",
      title: "video 3",
      uploader: "ABC",
      description: "description of video 3"
    },
    {
      id: 4,
      video_src: vid,
      Channel: "add",
      title: "video 4",
      uploader: "ABC",
      description: "description of video 4"
    }
  ];
  return (
    <div>
      <WHL page="Liked Video" videoList={LikedVideos}/>
    </div>
  )
}

export default LikedVideo
