import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
import './ShowVideoGrid.css'
function ShowVideoGrid({vids}) {
  return (
    <div className='container_ShowVideoGrid'>
      {
        vids?.map(vid=>{
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

export default ShowVideoGrid
