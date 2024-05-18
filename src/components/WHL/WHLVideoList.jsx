import React from 'react'
import ShowVideoList from '../ShowVideoList/ShowVideoList'

function WHLVideoList({page,videoList}) {
  return (
    <>
      {
        videoList.map((item,index)=>{
          return(
            <>
              <ShowVideoList videoId={item.id} key={index}/>
            </>
          )
        })
      }
    </>
  )
}

export default WHLVideoList
