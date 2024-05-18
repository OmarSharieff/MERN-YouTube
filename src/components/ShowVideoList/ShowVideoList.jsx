import React from 'react'
import vid from '../../components/Video/vid.mp4'
import ShowVideo from '../ShowVideo/ShowVideo';
function ShowVideoList({videoId}) {
  const vids = [
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
    <div className='container_ShowVideoGrid'>
      {
        vids?.filter(q=>q.id===videoId).map(vid=>{
          return (
            <div key={vid.id} className="video_box_app">
              <ShowVideo vid={vid}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default ShowVideoList
